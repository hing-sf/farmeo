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
  // 'multipartForm'
  // 'fileModel'
  // 'flow'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
