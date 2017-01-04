
/**
 *ROUTE CONFIGURATIONS    
 */

'use strict';

angular.module("SKPBQ").config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/templates/layout.html'
        })
        .state('home.childView1', {
            url: '/childView1',
            templateUrl: 'app/templates/partials/child-view1.html'
        })
        .state('home.childView2', {
            url: '/childView2',
            templateUrl: 'app/templates/partials/child-view2.html'
        })
        .state('home.childView3', {
            url: '/childView3',
            templateUrl: 'app/templates/partials/child-view3.html'
        });

    $urlRouterProvider.otherwise('/home/childView1');
    
}]);
