'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pharmacy-signup', {
        url: '/pharmacy-signup',
        templateUrl: 'app/pharmacy-signup/pharmacy-signup.html',
        controller: 'PharmacySignupCtrl',
        controllerAs: 'vm'
      });
  });
