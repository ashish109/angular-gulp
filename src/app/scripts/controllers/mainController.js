'use strict';


angular.module("sourcingSample1").controller('MainController', ['$scope', 'dataService', function ($scope, dataService) {

    $scope.info = dataService.getData();

}]);
