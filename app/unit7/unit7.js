'use strict';

angular.module('myApp.unit7', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit7', {
    templateUrl: 'unit7/unit7.html',
    controller: 'Unit7Ctrl'
  });
}]).controller('Unit7Ctrl', ['Unit7', '$scope',
  function(Unit7, $scope) {
    $scope.ex = Unit7.ex;
    Unit7.refreshPage();
}]);