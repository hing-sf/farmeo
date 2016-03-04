'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pharmacyCtrlStub = {
  index: 'pharmacyCtrl.index',
  show: 'pharmacyCtrl.show',
  create: 'pharmacyCtrl.create',
  update: 'pharmacyCtrl.update',
  destroy: 'pharmacyCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pharmacyIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './pharmacy.controller': pharmacyCtrlStub
});

describe('Pharmacy API Router:', function() {

  it('should return an express router instance', function() {
    pharmacyIndex.should.equal(routerStub);
  });

  describe('GET /api/pharmacys', function() {

    it('should route to pharmacy.controller.index', function() {
      routerStub.get
        .withArgs('/', 'pharmacyCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/pharmacys/:id', function() {

    it('should route to pharmacy.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'pharmacyCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/pharmacys', function() {

    it('should route to pharmacy.controller.create', function() {
      routerStub.post
        .withArgs('/', 'pharmacyCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/pharmacys/:id', function() {

    it('should route to pharmacy.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'pharmacyCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/pharmacys/:id', function() {

    it('should route to pharmacy.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'pharmacyCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/pharmacys/:id', function() {

    it('should route to pharmacy.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'pharmacyCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
