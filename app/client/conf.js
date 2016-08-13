import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import tmplUnit1 from './unit1.html';
import tmplUnit2 from './unit2.html';
import tmplUnit3 from './unit3.html';
 
console.log('loading conf.js');

var ngApp = angular.module('mainModule', [angularMeteor, uiRouter]);

ngApp.config(['$locationProvider', '$urlRouterProvider', '$stateProvider',
  function($locationProvider, $urlRouterProvider, $stateProvider) {
 
  $locationProvider.html5Mode(true);

  $stateProvider.state('unit1', { url: '/unit1', templateUrl: tmplUnit1, controller: 'Unit1Ctrl' });
  $stateProvider.state('unit2', { url: '/unit2', templateUrl: tmplUnit2, controller: 'Unit2Ctrl' });
  $stateProvider.state('unit3', { url: '/unit3', templateUrl: tmplUnit3, controller: 'Unit1Ctrl' });
 
  $urlRouterProvider.otherwise('/');
}]);


ngApp.directive('resultat', ['$rootScope', function($rootScope) {
  var varTemplate = '';
  varTemplate += '<span>';
  varTemplate += '  <span ng-show="showCorr">';
  varTemplate += '    <span ng-show="correct"  class="glyphicon glyphicon-ok"></span>';
  varTemplate += '    <span ng-show="!correct" class="glyphicon glyphicon-remove"></span>';
  varTemplate += '  </span>';
  varTemplate += '  <span ng-show="showAnsw" class="answ">{{canswer}}</span>';
  varTemplate += '</span>';

  return {
      restrict : 'AE',
      replace  : true,
      template : varTemplate,
      scope    : {
        ex : '@',
        q  : '='
      },
      link     : function($scope, element, attr) { 

        $scope.showCorr = false;
        $scope.showAnsw = false;
        $scope.canswer  = $scope.q.ca;

        // Listen the event to show the result
        $rootScope.$on('show_question_result', function(event, ex, resp) {
          // console.log('show_question_result', ex, resp);
          if (ex === $scope.ex) {
            $scope.showCorr = resp;
            $scope.correct  = !!$scope.q.correct;
          }
        });

        // Listen the event to show the correct answer
        $rootScope.$on('show_question_answer', function(event, ex, resp) {
          if (ex === $scope.ex) {
            $scope.showAnsw = resp;
          }
        });
      },
  };
}]);


ngApp.directive('opcio', [function() {
  var varTemplate = '';
  varTemplate += '<span class="label label-primary custom-label"';
  varTemplate += '      ng-class="{ \'strike-text\':strike === true}" ';
  varTemplate += '      ng-click="toogleWord()">';
  varTemplate += '{{word}}';
  varTemplate += '</span>';

  return {
      restrict : 'AE',
      replace  : true,
      template : varTemplate,
      scope    : {
        word : '@'
      },
      link     : function($scope, element, attr) { 

        $scope.strike = false;

        $scope.toogleWord = function() {
          $scope.strike = !$scope.strike;
        }
      }
  };
}]);

ngApp.directive('textQ', [function() {
  var varTemplate = '';

  varTemplate += '<span>';
  varTemplate += ' <span class="dial">{{ex.q[num].t1}} <input ng-model="ex.q[num].ua" class="text-inline-answ"/> {{ex.q[num].t2}} </span>';
  varTemplate += ' <span ng-if="isHint" class="dial-tip">{{ex.q[num].hint}}</span>';
  varTemplate += ' <resultat ex="{{ex.qStr}}" q="ex.q[num]"></resultat>';
  varTemplate += ' <br ng-if="isSalt"/>';
  varTemplate += '</span>';

  return {
      restrict : 'AE',
      replace  : true,
      template : varTemplate,
      scope    : {
        ex   : '=',
        num  : '@'
      },
      link     : function($scope, element, attr) { 

        $scope.isSalt = (attr.hasOwnProperty('br'));
        $scope.isHint = $scope.ex.q[$scope.num].hasOwnProperty('hint');
      }
  };
}]);

ngApp.directive('textQA', [function() {
  var varTemplate = '';

  varTemplate += '<span>';
  varTemplate += ' <span class="dial">{{ex.q[num].t1}}</span>';
  varTemplate += ' <span ng-if="isHint" class="dial-tip">{{ex.q[num].hint}}</span>';
  varTemplate += ' <br/>';
  varTemplate += ' <span class="dial">';
  varTemplate += '   <span ng-if="!!ex.q[num].t2">{{ex.q[num].t2}}</span>';
  varTemplate += '   <input ng-model="ex.q[num].ua" class="text-sent-line-answ"/>';
  varTemplate += '   <span ng-if="!!ex.q[num].t3">{{ex.q[num].t3}}</span>';
  varTemplate += ' </span>';
  varTemplate += ' <resultat ex="{{ex.qStr}}" q="ex.q[num]"></resultat>';
  varTemplate += ' <br ng-if="isSalt"/>';
  varTemplate += '</span>';

  return {
      restrict : 'AE',
      replace  : true,
      template : varTemplate,
      scope    : {
        ex   : '=',
        num  : '@'
      },
      link     : function($scope, element, attr) { 

        $scope.isSalt = (attr.hasOwnProperty('br'));
        $scope.isHint = $scope.ex.q[$scope.num].hasOwnProperty('hint');
      }
  };
}]);

