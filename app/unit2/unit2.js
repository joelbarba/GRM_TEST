'use strict';

angular.module('myApp.unit2', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unit2', {
    templateUrl: 'unit2/unit2.html',
    controller: 'Unit2Ctrl'
  });
}]).

controller('Unit2Ctrl', ['$scope', '$rootScope', 'CorrectExFactory', 'AnswerExFactory',
  function($scope, $rootScope, CorrectExFactory, AnswerExFactory) {

    console.log('exe unit2.js');
    // Object for question 2 1
    $scope.ex2_1 = (function() {
      var ex2_1 = {};
      ex2_1.qStr = '2_1';
      ex2_1.title = '2.1. Complete the sentences using the following verbs:';
      ex2_1.data = [
        { id: 1,  ca: ["speaks"],   t1: "1. Tanya",                 t2: "German very well."                 },
        { id: 2,  ca: ["drink"],    t1: "2. I don't often",         t2: "coffee."                           },
        { id: 3,  ca: ["opens"],    t1: "3. The swimming pool",     t2: "at 7.30 every morning."            },
        { id: 4,  ca: ["causes"],   t1: "4. Bad driving",           t2: "many accidents."                   },
        { id: 5,  ca: ["live"],     t1: "5. My parents",            t2: "in a very small flat."             },
        { id: 6,  ca: ["take"],     t1: "6. The Olympic Games",     t2: "place every four years."           },
        { id: 7,  ca: ["connects"], t1: "7. The Panama Canal",      t2: "the Atlantic and Pacific Oceans."  }
      ];
      ex2_1.prepare = function() {
        ex2_1.q = angular.copy(ex2_1.data);
        ex2_1.showCorr = false;
        ex2_1.showAnsw = false;
      };
      ex2_1.correct = CorrectExFactory;
      ex2_1.answer = AnswerExFactory;
      return ex2_1;
    })();

    // Object for question 2_2
    $scope.ex2_2 = (function() {
      var ex2_2 = {};
      ex2_2.qStr = '2_2';
      ex2_2.title = '2.2. Put the verb into the correct form.';
      ex2_2.data = [
        { ca: ["doesn't drink", "does not drink"], t1: "1. Julie",                        hint: "(not / drink)",        t2:"tea very often."             },
        { ca: ["do the banks close"],              t1: "2. What time",                    hint: "(the banks / close)",  t2:"here?."                      },
        { ca: ["don't use", "do not use"],         t1: "3. I've got a car, but I",        hint: "(not / use)",          t2:"it much."                    },
        { ca: ["does Ricardo come"],               t1: "4. Where",                        hint: "(Ricardo / come)",     t2:"from? From Cuba."            },
        { ca: ["do you do"],                       t1: "5. What",                         hint: "(you / do)",           t2:"? I'm an electrician."       },
        { ca: ["takes"],                           t1: "6. It",                           hint: "(take)",               t2:"me an hour to get to work."  },
        { ca: ["does it take"],                    t1: "How long",                        hint: "(it / take)",          t2:"you?."                       },
        { ca: ["does this word mean"],             t1: "7. Look at this sentence. What",  hint: "(this word / mean)",   t2:"?"                           },
        { ca: ["doesn't do", "does not do"],       t1: "8. David isn't very fit. He",     hint: "(not / do)",           t2:"any sport."                  },
      ];
      ex2_2.prepare = function() {
        ex2_2.q = angular.copy(ex2_2.data);
        ex2_2.showCorr = false;
        ex2_2.showAnsw = false;
      };
      ex2_2.correct = CorrectExFactory;
      ex2_2.answer = AnswerExFactory;
      return ex2_2;
    })();

    // Object for question 2_3
    $scope.ex2_3 = (function() {
      var ex2_3 = {};
      ex2_3.qStr = '2_3';
      ex2_3.title = '2.3. Use the following verbs to complete the sentences. Sometimes you need the negative:';
      ex2_3.data = [
        { ca: ["goes"],                                 t1: "1. The earth",             t2:"round the sun." },
        { ca: ["doesn't grow", "does not"],             t1: "2. Rice",                  t2:"in Britain." },
        { ca: ["rises"],                                t1: "3. The sun",               t2:"in the east." },
        { ca: ["make"],                                 t1: "4. Bees",                  t2:"honey" },
        { ca: ["don't eat", "do not eat"],              t1: "5. Vegetarians",           t2:"meat." },
        { ca: ["doesn't believe", "does not believe"],  t1: "6. An atheist",            t2:"in god." },
        { ca: ["translates"],                           t1: "7. An interpreter",        t2:"from one language into another." },
        { ca: ["don't tell", "do not tell"],            t1: "8. Liars are people who",  t2:"the truth." },
        { ca: ["flows"],                                t1: "9. The River Amazon",      t2:"into the Atlantic Ocean." }
      ];
      ex2_3.prepare = function() {
        ex2_3.q = angular.copy(ex2_3.data);
        ex2_3.showCorr = false;
        ex2_3.showAnsw = false;
      };
      ex2_3.correct = CorrectExFactory;
      ex2_3.answer = AnswerExFactory;
      return ex2_3;
    })();

    // Object for question 2_4
    $scope.ex2_4 = (function() {
      var ex2_4 = {};
      ex2_4.qStr = '2_4';
      ex2_4.title = '2.4. You ask Lisa questions about herself and her family. Write the questions.';
      ex2_4.data = [
        { ca: ["How often do you play tennis"],       t1: "1. You know that Lisa plays tennis. You want to know how often. Ask her.",                 t3:"?" },
        { ca: ["How often do you go to the cinema"],  t1: "2. Perhaps Lisa's sister plays tennis too. You want to know how often. Ask Lisa.",                   t3:"?", hint: "your sister" },
        { ca: ["Which newspaper do you read"],        t1: "3. You know that Lisa reads a newspaper every day. You want to know which one. Ask her.",  t3:"?" },
        { ca: ["What does your brother do"],          t1: "4. You know that Lisa's brother works. You want to know what he does. Ask Lisa.",          t3:"?" },
        { ca: ["How often do you go to the cinema"],  t1: "5. You know that Lisa goes to the cinema a lot. You want to know how often. Ask her.",     t3:"?" },
        { ca: ["Where do your grandparents live"],    t1: "6. You don't know where Lisa's grandparents live. You want to know. Ask Lisa.",            t3:"?" }
      ];
      ex2_4.prepare = function() {
        ex2_4.q = angular.copy(ex2_4.data);
        ex2_4.showCorr = false;
        ex2_4.showAnsw = false;
      };
      ex2_4.correct = CorrectExFactory;
      ex2_4.answer = AnswerExFactory;
      return ex2_4;
    })();


    // Object for question 2.5
    $scope.ex2_5 = (function() {
      var ex2_5 = {};
      ex2_5.qStr = '2_5';
      ex2_5.title = '2.5. Complete using the following:.';
      ex2_5.data = [
        { ca: ["I suggest"],    t1: "1. Mr Evans is not in the office today.", t2:"you try calling him tomorrow." },
        { ca: ["I promise"],    t1: "2. I won't tell anybody what you said", t2:"." },
        { ca: ["I insist"],     t1: "3. (In a restaurant) You must let me pay for the meal", t2:"." },
        { ca: ["I apologise"],  t1: "4. ", t2:"for what I did. It won't happen again." },
        { ca: ["I recommend"],  t1: "5. The new restaurant in Hill Street is very good.", t2:"it." }
      ];
      ex2_5.prepare = function() {
        ex2_5.q = angular.copy(ex2_5.data);
        ex2_5.showCorr = false;
        ex2_5.showAnsw = false;
      };
      ex2_5.correct = CorrectExFactory;
      ex2_5.answer = AnswerExFactory;
      return ex2_5;
    })();


    $scope.ex2_1.prepare();
    $scope.ex2_2.prepare();
    $scope.ex2_3.prepare();
    $scope.ex2_4.prepare();
    $scope.ex2_5.prepare();

  }]
);
