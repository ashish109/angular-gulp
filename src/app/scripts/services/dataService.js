'use strict'

angular.module("SKPBQ").service('dataService', ['$http', function ($http) {

	this.getData = function () {
		return {
			greetings: 'Hello!',
			info : 'This is  sample data'
		};
	};

}]);