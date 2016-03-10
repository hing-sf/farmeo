'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reset-password', {
        url: '/reset-password',
        templateUrl: 'app/partials/reset-password/reset-password.html',
        controller: 'ResetPasswordCtrl'
      })
      .state('sent-password-reset', {
        url: '/sent-password-reset',
        templateUrl: 'app/partials/reset-password/sent-password-reset.html',
        controller: 'ResetPasswordCtrl'
      });
  });
