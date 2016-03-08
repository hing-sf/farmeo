'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('account-setup', {
        url: '/account-setup',
        templateUrl: 'app/partials/account-setup/account-setup.html',
        controller: 'AccountSetupCtrl as vm'
      })
      .state('account-setup-2', {
        url: '/account-setup-2',
        templateUrl: 'app/partials/account-setup/account-setup-2.html',
        controller: 'AccountSetupCtrl as vm'
      });
  });
