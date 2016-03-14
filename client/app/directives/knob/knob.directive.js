'use strict';

angular.module('pharmeoApp')
  .directive('knob', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.knob();
      }
    };
  });
