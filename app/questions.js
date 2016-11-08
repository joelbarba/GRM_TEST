var ngApp = angular.module('myApp');

ngApp.factory('Unit1', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [], unitNum: 1 };

    unit.ex[1] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 1;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "The sentences on the right follow those on the left. Which sentence goes with which?";
      ex.data = [
        { id: 1, text : "Please don't make so much noise.",         ca: "I'm trying to work." },
        { id: 2, text : "I need to eat something soon.",            ca: "I'm getting hungry." },
        { id: 3, text : "I don't have anywhere to live right now.", ca: "I'm looking for an apartment." },
        { id: 4, text : "We need to leave soon.",                   ca: "It's getting late." },
        { id: 5, text : "They don't need their car any more.",      ca: "They're trying to sell it." },
        { id: 6, text : "Things are not so good at work.",          ca: "The company is losing money." },
        { id: 7, text : "It isn't true what they said.",            ca: "They're lying." },
        { id: 8, text : "We're going to get wet",                   ca: "It's starting to rain." }
      ];
      ex.prepare = function() {
        console.log('prepare1');
        ex.q = ArrayHelper.unorderArray(ex.data);
        ex.allAnswers = ArrayHelper.unorderArray(ex.data);
        ex.allAnswers.unshift({ id: 0, ca:'' });
        ex.showCorr = false;
        ex.showAnsw = false;
        $rootScope.$emit('show_question_result', ex.qStr, false);
        ex.q.forEach(function(q) {
          delete q.correct;
        });
      };
      ex.correct = function() {
        ex.q.forEach(function(q) {
          q.correct = (q.id == q.ua);
        });
        ex.showCorr = true;
        $rootScope.$emit('show_question_result', '1_1', ex.showCorr);
        Teacher.setScore(ex);
      };
      ex.answer = AnswerExFactory;
      ex.getLastScore = function() { return Teacher.getLastScore(ex.unit, ex.qNum); };
      ex.getAtempts = function() { return Teacher.getAtempts(ex.unit, ex.qNum); };
      ex.prepare();
      return ex;
    }());

    unit.ex[2] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 2;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += 'Complete the conversations.';
      ex.data = [
        { t1: "B: Oh, did you? ",    hint: "(what / he / do)",   t2: " these days?" },
        { t1: "B: ",    hint: "(what / he / study)",   t2: " ?" },
        { t1: "B: ",    hint: "(he / enjoy)",   t2: " it?." },
        { t1: "A: Hi, Nicola. How ",    hint: "(your new job / go)",   t2: " ?" },
        { t1: "B: Not bad. It wasn't so good at first, but ",    hint: "(it / get)",   t2: " better now." },
        { t1: "B: Yes, but ",    hint: "(he / not / enjoy)",   t2: " his work right now." },
        { t1: "He's been in the same job for a long time and ",    hint: "(he / begin)",   t2: " to get bored with it." }
      ];
      ex.data[0].ca  = ["What is he doing", "What's he doing"];
      ex.data[1].ca  = ["What is he studying", "What's he studying"];
      ex.data[2].ca  = ["Is he enjoying"];
      ex.data[3].ca  = ["is your new job going", "'s your new job going"];
      ex.data[4].ca  = ["it is getting", "it's getting"];
      ex.data[5].ca  = ["he is not enjoying", "he's not enjoying", "he isn't enjoying"];
      ex.data[6].ca  = ["he is beginning", "he's beginning"];

      ex.prepare = function() {
        ex.q = angular.copy(ex.data);
        ex.showCorr = false;
        ex.showAnsw = false;
        $rootScope.$emit('show_question_result', ex.qStr, false);
        ex.q.forEach(function(q) {
          delete q.correct;
        });
      };
      ex.correct = CorrectExFactory;
      ex.answer = AnswerExFactory;
      ex.getLastScore = function() { return Teacher.getLastScore(ex.unit, ex.qNum); };
      ex.getAtempts = function() { return Teacher.getAtempts(ex.unit, ex.qNum); };
      ex.prepare();
      return ex;
    }());

    unit.ex[3] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 3;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "Put the verb into the correct form, positive (I'm doing etc.) or negative (I'm not doing etc.).";
      ex.data = [
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
      ex.data[0].ca = ["I am trying", "I'm trying"];
      ex.data[1].ca = ["It is not raining", "It isn't raining"];
      ex.data[2].ca = ["I'm not listening", "I am not listening"];
      ex.data[3].ca = ["She's having", "She is having"];
      ex.data[4].ca = ["I'm not eating", "I am not eating"];
      ex.data[5].ca = ["He's learning", "He is learning"];
      ex.data[6].ca = ["They aren't speaking", "They are not speaking"];
      ex.data[7].ca = ["I'm getting", "I am getting"];
      ex.data[8].ca = ["isn't working", "is not working", "'s not working"];
      ex.data[9].ca = ["I'm looking", "I am looking"];

      ex.prepare = function() {
        // ex.q = angular.copy(ex.data);
        ex.q = ArrayHelper.setQNum(ArrayHelper.unorderArray(ex.data));
        ex.showCorr = false;
        ex.showAnsw = false;
        $rootScope.$emit('show_question_result', ex.qStr, false);
        ex.q.forEach(function(q) {
          delete q.correct;
        });
      };
      ex.correct = CorrectExFactory;
      ex.answer = AnswerExFactory;
      ex.getLastScore = function() { return Teacher.getLastScore(ex.unit, ex.qNum); };
      ex.getAtempts = function() { return Teacher.getAtempts(ex.unit, ex.qNum); };
      ex.prepare();
      return ex;
    }());

    unit.ex[4] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 4;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += 'Complete the sentences using the following verbs:';
      ex.data = [
        { t1: "The population of the world ",    t2: " very fast." },
        { t1: "The world ",  t2: ". Things never stay the same." },
        { t1: "The situation is already bad and it ",  t2: " worse." },
        { t1: "The cost of living ",  t2: " Every year things are more expensive." },
        { t1: "The weather ",  t2: " to improve. The rain has stopped, and the wind isn't as strong." }
      ];
      ex.data[0].ca  = ["is increasing"];
      ex.data[1].ca  = ["is changing"];
      ex.data[2].ca  = ["is getting", "'s getting"];
      ex.data[3].ca  = ["is rising"];
      ex.data[4].ca  = ["is starting"];

      ex.prepare = function() {
        // ex.q = angular.copy(ex.data);
        ex.q = ArrayHelper.setQNum(ArrayHelper.unorderArray(ex.data));
        ex.showCorr = false;
        ex.showAnsw = false;
        $rootScope.$emit('show_question_result', ex.qStr, false);
        ex.q.forEach(function(q) {
          delete q.correct;
        });
      };
      ex.correct = CorrectExFactory;
      ex.answer = AnswerExFactory;
      ex.getLastScore = function() { return Teacher.getLastScore(ex.unit, ex.qNum); };
      ex.getAtempts = function() { return Teacher.getAtempts(ex.unit, ex.qNum); };
      ex.prepare();
      return ex;
    }());

    unit.refreshPage = function() {
      unit.ex.forEach(function(ex, num) {
        ex.isExpanded = (num === Teacher.getCurrentQuestion());
      });
    };
    $rootScope.$on('refresh_page', unit.refreshPage);

    Teacher.iniScore(unit);

    return unit;
}]);

