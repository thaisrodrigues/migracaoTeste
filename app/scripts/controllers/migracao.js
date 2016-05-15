'use strict';

/**
 * @ngdoc function
 * @name testeVmlvagaApp.controller:MigracaocontrollerCtrl
 * @description
 * # MigracaocontrollerCtrl
 * Controller of the testeVmlvagaApp
 */
angular.module('testeVmlvagaApp')
  .controller('MigracaoCtrl', function ($scope,$http,Data) {

    $scope.consultaEligibilidade = function(celular){
      var url = "http://private-7019d-migracaoprepago.apiary-mock.com/api/v1/offer/migration/eligibility";
      var data = {
            offerBenefitId: '42',
            offerProgramId : '77',
            authTokenRequired : 'true'
      };
      var headers = {
            'X-MIP-CHANNEL' : 'MINHAOI-DESKTOP',
            'X-MIP-APP-VERSION' : '1',
            'X-MIP-APP-VERSION-ID' : '1',
            'X-MIP-DEVICE-ID' : '1',
            'MSISDN' : '55'+celular,
            'X-MIP-ACCESS-TOKEN' : '06f9e581-aaa2-4540-986c-b7d793958272',
            'X-MIP-AUTHORIZATION' : 'PARTNER'
        }
        $scope.loading=true;
        Data.post(url,data,headers).then(function (response) {
            console.log(response);
            $scope.loading=false;
            //Verifica se o código foi enviado com sucesso
            if(response.status == '200')
              $scope.success_sms=true;

        }, function errorCallback() {
            $scope.loading=false;
            console.log('error');
        });
    }
    $scope.autenticacao = function(codigo){
      var mip_authotization= "SMS "+ btoa("5521988888888:123456");
      var url = "http://private-7019d-migracaoprepago.apiary-mock.com/api/v1/offer/eligible/benefit/42/program/77";
      var headers = {
            'X-MIP-CHANNEL' : 'MINHAOI-DESKTOP',
            'X-MIP-APP-VERSION' : '1',
            'X-MIP-APP-VERSION-ID' : '1',
            'X-MIP-DEVICE-ID' : '1',
            'X-MIP-ACCESS-TOKEN' : '184141fddbdf-4831-acd6-040655241d4d',
            'X-MIP-AUTHORIZATION' : mip_authotization
      }

      Data.get(url,headers).then(function (response) {
          console.log(response);
          //Verifica se o código foi enviado com sucesso

      }, function errorCallback() {
          console.log('error');
      });
    }
  });
