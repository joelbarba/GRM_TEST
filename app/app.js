'use strict';

// Declare app level module which depends on views, and components
var ngApp = angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.unit1',
  'myApp.unit2',
  'myApp.unit3',
  'myApp.unit4',
  'myApp.unit5',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/unit1'});
}]);


ngApp.directive('test1', ['$rootScope', function($rootScope) {
    var varTemplate = '';
    varTemplate += '<h1>hello</h1>';

    return {
      restrict : 'AE',
      replace  : true,
      template : varTemplate,
      scope    : {
      },
      link     : function($scope, element, attr) {

      }
    };
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
