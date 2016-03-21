/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
import multer from 'multer';
import express from 'express';
var app = express();

export default function(app) {
  var upload = multer({dest: './uploads/'});
  var type = upload.array('file');
  // Insert routes below
  app.use('/api/partnerRequests', require('./api/partnerRequest'));
  app.use('/api/pharmacys', type, require('./api/pharmacy')); // route to upload pharmacy files
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}


