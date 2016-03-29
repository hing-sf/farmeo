/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/pharmacyFiles              ->  index
 * POST    /api/pharmacyFiles              ->  create
 * GET     /api/pharmacyFiles/:id          ->  show
 * PUT     /api/pharmacyFiles/:id          ->  update
 * DELETE  /api/pharmacyFiles/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import PharmacyFile from './pharmacyFile.model';

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

// Gets a list of PharmacyFiles
export function index(req, res) {
  PharmacyFile.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single PharmacyFile from the DB
export function show(req, res) {
  PharmacyFile.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new PharmacyFile in the DB
// export function create(req, res) {
//   PharmacyFile.createAsync(req.body)
//     .then(respondWithResult(res, 201))
//     .catch(handleError(res));
// }

// Creates a new Pharmacy in the DB
export function create(req, res) {
  PharmacyFile.createAsync(req.body)
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

// Updates an existing PharmacyFile in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  PharmacyFile.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a PharmacyFile from the DB
export function destroy(req, res) {
  PharmacyFile.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
