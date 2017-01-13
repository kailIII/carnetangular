'use strict';

/**
 * @ngdoc function
 * @name carnetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carnetApp
 */
angular.module('carnetApp')
  .controller('LoginCtrl', function ($scope, $http, $window,$resource) {

// var res=$resource('http://localhost:8080/carnetapi/web/app_dev.php/');




 $scope.submit = function () {

 	$http({
  		method: 'GET',
  		url: 'http://localhost:8080/carnetapi/web/app_dev.php/oauth/v2/token',
  		params : {
					grant_type:"password",
					client_id:"1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4",
					client_secret:"4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
					username:$scope.username,
					password:$scope.password
				}
}) .then(

	function successCallback(response) {
     $window.sessionStorage.token=response.data.access_token;
     $window.location.href = '/#!/';

  }, function errorCallback(response) {
 	delete $window.sessionStorage.token;
 	$scope.crederror="true";
  }

);

};




  });
