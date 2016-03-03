'use strict';

var app = require('../..');
import request from 'supertest';

var newPharmacyFiles;

describe('PharmacyFiles API:', function() {

  describe('GET /api/pharmacy_files', function() {
    var pharmacyFiless;

    beforeEach(function(done) {
      request(app)
        .get('/api/pharmacy_files')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pharmacyFiless = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      pharmacyFiless.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/pharmacy_files', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/pharmacy_files')
        .send({
          name: 'New PharmacyFiles',
          info: 'This is the brand new pharmacyFiles!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPharmacyFiles = res.body;
          done();
        });
    });

    it('should respond with the newly created pharmacyFiles', function() {
      newPharmacyFiles.name.should.equal('New PharmacyFiles');
      newPharmacyFiles.info.should.equal('This is the brand new pharmacyFiles!!!');
    });

  });

  describe('GET /api/pharmacy_files/:id', function() {
    var pharmacyFiles;

    beforeEach(function(done) {
      request(app)
        .get('/api/pharmacy_files/' + newPharmacyFiles._id)
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

    afterEach(function() {
      pharmacyFiles = {};
    });

    it('should respond with the requested pharmacyFiles', function() {
      pharmacyFiles.name.should.equal('New PharmacyFiles');
      pharmacyFiles.info.should.equal('This is the brand new pharmacyFiles!!!');
    });

  });

  describe('PUT /api/pharmacy_files/:id', function() {
    var updatedPharmacyFiles;

    beforeEach(function(done) {
      request(app)
        .put('/api/pharmacy_files/' + newPharmacyFiles._id)
        .send({
          name: 'Updated PharmacyFiles',
          info: 'This is the updated pharmacyFiles!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPharmacyFiles = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPharmacyFiles = {};
    });

    it('should respond with the updated pharmacyFiles', function() {
      updatedPharmacyFiles.name.should.equal('Updated PharmacyFiles');
      updatedPharmacyFiles.info.should.equal('This is the updated pharmacyFiles!!!');
    });

  });

  describe('DELETE /api/pharmacy_files/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/pharmacy_files/' + newPharmacyFiles._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when pharmacyFiles does not exist', function(done) {
      request(app)
        .delete('/api/pharmacy_files/' + newPharmacyFiles._id)
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
