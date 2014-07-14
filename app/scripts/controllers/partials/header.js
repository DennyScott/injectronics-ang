'use strict';

/**
 * @ngdoc function
 * @name injectronicsApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller for the header of the injectronics app.
 */
angular.module('injectronicsApp')
  .controller('HeaderCtrl', function ($scope, $rootScope) {
		$scope.getHeader = function(){
			if($rootScope.template.header === 'staticHeader'){
					return 'views/partials/headers/staticHeader.html';	
			}else{
				return 'views/partials/staticHeader.html';
			}
				}	
		
  });
