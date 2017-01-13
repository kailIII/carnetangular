'use strict';

/**
 * @ngdoc overview
 * @name carnetApp
 * @description
 * # carnetApp
 *
 * Main module of the application.
 */
angular
  .module('carnetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$httpProvider) {
   
   // $httpProvider.defaults.headers.common['Authorization'] = 'test';

    $routeProvider
      .when('/', {
        templateUrl: 'views/contacts.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'main'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'LoginCtrl',
        controllerAs: 'main'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
