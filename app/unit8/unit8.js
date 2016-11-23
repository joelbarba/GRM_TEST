'use strict';

angular.module('myApp.unit8', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit8', {
    templateUrl: 'unit8/unit8.html',
    controller: 'Unit8Ctrl'
  });
}]).controller('Unit8Ctrl', ['Unit8', '$scope',
  function(Unit8, $scope) {
    $scope.ex = Unit8.ex;
    Unit8.refreshPage();
}]);