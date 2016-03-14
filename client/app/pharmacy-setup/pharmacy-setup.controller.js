'use strict';

angular.module('pharmeoApp')
  .controller('PharmacySetupCtrl', function ($scope, $rootScope, Auth) {

	  $scope.init = function(){
	 		$rootScope.currentUser = Auth.getCurrentUser()._id;
	  }();

	  // $(function(){
	  // 	$('a.pop').click(function(e){
	  // 		e.preventDefault();
	  // 	})

	  // 	$('a.pop').popover();
	  // });

	  $scope.test = "asd";


	  $scope.dynamicPopover = {
	    // content: 'Hello, World!',
	    templateUrl: 'app/partials/popover/fileupload-popover.html',
	    // title: 'Title'
	  };

	  $scope.placement = {
	    options: [
	      'top',
	      'top-left',
	      'top-right',
	      'bottom',
	      'bottom-left',
	      'bottom-right',
	      'left',
	      'left-top',
	      'left-bottom',
	      'right',
	      'right-top',
	      'right-bottom'
	    ],
	    selected: 'top'
	  };


  });
