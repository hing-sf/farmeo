'use strict';

angular.module('pharmeoApp')
  .controller('PharmacyCtrl', function (CRUDpharmacy, dataService) {

    var vm = this;

    this.customerOrders = dataService.customerOrders;
    this.busIdTypes = dataService.busIdTypes;
    this.orderHistorys = dataService.orderHistorys;
    this.prescriptions = dataService.prescriptions;
    this.adminProfile = dataService.adminProfile;

    $(function(){
      $('.sidenav-li').click(function(){
        $('.sidenav-li').removeClass("sidenav-active");
        $(this).addClass("sidenav-active");
      });
    });

 this.model = {
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
  this.getTemplate = function (contact) {
      if (contact.id === this.model.selected.id) return 'edit';
      else return 'display';
  };

  this.editContact = function (contact) {
      this.model.selected = angular.copy(contact);
  };

  this.saveContact = function (idx) {
      console.log("Saving contact");
      this.model.contacts[idx] = angular.copy(this.model.selected);
      this.reset();
  };

  this.reset = function () {
      this.model.selected = {};
  };

    // CRUDpharmacy.query({ id: '56dde3fe9103723153f90a95'}, function(data) {
    // 	console.log(data);
    // });
  });

