'use strict';

angular.module('myApp.unit10', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit10', {
    templateUrl: 'unit10/unit10.html',
    controller: 'Unit10Ctrl'
  });
}]).controller('Unit10Ctrl', ['Unit10', '$scope',
  function(Unit10, $scope) {
    $scope.ex = Unit10.ex;
    Unit10.refreshPage();
}]);