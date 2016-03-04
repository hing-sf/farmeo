'use strict';

angular.module('pharmeoApp')
.directive('fileModel', ['$parse', function($parse){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function(){
        scope.$apply(function(){
          modelSetter(scope, element[0].files[0]);
        })
      })
    }
  }
}]);



  //   };
  // .directive("ngFileSelect",function(){
  //   return {
  //     link: function($scope,el){
  //       el.bind("change", function(e){
  //         $scope.file.content = (e.srcElement || e.target).files[0];
  //         $scope.getFile();
  //       });
  //     }
  //   }
  // });
