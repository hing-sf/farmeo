angular.module('pharmeoApp')
.controller('NavbarController', function($scope,Auth) {

  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;

  // $scope.isCollapsed = true;
  // function NavBarCtrl($scope) {
      // $scope.isCollapsed = true;
  // }


});

