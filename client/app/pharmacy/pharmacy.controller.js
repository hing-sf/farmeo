'use strict';

angular.module('pharmeoApp')
  .controller('PharmacyCtrl', function (CRUDpharmacy, dataService) {

    var vm = this;

    vm.customerOrders = dataService.customerOrders;
    vm.busIdTypes = dataService.busIdTypes;
    vm.orderHistorys = dataService.orderHistorys;
    vm.prescriptions = dataService.prescriptions;
    vm.adminProfile = dataService.adminProfile;

    $(function(){
      $('.sidenav-li').click(function(){
        $('.sidenav-li').removeClass("sidenav-active");
        $(this).addClass("sidenav-active");
      });
    });


    CRUDpharmacy.getPharmacy()
    .success(function(res){
      vm.pharmacyInfo = res;
    });


     vm.model = {
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
      vm.getTemplate = function (contact) {
          if (contact.id === vm.model.selected.id) return 'edit';
          else return 'display';
      };

      vm.editContact = function (contact) {
          vm.model.selected = angular.copy(contact);
      };

      vm.saveContact = function (idx) {
          console.log("Saving contact");
          vm.model.contacts[idx] = angular.copy(vm.model.selected);
          vm.reset();
      };

      vm.reset = function () {
          vm.model.selected = {};
      };

      // CRUDpharmacy.query({ id: '56dde3fe9103723153f90a95'}, function(data) {
      // 	console.log(data);
      // });
  });

