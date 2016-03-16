angular.module('pharmeoApp')
.controller('NavbarController', function($scope, Auth, dataService) {

  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;
  $scope.placement = dataService.placement;

  $scope.dynamicPopover = {
    templateUrl: 'app/partials/popover/help.html',
  };
  // $scope.isCollapsed = true;
  // function NavBarCtrl($scope) {
      // $scope.isCollapsed = true;
  // }


});

