'use strict';


angular.module("SKPBQ").controller('mainController', ['$scope', 'dataService', function ($scope, dataService) {

    $scope.info = dataService.getData();

}]);
