/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/pharmacy_files              ->  index
 * POST    /api/pharmacy_files              ->  create
 * GET     /api/pharmacy_files/:id          ->  show
 * PUT     /api/pharmacy_files/:id          ->  update
 * DELETE  /api/pharmacy_files/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import PharmacyFiles from './pharmacy_files.model';

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

// Gets a list of PharmacyFiless
export function index(req, res) {
  PharmacyFiles.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single PharmacyFiles from the DB
export function show(req, res) {
  PharmacyFiles.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new PharmacyFiles in the DB
export function create(req, res) {
  PharmacyFiles.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing PharmacyFiles in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  PharmacyFiles.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a PharmacyFiles from the DB
export function destroy(req, res) {
  PharmacyFiles.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
