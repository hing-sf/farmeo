'use strict';

var app = require('../..');
import request from 'supertest';

var newPartnerRequest;

describe('PartnerRequest API:', function() {

  describe('GET /api/partnerRequests', function() {
    var partnerRequests;

    beforeEach(function(done) {
      request(app)
        .get('/api/partnerRequests')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          partnerRequests = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      partnerRequests.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/partnerRequests', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/partnerRequests')
        .send({
          name: 'New PartnerRequest',
          info: 'This is the brand new partnerRequest!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPartnerRequest = res.body;
          done();
        });
    });

    it('should respond with the newly created partnerRequest', function() {
      newPartnerRequest.name.should.equal('New PartnerRequest');
      newPartnerRequest.info.should.equal('This is the brand new partnerRequest!!!');
    });

  });

  describe('GET /api/partnerRequests/:id', function() {
    var partnerRequest;

    beforeEach(function(done) {
      request(app)
        .get('/api/partnerRequests/' + newPartnerRequest._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          partnerRequest = res.body;
          done();
        });
    });

    afterEach(function() {
      partnerRequest = {};
    });

    it('should respond with the requested partnerRequest', function() {
      partnerRequest.name.should.equal('New PartnerRequest');
      partnerRequest.info.should.equal('This is the brand new partnerRequest!!!');
    });

  });

  describe('PUT /api/partnerRequests/:id', function() {
    var updatedPartnerRequest;

    beforeEach(function(done) {
      request(app)
        .put('/api/partnerRequests/' + newPartnerRequest._id)
        .send({
          name: 'Updated PartnerRequest',
          info: 'This is the updated partnerRequest!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPartnerRequest = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPartnerRequest = {};
    });

    it('should respond with the updated partnerRequest', function() {
      updatedPartnerRequest.name.should.equal('Updated PartnerRequest');
      updatedPartnerRequest.info.should.equal('This is the updated partnerRequest!!!');
    });

  });

  describe('DELETE /api/partnerRequests/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/partnerRequests/' + newPartnerRequest._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when partnerRequest does not exist', function(done) {
      request(app)
        .delete('/api/partnerRequests/' + newPartnerRequest._id)
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
