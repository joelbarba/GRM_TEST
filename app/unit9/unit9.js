'use strict';

angular.module('myApp.unit9', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit9', {
    templateUrl: 'unit9/unit9.html',
    controller: 'Unit9Ctrl'
  });
}]).controller('Unit9Ctrl', ['Unit9', '$scope',
  function(Unit9, $scope) {
    $scope.ex = Unit9.ex;
    Unit9.refreshPage();
}]);