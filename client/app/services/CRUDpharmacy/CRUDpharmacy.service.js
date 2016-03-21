'use strict';

angular.module('pharmeoApp')
  .service('CRUDpharmacy', function ($resource, $http, toastr) {
  	return {
  		postPartnerRequest: function(data){
  		    var request = $http({
  		        					'method': 'POST',
  		        					'url': 'api/partnerRequests',
					  		        'data': data
  		    })
  		    .error(this.onError)
  		    return request;
  		},
  		getPartnerRequest: function(){
  		    var request = $http({
  		        					'method': 'GET',
  		        					'url': 'api/partnerRequests',
					  		        'data': data
  		    })
  		    .error(this.onError)
  		    return request;
  		},

  		onError: function(error,status){
  			var err = status;
  		    if (status == 400 || status == 401){
  		    	toastr.error('<h4>Error code</h4>' + err, 'Please make sure yor are login.', {
  		    	  allowHtml: true
  		    	});

  		    }
  		    else if (status >= 402 && status <= 499){
  		    	toastr.error('<h4>Error code </h4>' + err, 'Please check your input.', {
  		    	  allowHtml: true
  		    	});
  		    }
  		    else if (status >= 500 && status <= 599){
  		    	toastr.error('<h4>Error code</h4>' + err, 'We are currently experiencing server issue, Please try again at a later time. Thank you.', {
  		    	  allowHtml: true
  		    	});
  		    }
  		// $resource('/api/pharmacys/:id', {}, {
  		// 	query: { 'method':  'GET', params: { id: 'id' 	} }
  		// });
	  	}
	  }
  });
