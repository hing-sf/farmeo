'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pharmacyFilesCtrlStub = {
  index: 'pharmacyFilesCtrl.index',
  show: 'pharmacyFilesCtrl.show',
  create: 'pharmacyFilesCtrl.create',
  update: 'pharmacyFilesCtrl.update',
  destroy: 'pharmacyFilesCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pharmacyFilesIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './pharmacy_files.controller': pharmacyFilesCtrlStub
});

describe('PharmacyFiles API Router:', function() {

  it('should return an express router instance', function() {
    pharmacyFilesIndex.should.equal(routerStub);
  });

  describe('GET /api/pharmacy_files', function() {

    it('should route to pharmacyFiles.controller.index', function() {
      routerStub.get
        .withArgs('/', 'pharmacyFilesCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/pharmacy_files/:id', function() {

    it('should route to pharmacyFiles.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'pharmacyFilesCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/pharmacy_files', function() {

    it('should route to pharmacyFiles.controller.create', function() {
      routerStub.post
        .withArgs('/', 'pharmacyFilesCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/pharmacy_files/:id', function() {

    it('should route to pharmacyFiles.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'pharmacyFilesCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/pharmacy_files/:id', function() {

    it('should route to pharmacyFiles.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'pharmacyFilesCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/pharmacy_files/:id', function() {

    it('should route to pharmacyFiles.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'pharmacyFilesCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
