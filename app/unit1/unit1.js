'use strict';

angular.module('myApp.unit1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit1', {
    templateUrl: 'unit1/unit1.html',
    controller: 'Unit1Ctrl'
  });
}])

.controller('Unit1Ctrl', ['$scope', '$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory',
  function($scope, $rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory) {


    // ex = exercice
    // ca = correct answer
    // ua = user answer
    // q = question


    // Object for question 1 1
    $scope.ex1_1 = (function() {
      var ex1_1 = {};
      ex1_1.qStr = '1_1';
      ex1_1.title = '1.1. The sentences on the right follow those on the left. Which sentence goes with which?';
      ex1_1.data = [
        { id: 1, text : "Please don't make so much noise.",         ca: "I'm trying to work." },
        { id: 2, text : "I need to eat something soon.",            ca: "I'm getting hungry." },
        { id: 3, text : "I don't have anywhere to live right now.", ca: "I'm looking for an apartment." },
        { id: 4, text : "We need to leave soon.",                   ca: "It's getting late." },
        { id: 5, text : "They don't need their car any more.",      ca: "They're trying to sell it." },
        { id: 6, text : "Things are not so good at work.",          ca: "The company is losing money." },
        { id: 7, text : "It isn't true what they said.",            ca: "They're lying." },
        { id: 8, text : "We're going to get wet",                   ca: "It's starting to rain." }
      ];
      ex1_1.prepare = function() {


        ex1_1.questions = ArrayHelper.unorderArray(ex1_1.data);
        ex1_1.allAnswers = ArrayHelper.unorderArray(ex1_1.data);
        ex1_1.allAnswers.unshift({ id: 0, ca:'' });
        ex1_1.showCorr = false;
        ex1_1.showAnsw = false;
      };
      ex1_1.correct = function() {
        ex1_1.questions.forEach(function(q) {
          q.correct = (q.id == q.ua);
        });
        ex1_1.showCorr = true;
        $rootScope.$emit('show_question_result', '1_1', ex1_1.showCorr);

      };
      ex1_1.answer = AnswerExFactory;
      return ex1_1;
    })();


    // Object for question 1 2
    $scope.ex1_2 = (function() {
      var ex1_2 = {};
      ex1_2.qStr = '1_2';
      ex1_2.title = '1.2. Complete the conversations.';
      ex1_2.data = [
        { t1: "B: Oh, did you? ",    hint: "(what / he / do)",   t2: " these days?" },
        { t1: "B: ",    hint: "(what / he / study)",   t2: " ?" },
        { t1: "B: ",    hint: "(he / enjoy)",   t2: " it?." },
        { t1: "A: Hi, Nicola. How ",    hint: "(your new job / go)",   t2: " ?" },
        { t1: "B: Not bad. It wasn't so good at first, but ",    hint: "(it / get)",   t2: " better now." },
        { t1: "B: Yes, but ",    hint: "(he / not / enjoy)",   t2: " his work right now." },
        { t1: "He's been in the same job for a long time and ",    hint: "(he / begin)",   t2: " to get bored with it." }
      ];
      ex1_2.data[0].ca  = ["What is he doing", "What's he doing"];
      ex1_2.data[1].ca  = ["What is he studying", "What's he studying"];
      ex1_2.data[2].ca  = ["Is he enjoying"];
      ex1_2.data[3].ca  = ["is your new job going", "'s your new job going"];
      ex1_2.data[4].ca  = ["it is getting", "it's getting"];
      ex1_2.data[5].ca  = ["he is not enjoying", "he's not enjoying", "he isn't enjoying"];
      ex1_2.data[6].ca  = ["he is beginning", "he's beginning"];

      ex1_2.prepare = function() {
        ex1_2.q = angular.copy(ex1_2.data);
        ex1_2.showCorr = false;
        ex1_2.showAnsw = false;
      };
      ex1_2.correct = CorrectExFactory;
      ex1_2.answer = AnswerExFactory;
      return ex1_2;
    })();


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
