'use strict';

angular.module('pharmeoApp')
  .controller('PharmacyCtrl', function ($scope, CRUDpharmacy, dataService) {

    $scope.customerOrders = dataService.customerOrders;
    $scope.busIdTypes = dataService.busIdTypes;
    $scope.orderHistorys = dataService.orderHistorys;
    $scope.prescriptions = dataService.prescriptions;
    $scope.adminProfile = dataService.adminProfile;

    $(function(){
      $('.sidenav-li').click(function(){
        $('.sidenav-li').removeClass("sidenav-active");
        $(this).addClass("sidenav-active");
      });
    });

 $scope.model = {
      contacts: [{
          id: 1,
          name: "Ben",
          age: 28
      }, {
          id: 2,
          name: "Sally",
          age: 24
      }, {
          id: 3,
          name: "John",
          age: 32
      }, {
          id: 4,
          name: "Jane",
          age: 40
      }],
      selected: {}
  };

  // gets the template to ng-include for a table row / item
  $scope.getTemplate = function (contact) {
      if (contact.id === $scope.model.selected.id) return 'edit';
      else return 'display';
  };

  $scope.editContact = function (contact) {
      $scope.model.selected = angular.copy(contact);
  };

  $scope.saveContact = function (idx) {
      console.log("Saving contact");
      $scope.model.contacts[idx] = angular.copy($scope.model.selected);
      $scope.reset();
  };

  $scope.reset = function () {
      $scope.model.selected = {};
  };

    // CRUDpharmacy.query({ id: '56dde3fe9103723153f90a95'}, function(data) {
    // 	console.log(data);
    // });
  });

