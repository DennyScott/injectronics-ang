'use strict';

/**
 * @ngdoc function
 * @name injectronicsApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller for the header of the injectronics app.
 */
angular.module('injectronicsApp')
  .controller('HeaderCtrl', function ($scope, $rootScope) {
		$scope.getHeader = function(){
			if(typeof $rootScope.template === 'undefined' || typeof $rootScope.template.header === 'undefined'){
				return 'views/partials/headers/staticHeader.html';
			}
			if($rootScope.template.header === 'staticHeader'){
					return 'views/partials/headers/staticHeader.html';	
			}else if($rootScope.template.header === 'none') {
					return "";
			}else{
				return 'views/partials/headers/staticHeader.html';
			}
				}	
		
  });
