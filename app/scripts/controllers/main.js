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
		$rootScope.template.header = 'staticHeader';
		$rootScope.template.aboveHeader = 'views/partials/welcomeSplash.html';
  });
