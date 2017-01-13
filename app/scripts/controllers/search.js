'use strict';

/**
 * @ngdoc function
 * @name carnetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the carnetApp
 */
angular.module('carnetApp')
  .controller('SearchCtrl', function ($scope,$http,$window) {

$scope.toshow=function(user){
	 $scope.usertoshow=user;
	 
	
}


$scope.addContact=function(user){

	        	$http({
  		method: 'POST',
  		url: 'http://localhost:8080/carnetapi/web/app_dev.php/contacts',
   		params : {
   			token : $window.sessionStorage.token,
   			nom : user.nom,
   			prenom : user.prenom,
   			civilite : user.civilite,
   			email: user.email,
   			adresse: user.adresse,
   			date_de_naissance: user.date_de_naissance,
   			id: user.id

				} 			
}) .then(

	function successCallback(response) {
		$window.location.href = '/';

  }, function errorCallback(response) {

  }

);

}


  	 $scope.myFunc = function() {
if($scope.myValue!=""){
        	$http({
  		method: 'GET',
  		url: 'http://localhost:8080/carnetapi/web/app_dev.php/users/'+$scope.myValue,

}) .then(

	function successCallback(response) {
		$scope.users=response.data.users;

  }, function errorCallback(response) {

  }

);
}
else
$scope.users=null;
    };

  });
