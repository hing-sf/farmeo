'use strict';

describe('Service: CRUDpharmacy', function () {

  // load the service's module
  beforeEach(module('pharmeoApp'));

  // instantiate service
  var CRUDpharmacy;
  beforeEach(inject(function (_CRUDpharmacy_) {
    CRUDpharmacy = _CRUDpharmacy_;
  }));

  it('should do something', function () {
    expect(!!CRUDpharmacy).toBe(true);
  });

});
