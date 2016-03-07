'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('account-setup', {
        url: '/account-setup',
        templateUrl: 'app/partials/account-setup/account-setup.html',
        controller: 'AccountSetupCtrl'
      })
  });
