'use strict';

angular.module('pharmeoApp')
.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('pharmacy-setup', {
        url: '/pharmacy-setup',
        templateUrl: 'app/pharmacy-setup/pharmacy-setup.html',
        controller: 'PharmacySetupCtrl'
      })
      .state('pharmacy-setup.step1', {
        url: '.step1',
        parent: 'pharmacy-setup',
        templateUrl: 'app/pharmacy-setup/step1.html'
      })
      .state('pharmacy-setup.step2', {
        url: '.step2',
        parent: 'pharmacy-setup',
        templateUrl: 'app/pharmacy-setup/step2.html'
      })
      .state('pharmacy-setup.step3', {
        url: '.step3',
        parent: 'pharmacy-setup',
        templateUrl: 'app/pharmacy-setup/step3.html'
      })
      .state('pharmacy-setup.step4', {
        url: '.step4',
        parent: 'pharmacy-setup',
        templateUrl: 'app/pharmacy-setup/step4.html'
      });

      $urlRouterProvider
        .otherwise('pharmacy-setup.step1');
  });


// .state('pharmacy-setup', {
//   url: '/pharmacy-setup',
//   templateUrl: 'app/pharmacy-setup/pharmacy-setup.html',
// })
// .state('pharmacy-setup.step1', {
//   url: '.step1',
//   parent: 'pharmacy-setup',
//   templateUrl: 'app/pharmacy-setup/step1.html',
//   controller: 'PharmacySetupCtrl'
// })
// .state('pharmacy-setup.step2', {
//   url: '.step2',
//   parent: 'pharmacy-setup',
//   templateUrl: 'app/pharmacy-setup/step2.html',
//   controller: 'PharmacySetupCtrl'
// })
// .state('pharmacy-setup.step3', {
//   url: '.step3',
//   parent: 'pharmacy-setup',
//   templateUrl: 'app/pharmacy-setup/step3.html',
//   controller: 'PharmacySetupCtrl'
// })
// .state('pharmacy-setup.step4', {
//   url: '.step4',
//   parent: 'pharmacy-setup',
//   templateUrl: 'app/pharmacy-setup/step4.html',
//   controller: 'PharmacySetupCtrl'
// });
