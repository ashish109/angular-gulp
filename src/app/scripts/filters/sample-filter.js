'use strict';

angular.module("sourcingSample1").filter('sampleFilter', [ function () {

	return function (input) {
		return input.toUpperCase();
	} 

}]);