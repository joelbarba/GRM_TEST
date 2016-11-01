
// 4 = num
// 888 = ex

angular.module('myApp.unit4', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/unit4', {
      templateUrl: 'unit4/unit4.html',
      controller: 'Unit4Ctrl'
    });
  }]).

controller('Unit4Ctrl', ['$scope', '$rootScope', 'CorrectExFactory', 'AnswerExFactory',
  function($scope, $rootScope, CorrectExFactory, AnswerExFactory) {

    console.log('exe4');

    // Object for question 4_1
    $scope.ex4_1 = (function() {
      var ex4_1 = {};
      ex4_1.qStr = '4_1';
      ex4_1.title = "4.1. Put the verb into the correct form, present continuous or present simple.";
      ex4_1.data = [
        { t1: "1. Are you hungry? ",                          hint: "(you / want)",   t2: "something to eat?" },
        { t1: "2. Don't put the dictionary away. ",           hint: "(I / use)",      t2: " it." },
        { t1: "3. Don't put the dictionary away. ",           hint: "(I / need)",     t2: " it." },
        { t1: "4. Who is that man? What ",                    hint: "(he / want)",    t2: "?" },
        { t1: "5. Who is that man? Why ",                     hint: "(he / look)",    t2: " at us?" },
        { t1: "6. Alan says he's 80 years old, but nobody ",  hint: "(believe)",      t2: " him." },
        { t1: "7. She told me her name, but ",                hint: "(I / not / remember)",   t2: " it now." },
        { t1: "8. ",        hint: "(I / think)",        t2: " of selling my car. Would you be interested in buying it?" },
        { t1: "9. ",        hint: "(I / think)",        t2: " you should sell your car." },
        { t1: " ",          hint: "(you / not / use)",  t2: " it very often." },
        { t1: "10. Air ",   hint: "(consist)",          t2: " mainly of nitrogen and oxygen." }
      ];
      ex4_1.data[0].ca  = ["Do you want"];
      ex4_1.data[1].ca  = ["I'm using", "I am using"];
      ex4_1.data[2].ca  = ["I need"];
      ex4_1.data[3].ca  = ["does he want"];
      ex4_1.data[4].ca  = ["is he looking"];
      ex4_1.data[5].ca  = ["believes"];
      ex4_1.data[6].ca  = ["I don't remember", "I do not remember", "I can't remember", "I cannot remember"];
      ex4_1.data[7].ca  = ["I'm thinking", "I am thinking"];
      ex4_1.data[8].ca  = ["I think"];
      ex4_1.data[9].ca  = ["You don't use", "You do not use"];
      ex4_1.data[10].ca  = ["consists"];

      ex4_1.prepare = function() {
        ex4_1.q = angular.copy(ex4_1.data);
        ex4_1.showCorr = false;
        ex4_1.showAnsw = false;
      };
      ex4_1.correct = CorrectExFactory;
      ex4_1.answer = AnswerExFactory;
      return ex4_1;
    })();


    $scope.ex4_1.prepare();
    // $scope.ex4_888.prepare();
    // $scope.ex4_888.prepare();

  }]
);
