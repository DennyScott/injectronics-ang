'use strict';

/**
 * @ngdoc function
 * @name injectronicsApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller for the header of the injectronics app.
 */
angular.module('injectronicsApp')
.controller('FooterCtrl', function ($scope, $rootScope, $document) {
	$scope.getFooter = function(){
		if(typeof $rootScope.template === 'undefined' || typeof $rootScope.template.footer === 'undefined'){
			return 'views/partials/footers/staticFooter.html';
		}
		if($rootScope.template.footer === 'staticFooter'){
			return 'views/partials/footers/staticFooter.html';	
		}else if($rootScope.template.header === 'none') {
			return 'views/partials/footers/staticFooter.html';	
		}else{
			return 'views/partials/footers/staticFooter.html';
		}
	}	

	$scope.toTop = function() {
		var top = 0;
		var duration = 2000; //milliseconds
		$document.scrollTop(top, duration);
	}	
});

