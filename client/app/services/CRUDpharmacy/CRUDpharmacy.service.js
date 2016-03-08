'use strict';

angular.module('pharmeoApp')
  .service('CRUDpharmacy', function ($resource) {
  	return $resource('/api/pharmacys/:id', {}, {
  		query: { 'method':  'GET', params: { id: 'id' 	} }
  	});
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
