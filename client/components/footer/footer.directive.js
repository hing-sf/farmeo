'use strict';

angular.module('pharmeoApp')
  .directive('footer', function() {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        // element.addClass('footer');
      },
      controller: function ($location, $scope){
      	var currentUrl = $location.url();
      	$scope.footer = false;
      	if(currentUrl === '/' || currentUrl === '/login'){
      		$scope.footer = false;
      		// console.log('footer ' + $scope.footer);
      	} else {
      		$scope.footer = true;
      		// console.log('footer ' + $scope.footer);
      	}
    	}
  	}
	});

