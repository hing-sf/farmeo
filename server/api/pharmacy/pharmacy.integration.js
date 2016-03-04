'use strict';

var app = require('../..');
import request from 'supertest';

var newPharmacy;

describe('Pharmacy API:', function() {

  describe('GET /api/pharmacys', function() {
    var pharmacys;

    beforeEach(function(done) {
      request(app)
        .get('/api/pharmacys')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pharmacys = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      pharmacys.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/pharmacys', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/pharmacys')
        .send({
          name: 'New Pharmacy',
          info: 'This is the brand new pharmacy!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPharmacy = res.body;
          done();
        });
    });

    it('should respond with the newly created pharmacy', function() {
      newPharmacy.name.should.equal('New Pharmacy');
      newPharmacy.info.should.equal('This is the brand new pharmacy!!!');
    });

  });

  describe('GET /api/pharmacys/:id', function() {
    var pharmacy;

    beforeEach(function(done) {
      request(app)
        .get('/api/pharmacys/' + newPharmacy._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pharmacy = res.body;
          done();
        });
    });

    afterEach(function() {
      pharmacy = {};
    });

    it('should respond with the requested pharmacy', function() {
      pharmacy.name.should.equal('New Pharmacy');
      pharmacy.info.should.equal('This is the brand new pharmacy!!!');
    });

  });

  describe('PUT /api/pharmacys/:id', function() {
    var updatedPharmacy;

    beforeEach(function(done) {
      request(app)
        .put('/api/pharmacys/' + newPharmacy._id)
        .send({
          name: 'Updated Pharmacy',
          info: 'This is the updated pharmacy!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPharmacy = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPharmacy = {};
    });

    it('should respond with the updated pharmacy', function() {
      updatedPharmacy.name.should.equal('Updated Pharmacy');
      updatedPharmacy.info.should.equal('This is the updated pharmacy!!!');
    });

  });

  describe('DELETE /api/pharmacys/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/pharmacys/' + newPharmacy._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when pharmacy does not exist', function(done) {
      request(app)
        .delete('/api/pharmacys/' + newPharmacy._id)
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
