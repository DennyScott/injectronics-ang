'use strict';

/**
 * @ngdoc function
 * @name injectronicsApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the injectronicsApp
 */
angular.module('injectronicsApp')
  .controller('CartCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
