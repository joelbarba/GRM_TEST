'use strict';

angular.module('myApp.unit4', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit4', {
    templateUrl: 'unit4/unit4.html',
    controller: 'Unit4Ctrl'
  });
}]).controller('Unit4Ctrl', ['Unit4', '$scope',
  function(Unit3, $scope) {
    $scope.ex = Unit3.ex;
    Unit3.refreshPage();
}]);
