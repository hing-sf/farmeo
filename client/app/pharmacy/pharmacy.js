'use strict';

angular.module('pharmeoApp')
.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('pharmacy', {
        url: '/pharmacy',
        templateUrl: 'app/pharmacy/pharmacy.html',
      })
      .state('pharmacy.orders', {
        url: '.orders',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/orders.html',
        controller: 'PharmacyCtrl'
      })
      .state('pharmacy.history', {
        url: '.history',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/history.html',
        controller: 'PharmacyCtrl'
      })
      .state('pharmacy.inventory', {
        url: '.inventory',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/inventory.html',
        controller: 'PharmacyCtrl'
      })
      .state('pharmacy.account', {
        url: '.account',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/account.html',
        controller: 'PharmacyCtrl'
      });

      $urlRouterProvider
        .otherwise('pharmacy.orders');
  });
