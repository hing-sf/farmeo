'use strict';

angular.module('pharmeoApp.auth', [
  'pharmeoApp.constants',
  'pharmeoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
