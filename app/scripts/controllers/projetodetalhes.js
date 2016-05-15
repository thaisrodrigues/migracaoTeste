'use strict';

/**
* @ngdoc function
* @name testeVmlvagaApp.controller:ProjetodetalhesCtrl
* @description
* # ProjetodetalhesCtrl
* Controller of the testeVmlvagaApp
*/
angular.module('testeVmlvagaApp')
.controller('ProjetoDetalhesCtrl', function ($scope,$http,Data) {

    $scope.links= "next";
    $scope.pagProximoCommit = function(pagCommits) {

    //getCommits
    $scope.pagCommits= pagCommits+1;
    console.log($scope.pagCommits);
    Data.getCommits($scope.repoSelecionado.name,$scope.pagCommits).then(function (results) {
      $scope.repositorios.commits = results.data;
      $scope.links = results.headers().link;
    });


  };
  $scope.pagAnteriorCommits = function(pagCommits) {

    $scope.pagCommits= pagCommits-1;
    Data.getCommits($scope.repoSelecionado.name,$scope.pagCommits).then(function (results) {
      $scope.repositorios.commits = results.data;
      $scope.links = results.headers().link;
      console.log($scope.pagCommits);

    });
  };
});
