'use strict';

 angular.module('pharmeoApp')
   .controller('FileUploadCtrl', function ($scope, multipartForm, $rootScope, Auth) {
    $scope.init = function(){

    	$rootScope.currentUser = Auth.getCurrentUser()._id;
    };

    $scope.pharmacy = {};
    var pharmacyFiles = $scope.pharmacy;

   	$scope.uploadFiles = function(){
      pharmacyFiles.currentUser = Auth.getCurrentUser()._id;
      console.log(pharmacyFiles)
      var uploadUrl = '/api/pharmacys';
      multipartForm.post(uploadUrl, pharmacyFiles);
 		}
 	});
