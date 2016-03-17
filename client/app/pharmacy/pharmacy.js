'use strict';

angular.module('pharmeoApp')
.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('pharmacy', {
        url: '/pharmacy',
        templateUrl: 'app/pharmacy/pharmacy.html',
        controller: 'PharmacyCtrl as vm'
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
      })
      .state('pharmacy.billing-edit', {
        url: '.billing-edit',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/billing-edit.html',
        controller: 'PharmacyCtrl as vm'
      })
      .state('pharmacy.address-edit', {
        url: '.address-edit',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/address-edit.html',
        controller: 'PharmacyCtrl as vm'
      })
      .state('pharmacy.pharmacy-edit', {
        url: '.pharmacy-edit',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/pharmacy-edit.html',
        controller: 'PharmacyCtrl as vm'
      })
      .state('pharmacy.password-edit', {
        url: '.password-edit',
        parent: 'pharmacy',
        templateUrl: 'app/pharmacy/password-edit.html',
        controller: 'PharmacyCtrl as vm'
      });

      $urlRouterProvider
        .otherwise('pharmacy.orders');
  });
