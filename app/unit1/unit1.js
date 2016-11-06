'use strict';

angular.module('myApp.unit1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit1', {
    templateUrl: 'unit1/unit1.html',
    controller: 'Unit1Ctrl'
  });
}])

.controller('Unit1Ctrl', ['$scope', '$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher', 'AppData',
  function($scope, $rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher, AppData) {

    // ex = exercice
    // ca = correct answer
    // ua = user answer
    // q = question

    $scope.isUnlock = Teacher.isUnlock;

    $scope.refreshPage = function() {
      $scope.viewQ1_1 = (1 === Teacher.getCurrentQuestion());
      $scope.viewQ1_2 = (2 === Teacher.getCurrentQuestion());
      $scope.viewQ1_3 = (3 === Teacher.getCurrentQuestion());
      $scope.viewQ1_4 = (4 === Teacher.getCurrentQuestion());
    };
    $rootScope.$on('refresh_page', $scope.refreshPage);
    $scope.refreshPage();
    $scope.getLastScore = Teacher.getLastScore;
    $scope.getAtempts = Teacher.getAtempts;


    // Object for question 1 1
    $scope.ex1_1 = AppData.ex1_1();
    $scope.ex1_2 = AppData.ex1_2();


    // Object for question 1 3
    $scope.ex1_3 = (function() {
      var ex1_3 = {};
      ex1_3.qStr = '1_3';
      ex1_3.title = '1.3. Put the verb into the correct form, positive (I\'m doing etc.) or negative (I\'m not doing etc.).';
      ex1_3.data = [
        { t1: "Please don't make so much noise. ",  hint: "(I / try)",   t2: " to work." },
        { t1: "Let's go out now. ",  hint: "(it / rain)",   t2: " any more." },
        { t1: "You can turn off the radio. ",  hint: "(I / listen)",   t2: " to it." },
        { t1: "Kate phoned me last night. She's on holiday in France, ",  hint: "(she / have)",   t2: " a great time and doesn't want to come back." },
        { t1: "I want to lose weight, so this week ",  hint: "(I / eat)",   t2: " lunch." },
        { t1: "Andrew has just started evening classes. ",  hint: "(he / learn)",   t2: " Japanese." },
        { t1: "Paul and Sally have had an argument, ",  hint: "(they / speak)",   t2: " to each other." },
        { t1: "",  hint: "(I / get)",   t2: " tired. I need a rest." },
        { t1: "Tim  ",  hint: "(work)",   t2: " today. He's taken the day off." },
        { t1: "",   hint: "(I / look)",   t2: " for Sophie. Do you know where she is?" }
      ];
      ex1_3.data[0].ca = ["I am trying", "I'm trying"];
      ex1_3.data[1].ca = ["It is not raining", "It isn't raining"];
      ex1_3.data[2].ca = ["I'm not listening", "I am not listening"];
      ex1_3.data[3].ca = ["She's having", "She is having"];
      ex1_3.data[4].ca = ["I'm not eating", "I am not eating"];
      ex1_3.data[5].ca = ["He's learning", "He is learning"];
      ex1_3.data[6].ca = ["They aren't speaking", "They are not speaking"];
      ex1_3.data[7].ca = ["I'm getting", "I am getting"];
      ex1_3.data[8].ca = ["isn't working", "is not working", "'s not working"];
      ex1_3.data[9].ca = ["I'm looking", "I am looking"];

      ex1_3.prepare = function() {
        ex1_3.q = ArrayHelper.setQNum(ArrayHelper.unorderArray(ex1_3.data));
        ex1_3.showCorr = false;
        ex1_3.showAnsw = false;
      };
      ex1_3.correct = CorrectExFactory;
      ex1_3.answer = AnswerExFactory;
      return ex1_3;
    })();


    // Object for question 1 4
    $scope.ex1_4 = (function() {
      var ex1_4 = {};
      ex1_4.qStr = '1_4';
      ex1_4.title = '1.4. Complete the sentences using the following verbs:';
      ex1_4.data = [
        { t1: "The population of the world ",    t2: " very fast." },
        { t1: "The world ",  t2: ". Things never stay the same." },
        { t1: "The situation is already bad and it ",  t2: " worse." },
        { t1: "The cost of living ",  t2: " Every year things are more expensive." },
        { t1: "The weather ",  t2: " to improve. The rain has stopped, and the wind isn't as strong." }
      ];
      ex1_4.data[0].ca  = ["is increasing"];
      ex1_4.data[1].ca  = ["is changing"];
      ex1_4.data[2].ca  = ["is getting", "'s getting"];
      ex1_4.data[3].ca  = ["is rising"];
      ex1_4.data[4].ca  = ["is starting"];
      ex1_4.prepare = function() {
        ex1_4.q = ArrayHelper.setQNum(ArrayHelper.unorderArray(ex1_4.data));
        ex1_4.questions = angular.copy(ex1_4.data);
        ex1_4.showCorr = false;
        ex1_4.showAnsw = false;
      };
      ex1_4.correct = CorrectExFactory;
      ex1_4.answer = AnswerExFactory;
      return ex1_4;
    })();


    $scope.ex1_1.prepare();
    $scope.ex1_2.prepare();
    $scope.ex1_3.prepare();
    $scope.ex1_4.prepare();


  }]
);
