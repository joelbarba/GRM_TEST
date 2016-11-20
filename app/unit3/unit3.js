'use strict';

angular.module('myApp.unit3', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit3', {
    templateUrl: 'unit3/unit3.html',
    controller: 'Unit3Ctrl'
  });
}])

.controller('Unit3Ctrl', ['Unit3', '$scope',
  function(Unit3, $scope) {

  $scope.ex = Unit3.ex;

  Unit3.refreshPage();

}]);
