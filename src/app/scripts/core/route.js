  'use strict';


  angular.module("ngGulpSample").config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/templates/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);