'use strict';

angular.module('myApp.unit1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit1', {
    templateUrl: 'unit1/unit1.html',
    controller: 'Unit1Ctrl'
  });
}])

.controller('Unit1Ctrl', ['Unit1', '$scope',
  function(Unit1, $scope) {

  // ex = exercice
  // ca = correct answer
  // ua = user answer
  // q = question

  // Object for question 1 1
  $scope.ex = Unit1.ex;

  Unit1.refreshPage();

}]);
