'use strict';

/**
* @ngdoc service
* @name testeVmlvagaApp.data
* @description
* # data
* Factory in the testeVmlvagaApp.
*/
angular.module('testeVmlvagaApp')
.factory('Data',['$http', function ($http,$httpProvider) {
  var obj = {};
  obj.post =  function (url,data,headers) {
    return $http({
      method: 'POST',
      url: url,
      headers: headers,
      data: data,
    }).then(function (response) {
      return response;
    });
  };
  obj.get =  function (url,headers) {
    return $http({
      method: 'GET',
      url: url,
      headers: headers,
    }).then(function (response) {
      return response;
    });
  };
  return obj;

}]);
