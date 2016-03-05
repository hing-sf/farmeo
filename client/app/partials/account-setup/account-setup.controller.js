'use strict';

 angular.module('pharmeoApp')
   .controller('AccountSetupCtrl', function ($scope, multipartForm, $rootScope) {
    var currentUser = $rootScope.currentUser._id;

   	$scope.Submit = function(){
      var file = $scope.file;
      file.currentUser = currentUser;
      console.log(file);
   		var uploadUrl = '/api/pharmacys';
   		multipartForm.post(uploadUrl, file);
 		}

     // $scope.animationsEnabled = true;

     // $scope.open = function (size) {

     //   var modalInstance = $uibModal.open({
     //     animation: $scope.animationsEnabled,
     //     templateUrl: 'account-setup.html',
     //     controller: 'ModalInstanceCtrl',
     //     size: size,
     //     resolve: {
     //       items: function () {
     //         return $scope.items;
     //       }
     //     }
     //   });

     //   modalInstance.result.then(function (selectedItem) {
     //     $scope.selected = selectedItem;
     //   }, function () {
     //     $log.info('Modal dismissed at: ' + new Date());
     //   });
     // };

     // $scope.toggleAnimation = function () {
     //   $scope.animationsEnabled = !$scope.animationsEnabled;
     // };

  }) //Closing tags
   // Please note that $uibModalInstance represents a modal window (instance) dependency.
   // It is not the same as the $uibModal service used above.

   // angular.module('pharmeoApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

   //   $scope.items = items;
   //   $scope.selected = {
   //     item: $scope.items[0]
   //   };

   //   $scope.ok = function () {
   //     $uibModalInstance.close($scope.selected.item);
   //   };

   //   $scope.cancel = function () {
   //     $uibModalInstance.dismiss('cancel');
   //   };
   // });
