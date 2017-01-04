'use strict';


angular.module("ngGulpSample").controller('mainController', ['$scope', 'dataService', function ($scope, dataService) {

    $scope.info = dataService.getData();

}]);
