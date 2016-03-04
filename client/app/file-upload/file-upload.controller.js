'use strict';

 angular.module('pharmeoApp')
   .controller('FileUploadCtrl', function ($scope, multipartForm) {

      // YOU TUBE
   	$scope.customer = {};
   	$scope.Submit = function(){
   		var uploadUrl = '/api/upload';
   		multipartForm.post(uploadUrl, $scope.customer);
 	}
 });

  // angular.module('pharmeoApp')
  //   .controller('FileUploadCtrl', function ($scope) {

  //     var getFiles = function(){

  //     }


  // })
  // .config(['flowFactoryProvider', function (flowFactoryProvider) {
  //   flowFactoryProvider.defaults = {
  //     target: '/api/upload',
  //     permanentErrors: [404, 500, 501],
  //     maxChunkRetries: 1,
  //     chunkRetryInterval: 5000,
  //     simultaneousUploads: 4,
  //     testChunks:false
  //   };
  //   flowFactoryProvider.on('catchAll', function (event) {
  //     console.log('catchAll', arguments);
  //   });
  //   //Can be used with different implementations of Flow.js
  //   //flowFactoryProvider.factory = fustyFlowFactory;
  // }]);


  // app.use(multer({
  //   dest: './uploads/',
  //   rename: function (fieldname, filename) {
  //     return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  //   }
  // }))
