'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('account-setup', {
        url: '/account-setup',
        templateUrl: 'app/partials/account-setup/account-setup.html',
        controller: 'AccountSetupCtrl'
      })
      .state('pharmacy-info', {
        url: '/pharmacy-info',
        templateUrl: 'app/partials/account-setup/pharmacy-info.html',
        controller: 'AccountSetupCtrl',
        controllerAs: 'vm'
      })
  });
