'use strict';

 angular.module('pharmeoApp')
   .controller('FileUploadCtrl', function ($scope, multipartForm, $rootScope) {
    var currentUser = $rootScope.currentUser._id;

   	$scope.Submit = function(){
      var file = $scope.file;
      file.currentUser = currentUser;
      console.log(file);
   		var uploadUrl = '/api/pharmacys';
   		multipartForm.post(uploadUrl, file);
 	}
 });
