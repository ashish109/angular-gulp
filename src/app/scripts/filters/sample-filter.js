'use strict';

angular.module("ngGulpSample").filter('sampleFilter', [ function () {

	return function (input) {
		return input.toUpperCase();
	} 

}]);