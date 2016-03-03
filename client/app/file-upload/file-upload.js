'use strict';

angular.module('pharmeoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('file-upload', {
        url: '/file-upload',
        templateUrl: 'app/file-upload/file-upload.html',
        controller: 'FileUploadCtrl'
      });
  });
