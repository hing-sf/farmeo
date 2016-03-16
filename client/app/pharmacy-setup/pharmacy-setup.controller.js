'use strict';

angular.module('pharmeoApp')
  .controller('PharmacySetupCtrl', function ($scope, $rootScope, Auth, dataService) {

  	$scope.placement = dataService.placement;

	  $scope.init = function(){
	 		$rootScope.currentUser = Auth.getCurrentUser()._id;
	  }();

	  $scope.dynamicPopover = {
	    templateUrl: 'app/partials/popover/fileupload.html',
	  };



  });
