'use strict';

angular.module("ngGulpSample").directive('sampleDirective',function () {

	return {
		restrict: 'A',
		link: function (scope,element,attrs) {
			element.css('color','blue');
		} 
	};

});