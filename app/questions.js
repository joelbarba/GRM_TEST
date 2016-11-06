var ngApp = angular.module('myApp');

// Helping functions for arrays
ngApp.factory('AppData', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

  var questions = {};

  questions.ex1_1 = function() {
    var ex = {};
    ex.unit = 1;
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
    return ex;
  };

  questions.ex1_2 = function() {
    var ex = {};
    ex.unit = 1;
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
    return ex;
  };


  return questions;
}]);



