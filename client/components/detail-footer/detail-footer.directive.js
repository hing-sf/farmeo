'use strict';

angular.module('pharmeoApp')
  .directive('detailFooter', function () {
    return {
      templateUrl: 'components/detail-footer/detail-footer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	// element.addClass('footer');
      },
      controller: function ($location, $scope){
      	var currentUrl = $location.url();
      	$scope.footer2 = false;
    		if(currentUrl === '/' || currentUrl === '/login'){
    			$scope.footer2 = true;
    			console.log('footer2 ' + $scope.footer2);
    		} else {
    			$scope.footer2 = false;
    			console.log('footer2 ' + $scope.footer2);
    		}
      }
   	}
  });

