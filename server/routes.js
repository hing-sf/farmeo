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
  var type = upload.single('file');
  // Insert routes below
  app.use('/api/pharmacys', type, require('./api/pharmacy'));
  // app.use('/api/pharmacys', upload.single('avatar'), require('./api/pharmacy'));
  // app.post('/api/upload', type, function (req,res,next) {
  //   console.log('REACHED SERVER');
  //   console.log(req.file);
  //   req.body will hold the text fields, if there were any
  // });

  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // === CODEMENTOR =========================
  // app.post('/api/upload',upload.single("userdoc"),function(req,res,next){
  //   var userdoc = req.file;
  //   console.log(userdoc);
  //   console.log(req.body);
  //   console.log('REACHED SERVER');
  //   res.status(204).end();
  // });
  // === CODEMENTOR =========================

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}


