'use strict';

describe('Controller: ProjetodetalhesCtrl', function () {

  // load the controller's module
  beforeEach(module('testeVmlvagaApp'));

  var ProjetodetalhesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjetodetalhesCtrl = $controller('ProjetodetalhesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjetodetalhesCtrl.awesomeThings.length).toBe(3);
  });
});
