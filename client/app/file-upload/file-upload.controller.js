'use strict';

angular.module('pharmeoApp')
  .controller('FileUploadCtrl', function ($scope, multipartForm) {

  	$scope.addpharmacy = {};
  	$scope.Submit = function(){
  		var uploadUrl = '/upload';
  		multipartForm.post(uploadUrl, $scope.addpharmacy);
  //   $scope.pharmacyFile = {};

  //   var addFile = Flow.addFile();
  //   var files = $scope.pharmacyFile;
  //   $scope.fileUpload = function(files){
  //       var request = $http({method:'POST', url:'/api/fileupload',data:files})
  //       .then(response => {
  //     		this.pharmacyFiles = response.data;
  //   });
  //   };
  // })
  // .config(['flowFactoryProvider', function (flowFactoryProvider) {
  //   flowFactoryProvider.defaults = {
  //     target: 'upload.php',
  //     permanentErrors: [404, 500, 501],
  //     maxChunkRetries: 1,
  //     chunkRetryInterval: 5000,
  //     simultaneousUploads: 4
  //   };
  // flowFactoryProvider.on('catchAll', function (event) {
  //   console.log('catchAll', arguments);
  // });
	}
});

