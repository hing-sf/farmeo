'use strict';

angular.module('pharmeoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as main'
        // controllerAs: 'main'
      });
  });
