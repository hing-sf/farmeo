'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('file-upload', {
        url: '/file-upload',
        templateUrl: 'app/partials/file-upload/file-upload.html',
        controller: 'FileUploadCtrl'
      });
  });
