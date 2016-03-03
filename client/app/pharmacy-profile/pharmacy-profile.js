'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pharmacy-profile', {
        url: '/pharmacy-profile',
        templateUrl: 'app/pharmacy-profile/pharmacy-profile.html',
        controller: 'PharmacyProfileCtrl'
      });
  });
