'use strict';

describe('Service: callModal', function () {

  // load the service's module
  beforeEach(module('pharmeoApp'));

  // instantiate service
  var callModal;
  beforeEach(inject(function (_callModal_) {
    callModal = _callModal_;
  }));

  it('should do something', function () {
    expect(!!callModal).toBe(true);
  });

});
