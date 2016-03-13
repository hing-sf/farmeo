'use strict';

angular.module('pharmeoApp')
  .controller('PharmacyCtrl', function ($scope, CRUDpharmacy, dataService) {

    $scope.customerOrders = dataService.customerOrders;
    $scope.busIdTypes = dataService.busIdTypes;

    // $scope.toggleSidenav = function(){
    // 	console.log('controller')
    // 	$('#bs-example-navbar-collapse-2')
    // 	    .on('show.bs.collapse', function (e) {
    // 	        $('body').addClass('menu-slider');
    // 	    })
    // 	    .on('shown.bs.collapse', function (e) {
    // 	        $('body').addClass('in');
    // 	    })
    // 	    .on('hide.bs.collapse', function (e) {
    // 	        $('body').removeClass('menu-slider');
    // 	    })
    // 	    .on('hidden.bs.collapse', function (e) {
    // 	        $('body').removeClass('in');
    // 	    });
    	// console.log('clicked')
    	// $( "#bs-example-navbar-collapse-2" ).animate({
    	// 		"left": "-500px",
    	// 		opacity: "-0"
    	// 	}, function() {

    	// 	});
   	// };

    // CRUDpharmacy.query({ id: '56dde3fe9103723153f90a95'}, function(data) {
    // 	console.log(data);
    // });
  });

