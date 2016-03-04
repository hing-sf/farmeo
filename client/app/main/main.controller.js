'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

    this.section1 = [
      {
      image: '/assets/icons/home.icon1.svg',
      title: 'Find your company best health plan',
      message: 'We compare many factors including drug, manufactures and pharmacies to find your company the most cost-effective prescriptions.'
      },
      {
      image: '/assets/icons/home.icon2.svg',
      title: 'Switching over is fast and easy',
      message: 'We have the same plans with the lower prescription prices. Leave the hard work to us.'
      },
      {
      image: '/assets/icons/home.icon3.svg',
      title: 'Access pharmacists anytime',
      message: "On-call experts ensure you'll always have the answers you need for your prescriptions."
      },
      {
      image: '/assets/icons/home.icon4.svg',
      title: 'Free prescription delivery',
      message: 'We deliver directly to employees fast.'
      }
    ];
  }



  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing ,
        title: this.newTitle
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('pharmeoApp')
  .controller('MainController', MainController);

})();
