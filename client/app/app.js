'use strict';

angular.module('pharmeoApp', [
  'pharmeoApp.auth',
  'pharmeoApp.admin',
  'pharmeoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
.run(function($rootScope, $location, $urlRouter, $state, $stateParams) {
  $rootScope.baseUrl = $location.host(); // global base url
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      var currentUrl = $location.url(); // get the Current url
      var homeUrl = '/';
      $rootScope.homepage = '';
      if(homeUrl === currentUrl ){
        $rootScope.homepage = true;
        return
      } else {
        $rootScope.homepage = false;
        return
      }
    })
  })
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
