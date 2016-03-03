'use strict'

angular.module("sourcingSample1").service('dataService', ['$http', function ($http) {

	this.getData = function () {
		return {
			greetings: 'Hello!',
			info : 'This is a sample data'
		};
	};

}]);