'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('account-setup', {
        url: '/account-setup',
        templateUrl: 'app/partials/account-setup/account-setup.html',
        controller: 'AccountSetupCtrl'
      })
      // .state('account-setup-uib', {
      //   url: '/account-setup',
      //   templateUrl: 'app/partials/account-setup/account-setup.html',
      //   controller: 'ModalInstanceCtrl',
      //   controllerAs: 'uib'
      // });
  });
