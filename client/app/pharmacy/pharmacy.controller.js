'use strict';

angular.module('pharmeoApp')
  .controller('PharmacyCtrl', function ($scope, CRUDpharmacy, dataService) {

    $scope.customerOrders = dataService.customerOrders;
    $scope.busIdTypes = dataService.busIdTypes;
    $scope.orderHistorys = dataService.orderHistorys;
    $scope.prescriptions = dataService.prescriptions;
    $scope.adminProfile = dataService.adminProfile;

    $(function(){
      $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
        console.log('asf;dj')
      });
    });

    // CRUDpharmacy.query({ id: '56dde3fe9103723153f90a95'}, function(data) {
    // 	console.log(data);
    // });
  });

