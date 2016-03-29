'use strict';

angular.module('pharmeoApp')
  .controller('PharmacySetupCtrl', function ($scope, $rootScope, $state, Auth, dataService, CRUDpharmacy, toastr) {

  	// var vm = this;

  	$scope.pharmacyData = {};
  	$scope.placement = dataService.placement;

	  $scope.init = function(){
	 		$rootScope.currentUser = Auth.getCurrentUser()._id;
	  }();

	  $scope.dynamicPopover = {
	    templateUrl: 'app/partials/popover/fileupload.html',
	  };

	  $scope.addPharmacy = function(){
	  	var data = $scope.pharmacyData;
	  	data.currentUser = Auth.getCurrentUser()._id;
	  	if(!data.currentUser){
	  		data.currentUser = Auth.getCurrentUser()._id;
	  	} else {
	  		CRUDpharmacy.postNewPharmacy(data)
	  		.success(function(res){
	  			toastr.success('Thank you for signing up with Pharmeo, we are happy you join our program. ');
	  			$state.go('pharmacy-setup.step4');
	  		});
	  	};

	  };



  });
