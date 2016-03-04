'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pharmacy', {
        url: '/pharmacy',
        templateUrl: 'app/pharmacy/pharmacy.html',
        controller: 'PharmacyCtrl'
      });
  });
