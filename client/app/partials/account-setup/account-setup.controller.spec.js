'use strict';

describe('Controller: AccountSetupCtrl', function () {

  // load the controller's module
  beforeEach(module('pharmeoApp'));

  var AccountSetupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountSetupCtrl = $controller('AccountSetupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
