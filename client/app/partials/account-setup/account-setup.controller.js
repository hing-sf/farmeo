'use strict';

angular.module('pharmeoApp')
.controller('AccountSetupCtrl', function ($scope) {

  $scope.init = function(){
 		$rootScope.currentUser = Auth.getCurrentUser()._id;
  };

});
