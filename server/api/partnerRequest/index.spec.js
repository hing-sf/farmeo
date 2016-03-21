'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var partnerRequestCtrlStub = {
  index: 'partnerRequestCtrl.index',
  show: 'partnerRequestCtrl.show',
  create: 'partnerRequestCtrl.create',
  update: 'partnerRequestCtrl.update',
  destroy: 'partnerRequestCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var partnerRequestIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './partnerRequest.controller': partnerRequestCtrlStub
});

describe('PartnerRequest API Router:', function() {

  it('should return an express router instance', function() {
    partnerRequestIndex.should.equal(routerStub);
  });

  describe('GET /api/partnerRequests', function() {

    it('should route to partnerRequest.controller.index', function() {
      routerStub.get
        .withArgs('/', 'partnerRequestCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/partnerRequests/:id', function() {

    it('should route to partnerRequest.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'partnerRequestCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/partnerRequests', function() {

    it('should route to partnerRequest.controller.create', function() {
      routerStub.post
        .withArgs('/', 'partnerRequestCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/partnerRequests/:id', function() {

    it('should route to partnerRequest.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'partnerRequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/partnerRequests/:id', function() {

    it('should route to partnerRequest.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'partnerRequestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/partnerRequests/:id', function() {

    it('should route to partnerRequest.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'partnerRequestCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
