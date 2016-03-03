'use strict';

describe('Controller: PharmacyProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('pharmeoApp'));

  var PharmacyProfileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PharmacyProfileCtrl = $controller('PharmacyProfileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
