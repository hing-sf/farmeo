'use strict';

angular.module('pharmeoApp')
  .controller('PharmacyCtrl', function ($scope, CRUDpharmacy, dataService) {

    $scope.customerOrders = dataService.customerOrders;
    $scope.busIdTypes = dataService.busIdTypes;

    $scope.orderHistorys = [
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'}
    ];

    $scope.prescriptions = [
        { 'name' : 'Lisinopril', 'dose' : '20mg Capsule', 'stock' : 'In stock', 'price' : '45.00'},
        { 'name' : 'Simvastatin', 'dose' : '40mg Tablet', 'stock' : 'Out of stock', 'price' : '40.00'},
        { 'name' : 'Lisinopril', 'dose' : '20mg Capsule', 'stock' : 'In stock', 'price' : '45.00'}

    ];

    $scope.adminProfile = [
        { 'pharmacy' : 'Target',
          'f_name' : 'Melissa',
          'l_name' : 'Parker',
          'email' : 'melparker@gmail.com',
          'phone' : '(415) 873 - 1234',
          'acctType' : 'Checking',
          'acctNo' : '829364',
          'routing' : '0947-96454',
          'street' : '123 Mission St.',
          'city' : 'San Francisco',
          'state' : 'Ca',
          'zip' : '93456'
      }
    ];

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

