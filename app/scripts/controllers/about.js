'use strict';

/**
 * @ngdoc function
 * @name injectronicsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the injectronicsApp
 */
angular.module('injectronicsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
