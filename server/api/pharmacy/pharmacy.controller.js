/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/pharmacys              ->  index
 * POST    /api/pharmacys              ->  create
 * GET     /api/pharmacys/:id          ->  show
 * PUT     /api/pharmacys/:id          ->  update
 * DELETE  /api/pharmacys/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Pharmacy from './pharmacy.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Pharmacys
export function index(req, res) {
  Pharmacy.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Pharmacy from the DB
export function show(req, res) {
  Pharmacy.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Pharmacy in the DB
export function create(req, res) {
  Pharmacy.createAsync(req.body)
    .then(
      function(e) {
        //WithResult(res, 201))
        var files = req.files;
        var paths = [];
        console.log(files);

        files.forEach(function(file) {
          var path = file.path;
          paths.push(path);

          console.log(path);
        });

        e.file= paths;
        console.log(e);
        res.send({success:true});

        return e.saveAsync()
          .spread(e => {
            return e;
          });
      }).catch(handleError(res));
}

// Updates an existing Pharmacy in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Pharmacy.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Pharmacy from the DB
export function destroy(req, res) {
  Pharmacy.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
