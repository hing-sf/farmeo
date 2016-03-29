'use strict';

var app = require('../..');
import request from 'supertest';

var newPharmacyFile;

describe('PharmacyFile API:', function() {

  describe('GET /api/pharmacyFiles', function() {
    var pharmacyFiles;

    beforeEach(function(done) {
      request(app)
        .get('/api/pharmacyFiles')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pharmacyFiles = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      pharmacyFiles.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/pharmacyFiles', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/pharmacyFiles')
        .send({
          name: 'New PharmacyFile',
          info: 'This is the brand new pharmacyFile!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPharmacyFile = res.body;
          done();
        });
    });

    it('should respond with the newly created pharmacyFile', function() {
      newPharmacyFile.name.should.equal('New PharmacyFile');
      newPharmacyFile.info.should.equal('This is the brand new pharmacyFile!!!');
    });

  });

  describe('GET /api/pharmacyFiles/:id', function() {
    var pharmacyFile;

    beforeEach(function(done) {
      request(app)
        .get('/api/pharmacyFiles/' + newPharmacyFile._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pharmacyFile = res.body;
          done();
        });
    });

    afterEach(function() {
      pharmacyFile = {};
    });

    it('should respond with the requested pharmacyFile', function() {
      pharmacyFile.name.should.equal('New PharmacyFile');
      pharmacyFile.info.should.equal('This is the brand new pharmacyFile!!!');
    });

  });

  describe('PUT /api/pharmacyFiles/:id', function() {
    var updatedPharmacyFile;

    beforeEach(function(done) {
      request(app)
        .put('/api/pharmacyFiles/' + newPharmacyFile._id)
        .send({
          name: 'Updated PharmacyFile',
          info: 'This is the updated pharmacyFile!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPharmacyFile = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPharmacyFile = {};
    });

    it('should respond with the updated pharmacyFile', function() {
      updatedPharmacyFile.name.should.equal('Updated PharmacyFile');
      updatedPharmacyFile.info.should.equal('This is the updated pharmacyFile!!!');
    });

  });

  describe('DELETE /api/pharmacyFiles/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/pharmacyFiles/' + newPharmacyFile._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when pharmacyFile does not exist', function(done) {
      request(app)
        .delete('/api/pharmacyFiles/' + newPharmacyFile._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
