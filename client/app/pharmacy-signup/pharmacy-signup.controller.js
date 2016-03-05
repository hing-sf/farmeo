'use strict';

class PharmacySignupCtrl {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  // dependencie injection here
  constructor($scope, Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        password: this.user.password,
        pharmacy_name: this.user.pharmacy_name,
        pharmacy_zip: this.user.pharmacy_zip,
        pharmacy_contact: this.user.pharmacy_contact
      })
      .then(() => {
        // Account created, redirect to home
        this.$state.go('main');
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
  .controller('PharmacySignupCtrl', PharmacySignupCtrl);
