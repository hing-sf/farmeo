'use strict';

describe('Controller: PharmacySetupCtrl', function () {

  // load the controller's module
  beforeEach(module('pharmeoApp'));

  var PharmacySetupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PharmacySetupCtrl = $controller('PharmacySetupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
