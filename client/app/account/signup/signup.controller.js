'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  // dependencie injection here
  constructor($scope, Auth, $state, $uibModal, $log) {
    this.Auth = Auth;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.$log = $log;
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        pharmacy_contact: this.user.pharmacy_contact,
        workemail: this.user.workemail,
        password: this.user.password
      })
      .then(() => {
        // Account created, redirect to home
        this.$state.go('main');
        this.$uibModal.open({
          templateUrl: 'app/partials/account-setup/account-setup.html',
          controller: 'AccountSetupCtrl',
          size: 'lg'
        });

      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }

}

angular.module('pharmeoApp')
  .controller('SignupController', SignupController);
