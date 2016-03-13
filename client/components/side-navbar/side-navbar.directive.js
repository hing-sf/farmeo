'use strict';

angular.module('pharmeoApp')
  .directive('sideNavbar', function () {
    return {
      templateUrl: 'components/side-navbar/side-navbar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      },
      controller: function($scope){

      	$scope.test = "this is a test"
      	$scope.sidenav_btn = function(){
      		console.log('controller')
      		$('#bs-example-navbar-collapse-2')
      		    .on('show.bs.collapse', function (e) {
      		        $('body').addClass('menu-slider');
      		    })
      		    .on('shown.bs.collapse', function (e) {
      		        $('body').addClass('in');
      		    })
      		    .on('hide.bs.collapse', function (e) {
      		        $('body').removeClass('menu-slider');
      		    })
      		    .on('hidden.bs.collapse', function (e) {
      		        $('body').removeClass('in');
      		    });
      	}
      }
  	};

  });
