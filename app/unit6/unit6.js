'use strict';

angular.module('myApp.unit6', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit6', {
    templateUrl: 'unit6/unit6.html',
    controller: 'Unit6Ctrl'
  });
}]).controller('Unit6Ctrl', ['Unit6', '$scope',
  function(Unit6, $scope) {
    $scope.ex = Unit6.ex;
    Unit6.refreshPage();
}]);
