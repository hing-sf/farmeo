'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modal', {
        url: '/modal',
        templateUrl: 'app/modal/modal.html',
        controller: 'ModalCtrl'
      });
  });
