'use strict';

describe('Service: multipartForm', function () {

  // load the service's module
  beforeEach(module('pharmeoApp'));

  // instantiate service
  var multipartForm;
  beforeEach(inject(function (_multipartForm_) {
    multipartForm = _multipartForm_;
  }));

  it('should do something', function () {
    expect(!!multipartForm).toBe(true);
  });

});
