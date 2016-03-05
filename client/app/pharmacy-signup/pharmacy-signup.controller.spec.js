'use strict';

describe('Controller: PharmacySignupCtrl', function () {

  // load the controller's module
  beforeEach(module('pharmeoApp'));

  var PharmacySignupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PharmacySignupCtrl = $controller('PharmacySignupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
