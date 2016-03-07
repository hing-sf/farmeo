'use strict';

angular.module('pharmeoApp')
  .service('multipartForm', ['$http', function($http, $scope){
    this.post = function(uploadUrl, data){
      var fd = new FormData();
      for(var key in data)
        fd.append(key, data[key]);
        var request = $http.post(uploadUrl, fd, {
        transformRequest: angular.indentity,
        headers: { 'Content-Type': undefined }
      })
        return request;
    }
  }]);
