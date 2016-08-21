import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import tmplUnit1 from './views/unit1.html';
import tmplUnit2 from './views/unit2.html';
import tmplUnit3 from './views/unit3.html';
import tmplUnit4 from './views/unit4.html';
import tmplUnit5 from './views/unit5.html';
import tmplUnit6 from './views/unit6.html';
import tmplUnit7 from './views/unit7.html';
import tmplUnit8 from './views/unit8.html';
import tmplUnit9 from './views/unit9.html';
import tmplUnit10 from './views/unit10.html';
 
console.log('loading conf.js');

var ngApp = angular.module('mainModule', [angularMeteor, uiRouter]);

ngApp.config(['$locationProvider', '$urlRouterProvider', '$stateProvider',
  function($locationProvider, $urlRouterProvider, $stateProvider) {
 
  $locationProvider.html5Mode(true);

  $stateProvider.state('unit1',  { url: '/unit1',  templateUrl: tmplUnit1,  controller: 'Unit1Ctrl' });
  $stateProvider.state('unit2',  { url: '/unit2',  templateUrl: tmplUnit2,  controller: 'Unit2Ctrl' });
  $stateProvider.state('unit3',  { url: '/unit3',  templateUrl: tmplUnit3,  controller: 'Unit3Ctrl' });
  $stateProvider.state('unit4',  { url: '/unit4',  templateUrl: tmplUnit4,  controller: 'Unit4Ctrl' });
  $stateProvider.state('unit5',  { url: '/unit5',  templateUrl: tmplUnit5,  controller: 'Unit5Ctrl' });
  $stateProvider.state('unit6',  { url: '/unit6',  templateUrl: tmplUnit6,  controller: 'Unit6Ctrl' });
  $stateProvider.state('unit7',  { url: '/unit7',  templateUrl: tmplUnit7,  controller: 'Unit7Ctrl' });
  $stateProvider.state('unit8',  { url: '/unit8',  templateUrl: tmplUnit8,  controller: 'Unit8Ctrl' });
  $stateProvider.state('unit9',  { url: '/unit9',  templateUrl: tmplUnit9,  controller: 'Unit9Ctrl' });
  $stateProvider.state('unit10', { url: '/unit10', templateUrl: tmplUnit10, controller: 'Unit10Ctrl' });
 
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
  varTemplate += ' <span ng-if="isTab" style="margin-left: 22px"></span>';
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
        $scope.isTab = (attr.hasOwnProperty('tab'));
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
  varTemplate += '   <span ng-if="isTab" style="margin-left: 22px"></span>';
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
        $scope.isTab = (attr.hasOwnProperty('tab'));
        $scope.isHint = $scope.ex.q[$scope.num].hasOwnProperty('hint');
      }
  };
}]);

ngApp.directive('textQC', [function() {
  var varTemplate = '';

  varTemplate += '<div class="row">';
  varTemplate += '  <div class="col-xs-6">';
  varTemplate += '    <span class="dial">{{ex.q[num].t1}}<span ng-class="!!ex.q[num].ua ? \'answ-ko-word\' : \'answ-ok-word\'">{{ex.q[num].t2}}</span>{{ex.q[num].t3}}</span>';
  varTemplate += '  </div>';
  varTemplate += '  <div class="col-xs-6">';
  varTemplate += '    <span class="label option-answ-button" ng-click="ex.q[num].ua = \'\';">';
  varTemplate += '      <span class="glyphicon" ng-class="!!ex.q[num].ua ? \'glyphicon-remove answ-ko-icon\' : \'glyphicon-ok answ-ok-icon\'"></span>';
  varTemplate += '    </span>';
  varTemplate += '    <input ng-model="ex.q[num].ua" class="text-okko-answ" ng-change=""/>';
  varTemplate += '    <resultat ex="{{ex.qStr}}" q="ex.q[num]"></resultat>';
  varTemplate += '  </div>     ';
  varTemplate += '</div>';

  return {
      restrict : 'AE',
      replace  : true,
      template : varTemplate,
      scope    : {
        ex   : '=',
        num  : '@'
      },
      link     : function($scope, element, attr) {
      }
  };
}]);

// Checks (question by question) if the correct answer (ca) matches the user answer
ngApp.factory('CorrectExFactory', ['$rootScope', function($rootScope) {
  return function(ex, qStr) {

    ex.q.forEach(function(q) {
      q.correct = false;
      if (q.ua) {
        for (var t = 0; t < q.ca.length; t++) {
          if (q.ca[t].toUpperCase() == q.ua.toUpperCase()) q.correct = true;
        }
      } else {
        if (q.ca[0] == '') q.correct = true;
      }
    });
    ex.showCorr = true;
    $rootScope.$emit('show_question_result', ex.qStr, ex.showCorr);
  };
}]);

// Show the answers of every question
ngApp.factory('AnswerExFactory', ['$rootScope', function($rootScope) {
  return function(ex) {
    ex.showAnsw = !ex.showAnsw;
    $rootScope.$emit('show_question_answer', ex.qStr, ex.showAnsw);
  };
}]);

