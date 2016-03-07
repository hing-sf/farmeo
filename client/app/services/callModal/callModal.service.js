'use strict';

angular.module('pharmeoApp')
  .service('callModal', function ($uibModal, $scope) {
    this.animationsEnabled = true;

    this.opensetup = function (size) {
    	console.log('server')
      var modalInstance = $uibModal.opensetup({
        animation: this.animationsEnabled,
        templateUrl: 'app/partials/account-setup/account-setup.html',
        controller: 'AccountSetupCtrl',
        size: size,
        resolve: {

        }
      });

      // modalInstance.result.then(function () {

      // }, function () {
      //   $log.info('Modal dismissed at: ' + new Date());
      // });
    };

    this.toggleAnimation = function () {
      this.animationsEnabled = !this.animationsEnabled;
    };
  });
