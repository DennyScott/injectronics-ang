'use strict';

/**
 * @ngdoc function
 * @name injectronicsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the injectronicsApp
 */
angular.module('injectronicsApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
		
		//Define Template Data
		$rootScope.template = {};
		$rootScope.template.header = 'none';
		$scope.header = 'views/partials/headers/staticHeader.html';
  });
