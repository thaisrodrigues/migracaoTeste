'use strict';

describe('Controller: ProjetoCtrl', function () {

  // load the controller's module
  beforeEach(module('testeVmlvagaApp'));

  var ProjetoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjetoCtrl = $controller('ProjetoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjetoCtrl.awesomeThings.length).toBe(3);
  });
});
