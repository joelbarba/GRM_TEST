'use strict';

angular.module('myApp.unit2', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit2', {
    templateUrl: 'unit2/unit2.html',
    controller: 'Unit2Ctrl'
  });
}])
.controller('Unit2Ctrl', ['Unit2', '$scope',
  function(Unit2, $scope) {

    $scope.ex = Unit2.ex;

    Unit2.refreshPage();

}]);
