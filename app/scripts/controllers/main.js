'use strict';

/**
 * @ngdoc function
 * @name injectronicsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the injectronicsApp
 */
angular.module('injectronicsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
