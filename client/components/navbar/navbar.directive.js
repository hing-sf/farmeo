angular.module('pharmeoApp')
.directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'components/navbar/navbar.html',
    controller: function($scope) {
    	var isCollapsed = true;

        $scope.init = function() {
    		$scope.isNavbar = function(){
    			var pharmeoBlue = '#1D8DCD';
    			if(isCollapsed){
    				$(".navbar-collapse").slideDown().addClass('mobile-nav-bg');
    				isCollapsed = false;
    			} else {
    				$(".navbar-collapse").slideUp({
    					queue: false,
    					complete: function(){
    						$(this).removeClass('mobile-nav-bg');
    					}
    				});
    				isCollapsed = true;
    			}
    		}
    	} // end jquery
    }
  }
});
