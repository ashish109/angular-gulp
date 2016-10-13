'use strict';


angular.module("ngGulpSample").controller('MainController', ['$scope', 'dataService', function ($scope, dataService) {

    $scope.info = dataService.getData();

}]);
