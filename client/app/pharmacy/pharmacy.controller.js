'use strict';

angular.module('pharmeoApp')
  .controller('PharmacyCtrl', function ($scope, CRUDpharmacy, dataService) {
    $scope.message = 'Hello';
    $scope.customerOrders = dataService.customerOrders;
    $scope.busIdTypes = dataService.busIdTypes;


    CRUDpharmacy.query({ id: '56dde3fe9103723153f90a95'}, function(data) {
    	console.log(data);
    });
  });

