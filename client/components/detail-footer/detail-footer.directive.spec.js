'use strict';

describe('Directive: detailFooter', function () {

  // load the directive's module and view
  beforeEach(module('pharmeoApp'));
  beforeEach(module('app/components/detail-footer/detail-footer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<detail-footer></detail-footer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the detailFooter directive');
  }));
});
