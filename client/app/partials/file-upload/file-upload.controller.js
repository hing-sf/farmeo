'use strict';

angular.module('pharmeoApp')
  .controller('FileUploadCtrl', function ($scope, $uibModalInstance, multipartForm, $rootScope, Auth) {

      $scope.init = function(){
     		$rootScope.currentUser = Auth.getCurrentUser()._id;
      };

      $scope.pharmacy = {};
      var pharmacyFiles = $scope.pharmacy;
      $scope.emptyfile = false;
      $scope.successupload = false;
    	$scope.uploadFiles = function(){
        pharmacyFiles.currentUser = Auth.getCurrentUser()._id;
        var uploadUrl = '/api/pharmacys';
        if(!pharmacyFiles.file){
        	$scope.emptyfile = true;
        	$scope.successupload = false;
        } else {
        	$scope.emptyfile = false;
        	multipartForm.post(uploadUrl, pharmacyFiles)
        	.then(function(res) {
        		$scope.successupload = true;
        		$scope.pharmacy = {};
            document.forms[0].reset();
        	});
        }
    	}

      $scope.ok = function () {
        $uibModalInstance.close();
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

  });
