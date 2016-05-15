'use strict';

/**
 * @ngdoc function
 * @name testeVmlvagaApp.controller:ProjetoCtrl
 * @description
 * # ProjetoCtrl
 * Controller of the testeVmlvagaApp
 */
angular.module('testeVmlvagaApp')
  .controller('ProjetosCtrl', function ($scope,$http,Data) {
    $scope.class="col-md-12";
    $scope.pagRepositorios=1;
    $scope.pagCommits=1;

    $scope.repoSelecionado = [];
    Data.get('globocom',$scope.pagRepositorios).then(function (results) {
        $scope.totalRepo = results.total_count;
        $scope.pags = Math.floor($scope.totalRepo/30);
        $scope.repositorios = results.items;

    });

    $scope.hideDetalhes = function() {
         //console.log(repositorio);
         $scope.class="col-md-12";
       };
   $scope.mostraDetalhes = function(repositorio) {
        //console.log(repositorio);
        $scope.class="col-md-6";
        $scope.repoSelecionado = repositorio;
        //getCommits
        Data.getCommits($scope.repoSelecionado.name,$scope.pagCommits).then(function (results) {
            $scope.repositorios.commits = results.data;
            $scope.links = results.headers().link;
            console.log($scope.links.indexOf("last"));

        });
      };
  $scope.isAnterior = function(pagRepositorios) {
           //console.log(repositorio);
        console.log(pagRepositorios);
        return (!pagRepositorios>1);
  };
  $scope.pagProximo = function(pagRepositorios) {
        //console.log($scope.pags);
        if($scope.pags > pagRepositorios){
          $scope.pagRepositorios= pagRepositorios+1;
          $scope.isAnterior($scope.pagRepositorios);
          Data.get('globocom',$scope.pagRepositorios).then(function (results) {
              $scope.repositorios = results.items;
          });
          $scope.class="col-md-12";
        }
  };
  $scope.pagAnterior = function(pagRepositorios) {
        //console.log($scope.pags);
        if($scope.pagRepositorios > 1){
          $scope.pagRepositorios= pagRepositorios-1;
          Data.get('globocom',$scope.pagRepositorios).then(function (results) {
              $scope.repositorios = results.items;
          });
          $scope.class="col-md-12";
        }
  };

  });
