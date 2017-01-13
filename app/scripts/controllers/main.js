'use strict';

/**
 * @ngdoc function
 * @name carnetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carnetApp
 */




angular.module('carnetApp')
  .controller('MainCtrl', function ($window,$http,$resource,$scope) {


  	if(!$window.sessionStorage.token)
	$window.location.href = '/#!/login';



 	$http({
  method: 'GET', 
  url: 'http://localhost:8080/carnetapi/web/app_dev.php/contacts', 
  		params : {
  					token : $window.sessionStorage.token
				}
}).then(

	function successCallback(response) {
    
     $scope.contacts=response.data.contacts;
  }

); 



 	

  });


