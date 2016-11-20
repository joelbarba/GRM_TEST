'use strict';

angular.module('myApp.unit5', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit5', {
    templateUrl: 'unit5/unit5.html',
    controller: 'Unit5Ctrl'
  });
}]).controller('Unit5Ctrl', ['Unit5', '$scope',
  function(Unit5, $scope) {
    $scope.ex = Unit5.ex;
    Unit5.refreshPage();
}]);
