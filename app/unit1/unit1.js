'use strict';

angular.module('myApp.unit1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit1', {
    templateUrl: 'unit1/unit1.html',
    controller: 'Unit1Ctrl'
  });
}])

.controller('Unit1Ctrl', ['$scope', '$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher', 'Unit1',
function($scope, $rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher, Unit1) {

  // ex = exercice
  // ca = correct answer
  // ua = user answer
  // q = question

  // Object for question 1 1
  $scope.ex1_1 = Unit1.ex[1]();
  $scope.ex1_2 = Unit1.ex[2]();
  $scope.ex1_3 = Unit1.ex[3]();
  $scope.ex1_4 = Unit1.ex[4]();

  Unit1.refreshPage();

}]);
