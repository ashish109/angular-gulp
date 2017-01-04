
/**
 *ROUTE CONFIGURATIONS    
 */

'use strict';

angular.module("ngGulpSample").config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/templates/home.html'
        });

    $urlRouterProvider.otherwise('/home');
    
}]);
