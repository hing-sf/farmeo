'use strict';

class NavbarController {
  //start-non-standard
  // menu = [{
  //   'title': 'Home',
  //   'state': 'main'
  // }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth,$location,$rootScope) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

  }
}

angular.module('pharmeoApp')
  .controller('NavbarController', NavbarController);
  // .run('runBlock', runBlock);
