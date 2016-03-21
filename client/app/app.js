'use strict';

angular.module('pharmeoApp', [
  'pharmeoApp.auth',
  'pharmeoApp.admin',
  'pharmeoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'toastr'
])
.run(function($rootScope, $location, $urlRouter, $state, $stateParams, Auth) {
  $rootScope.baseUrl = $location.host(); // global base url
  $rootScope.ishomepage = false;
  var location = $location;
  var baseUrl = $location.host();
  var bluelogo = "/assets/logo/pharmeo-Logo-blue.png"
  var whitelogo = "/assets/logo/pharmeo-Logo-white.png"
  var pharmeoblue = "#1D8DCD"
  var white = "#fff"

  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    var currentUrl = baseUrl + $location.path();
    var homepageUrl = baseUrl + '/';
    (function(){
        if(homepageUrl === currentUrl ){ // on Homepage
          $rootScope.ishomepage = true;
          $('#navbrandlogo img').attr("src",whitelogo);
          $('.nav-text').css('color', white);
          $('.navbar-default').removeClass('bg-white');
          $('.navbar-default').css('border-bottom', 'transparent');
        } else {
          $rootScope.ishomepage = false;
          $('#navbrandlogo img').attr("src",bluelogo);
          $('.nav-text').css('color', pharmeoblue);
        }
      })();
    });

  $rootScope.cbpAnimatedHeader = (function() {
    var docElem = document.documentElement,
      header = document.querySelector( '.navbar-default' ),
      didScroll = false,
      changeHeaderOn = 10;

    function init() {
      window.addEventListener( 'scroll', function( event ) {
        if( !didScroll) {
          didScroll = true;
          setTimeout( scrollPage, 250 );
        }
      }, false );
    }

    function scrollPage() {
      var sy = scrollY();
        if ( sy >= changeHeaderOn) {
          if($rootScope.ishomepage){
            $('.navbar-default').addClass('bg-white');
            $('.nav-text').css('color', pharmeoblue);
            $('#navbrandlogo img').attr("src",bluelogo);
          }
          if(!$rootScope.ishomepage){
            $('.navbar-default').addClass('bg-white');
            $('#navbrandlogo img').attr("src",bluelogo);
          }
        } else {
          if($rootScope.ishomepage){
            $('.navbar-default').removeClass('bg-white');
            $('.nav-text').css('color', white);
            $('#navbrandlogo img').attr("src",whitelogo);
          }
          if(!$rootScope.ishomepage){
            $('#navbrandlogo img').attr("src",bluelogo);
          }
        }

        didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();

  })();

  }) // End run block
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
