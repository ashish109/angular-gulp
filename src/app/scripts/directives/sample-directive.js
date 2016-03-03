'use strict';

angular.module("sourcingSample1").directive('sampleDirective',function () {

	return {
		restrict: 'A',
		link: function (scope,element,attrs) {
			element.css('color','blue');
		} 
	};

});