'use strict';

 angular.module('pharmeoApp')
   .controller('MainController', function ($http, $scope, socket, $uibModal, $log, dataService, CRUDpharmacy, toastr) {

    var main = this;

    main.partneringInfo = {};
    main.section1 = dataService.section1;

    main.animationsEnabled = true;

    main.opensetup = function (size) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/partials/file-upload/file-upload.html',
        controller: 'AccountSetupCtrl',
        size: size,
        resolve: {

        }
      });

      modalInstance.result.then(function () {

      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    main.toggleAnimation = function () {
      main.animationsEnabled = !main.animationsEnabled;
    };

    main.partnerRequest = function() {
      var data = main.partneringInfo;
      CRUDpharmacy.postPartnerRequest(data)
      .success(function(res){
        toastr.success('Thank you for your interest in partnering with Pharmeo, your submission was successful and we will get in contact with you soon.');
        main.partneringInfo = '';
      })
      .error(function(res, err){
        console.log(err);
      });
    };

    main.getPartners = function(){
      CRUDpharmacy.getPartnerRequest()
      .success(function(res){
        main.partners = res.data;
      });
    }


    // ORIGINAL TEST DATA
    // $http.get('/api/things').then(response => {
    //   this.awesomeThings = response.data;
    //   socket.syncUpdates('thing', this.awesomeThings);
    // });

    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('thing');
    // });
  });





   // 'use strict';

   // (function() {

   // class MainController {
   //   section1 = [
   //     {
   //     image: '/assets/icons/home.icon1.svg',
   //     title: 'Find your company best health plan',
   //     message: 'We compare many factors including drug, manufactures and pharmacies to find your company the most cost-effective prescriptions.'
   //     },
   //     {
   //     image: '/assets/icons/home.icon2.svg',
   //     title: 'Switching over is fast and easy',
   //     message: 'We have the same plans with the lower prescription prices. Leave the hard work to us.'
   //     },
   //     {
   //     image: '/assets/icons/home.icon3.svg',
   //     title: 'Access pharmacists anytime',
   //     message: "On-call experts ensure you'll always have the answers you need for your prescriptions."
   //     },
   //     {
   //     image: '/assets/icons/home.icon4.svg',
   //     title: 'Free prescription delivery',
   //     message: 'We deliver directly to employees fast.'
   //     }
   //   ];

   //   constructor($http, $scope, socket) {
   //     this.$http = $http;
   //     this.$scope = $scope;
   //     this.awesomeThings = [];

   //     $http.get('/api/things').then(response => {
   //       this.awesomeThings = response.data;
   //       socket.syncUpdates('thing', this.awesomeThings);
   //     });

   //     $scope.$on('$destroy', function() {
   //       socket.unsyncUpdates('thing');
   //     });

   //   }

   //   addThing() {
   //     if (this.newThing) {
   //       this.$http.post('/api/things', {
   //         name: this.newThing ,
   //         title: this.newTitle
   //       });
   //       this.newThing = '';
   //     }
   //   }

   //   deleteThing(thing) {
   //     this.$http.delete('/api/things/' + thing._id);
   //   }


   // } // Closing

   // angular.module('pharmeoApp')
   //   .controller('MainController', MainController);

   // })();

