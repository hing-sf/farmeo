'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pharmacyFileCtrlStub = {
  index: 'pharmacyFileCtrl.index',
  show: 'pharmacyFileCtrl.show',
  create: 'pharmacyFileCtrl.create',
  update: 'pharmacyFileCtrl.update',
  destroy: 'pharmacyFileCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pharmacyFileIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './pharmacyFile.controller': pharmacyFileCtrlStub
});

describe('PharmacyFile API Router:', function() {

  it('should return an express router instance', function() {
    pharmacyFileIndex.should.equal(routerStub);
  });

  describe('GET /api/pharmacyFiles', function() {

    it('should route to pharmacyFile.controller.index', function() {
      routerStub.get
        .withArgs('/', 'pharmacyFileCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/pharmacyFiles/:id', function() {

    it('should route to pharmacyFile.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'pharmacyFileCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/pharmacyFiles', function() {

    it('should route to pharmacyFile.controller.create', function() {
      routerStub.post
        .withArgs('/', 'pharmacyFileCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/pharmacyFiles/:id', function() {

    it('should route to pharmacyFile.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'pharmacyFileCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/pharmacyFiles/:id', function() {

    it('should route to pharmacyFile.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'pharmacyFileCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/pharmacyFiles/:id', function() {

    it('should route to pharmacyFile.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'pharmacyFileCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
