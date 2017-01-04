'use strict';

angular.module("SKPBQ").filter('sampleFilter', [ function () {

	return function (input) {
		return input.toUpperCase();
	} 

}]);