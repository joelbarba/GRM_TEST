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
  varTemplate += '  <span ng-show="showAnsw" class="answ">{{q.ca}}</span>';
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
    }
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
  varTemplate += ' <br ng-if="(Number(num) === 0 || !ex.q[num].fix)"/>';
  varTemplate += ' <span ng-if="isTab" style="margin-left: 22px"></span>';
  varTemplate += ' <span class="dial">{{ex.q[num].t1}} <input ng-model="ex.q[num].ua" class="text-inline-answ"/> {{ex.q[num].t2}} </span>';
  varTemplate += ' <span ng-if="isHint" class="dial-tip">{{ex.q[num].hint}}</span>';
  varTemplate += ' <resultat ex="{{ex.qStr}}" q="ex.q[num]"></resultat>';
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
      $scope.isTab = (attr.hasOwnProperty('tab'));
      $scope.isHint = $scope.ex.q[$scope.num].hasOwnProperty('hint');
    }
  };
}]);

ngApp.directive('textQF', [function() {
  var varTemplate = '';

  varTemplate += '<span>';
  varTemplate += '  <input ng-model="ex.q[num].ua" style="position: absolute; left: {{p[0]}}px; top: {{p[1]}}px; width: {{p[2]}}px;" class="text-inline-answ"/>';
  varTemplate += '  <span style="position: absolute; left: {{p[3]}}px; top: {{p[4]}}px;">';
  varTemplate += '    <resultat ex="{{ex.qStr}}" q="ex.q[num]"></resultat>';
  varTemplate += '  </span>';
  varTemplate += '</span>';

  return {
    restrict : 'AE',
    replace  : true,
    template : varTemplate,
    scope    : {
      ex   : '=',
      num  : '@',
      pos  : '@'
    },
    link: function($scope) {
      $scope.p = $scope.pos.split(',');
      if ($scope.p.length < 4) {
        $scope.p[3] = parseInt($scope.p[0]) + parseInt($scope.p[2]) + 4;
        $scope.p[4] = parseInt($scope.p[1]) + 5;
      }
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

ngApp.directive('questionBox', [function() {
  return {
    restrict : 'AE',
    replace  : true,
    templateUrl : 'question-tmpl.html',
    transclude: true,
    scope    : {
      ex: '='
    },
    link : function($scope, element, attr) {
    }
  };
}]);

// Checks (question by question) if the correct answer (ca) matches the user answer
ngApp.factory('CorrectExFactory', ['$rootScope', 'Teacher', function($rootScope, Teacher) {
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

    Teacher.setScore(ex);

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


// Helping functions for arrays
ngApp.factory('ArrayHelper', [function() {
  return {
    // Order randomly a given array
    unorderArray : function(inputArray) {
      var inArr = [];
      var outArr = [];
      inputArray.forEach(function(item) {
        if (item.hasOwnProperty('fix') && inArr.length > 0) {
          inArr[inArr.length - 1].push(item);
        } else {
          inArr.push([item]);
        }
      });

      while (inArr.length > 0) {
        var sel = Math.floor(Math.random() * inArr.length);
        inArr[sel].forEach(function(item) {
          outArr.push(item);
        });
        inArr.splice(sel, 1);
      }
      return outArr;
    },
    // Set the number at the beginning of each question (t1)
    setQNum: function(ex) {
      var outArr = angular.copy(ex);
      var num = 1;
      outArr.forEach(function(q) {
        if (!q.hasOwnProperty('fix')) {
          q.t1 = num + ". " + q.t1;
          num++;
        }
      });
      return outArr;
    }
  };
}]);


// Service to control the sequence
ngApp.factory('Teacher', ['$rootScope', '$timeout',
function($rootScope, $timeout) {
  var currentUnit;
  var currentQuestion;
  var score;

  return {
    reset : function() {
      currentUnit = 1;
      currentQuestion = 2;
      score = {};
    },
    getCurrentUnit: function() {
      return currentUnit;
    },
    getCurrentQuestion: function() {
      return currentQuestion;
    },
    getLastScore: function(unit, question) {
      var unitProp = 'unit_' + unit;
      var exProp = 'ex_' + question;
      if (score.hasOwnProperty(unitProp)) {
        if (score[unitProp].hasOwnProperty(exProp)) {
          if (score[unitProp][exProp].length > 0) {
            return score[unitProp][exProp][score[unitProp][exProp].length - 1].perScore;
          }
        }
      }
      return 0;
    },
    getAtempts: function(unit, question) {
      var unitProp = 'unit_' + unit;
      var exProp = 'ex_' + question;
      if (score.hasOwnProperty(unitProp)) {
        if (score[unitProp].hasOwnProperty(exProp)) {
          return score[unitProp][exProp].length;
        }
      }
      return 0;
    },
    // Create a property in score for the unit, and an array for each question
    iniScore: function(unit) {
      var unitProp = 'unit_' + unit.unitNum;
      if (!score.hasOwnProperty(unitProp)) {
        score[unitProp] = {};
      }
      unit.ex.forEach(function(q, num) {
        var exProp = 'ex_' + (num);
        score[unitProp][exProp] = [];
      });
    },
    setScore: function(ex) {
      var unitProp = 'unit_' + ex.unit;
      var exProp = 'ex_' + ex.qNum;

      // Set the new score
      var newScore = {
        moment: new Date(),
        perScore: 0,
        totalAns: ex.q.length,
        correctAns: 0
      };
      ex.q.forEach(function(q) {
        if (q.correct) newScore.correctAns++;
      });
      if (ex.q.length > 0) {
        newScore.perScore = Math.round(newScore.correctAns / ex.q.length * 10000) / 100;
      }
      score[unitProp][exProp].push(newScore);

      // It the score is 100%, forward to the next question
      if (newScore.totalAns === newScore.correctAns) {
        currentQuestion = ex.qNum + 1;
        if (!score[unitProp].hasOwnProperty('ex_' + currentQuestion)) { // next unit
          currentQuestion = 1;
          currentUnit++;
        }
        $timeout(function() {
          $rootScope.$emit('refresh_page');
        }, 1000);

      }
    }
  };
}]);




ngApp.run(['Teacher', function(Teacher) {
  Teacher.reset();
}]);
