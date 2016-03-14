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
        controller: 'PharmacyCtrl as vm'
      })
      .state('pharmacy.history', {
        url: '.history',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/history.html',
        controller: 'PharmacyCtrl as vm'
      })
      .state('pharmacy.inventory', {
        url: '.inventory',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/inventory.html',
        controller: 'PharmacyCtrl as vm'
      })
      .state('pharmacy.account', {
        url: '.account',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/account.html',
        controller: 'PharmacyCtrl as vm'
      });

      $urlRouterProvider
        .otherwise('pharmacy.orders');
  });
