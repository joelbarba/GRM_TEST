import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
var ngApp = angular.module('mainModule', [angularMeteor])

ngApp.controller('MainCtrl', ['$scope', 
  function($scope) {
    
    // $scope.helpers({
    //   tasks() {
    //     return AllTasks.find({});
    //   }
    // });

        // ex = exercice
        // ca = correct answer
        // ua = user answer
        // q = question

    $scope.ex1_1 = {};
    $scope.ex1_1.data = [
      { id: 1, text : "Please don't make so much noise.",           ca: "I'm trying to work." },
      { id: 2, text : "I need to eat something soon.",              ca: "I'm getting hungry." },
      { id: 3, text : "I don't have anywhere to live right now.",   ca: "I'm looking for an apartment." },
      { id: 4, text : "We need to leave soon.",                     ca: "It's getting late." },
      { id: 5, text : "They don't need their car any more.",        ca: "They're trying to sell it." },
      { id: 6, text : "Things are not so good at work.",            ca: "The company is losing money." },
      { id: 7, text : "It isn't true what they said.",              ca: "They're lying." },
      { id: 8, text : "We're going to get wet",                     ca: "It's starting to rain." }
    ];
    $scope.ex1_1.prepare = function() {

      $scope.ex1_1.questions = $scope.unorderArray($scope.ex1_1.data);
      $scope.ex1_1.allAnswers = $scope.unorderArray($scope.ex1_1.data);
      $scope.ex1_1.allAnswers.unshift({ id: 0, ca:'' });
      $scope.ex1_1.showCorr = false;
      $scope.ex1_1.showAnsw = false;
    };
    $scope.ex1_1.correct = function() {
      $scope.ex1_1.questions.forEach(function(q) {
        q.correct = (q.id == q.ua);
      });
      $scope.ex1_1.showCorr = true;

    };
    $scope.ex1_1.answer = function() {
      $scope.ex1_1.showAnsw = true;
    };


    $scope.ex1_2 = {};
    $scope.ex1_2.data = [
      { id: 1, ca: ["What is he doing", "What's he doing"] },
      { id: 2, ca: ["What is he studying", "What's he studying"] },
      { id: 3, ca: ["Is he enjoying"] },
      { id: 4, ca: ["is your new job going", "'s your new job going"] },
      { id: 5, ca: ["it is getting", "it's getting"] },
      { id: 6, ca: ["he is not enjoying", "he isn't enjoying"] },
      { id: 7, ca: ["he is beginning", "he's beginning"] },
    ];
    $scope.ex1_2.prepare = function() {

      $scope.ex1_2.questions = angular.copy(this.data);
      $scope.ex1_2.showCorr = false;
      $scope.ex1_2.showAnsw = false;
    };
    $scope.ex1_2.correct = function() {

      $scope.ex1_2.questions.forEach(function(q) {

        q.correct = false;
        if (q.ua) {
          for (var t = 0; t < q.ca.length; t++) {
            if (q.ca[t].toUpperCase() == q.ua.toUpperCase()) q.correct = true;
          }
        }

      });          

      $scope.ex1_2.showCorr = true;

    };
    $scope.ex1_2.answer = function() {
      $scope.ex1_2.showAnsw = true;
    };




    // It gets the inArray and returns it desordered
    $scope.unorderArray = function(inputArray) {
      var inArr = angular.copy(inputArray);
      var outArr = [];
      
      while (inArr.length > 0) {
        var sel = Math.floor(Math.random() * inArr.length);
        outArr.push(inArr[sel]);
        inArr.splice(sel, 1);
      }
      return outArr;

    };

    

    $scope.ex1_1.prepare();
    $scope.ex1_2.prepare();


  }]
);


ngApp.directive('resultat', function() {
  var varTemplate = '';
  varTemplate += '<span>  {{qObj.questions[qNum].correct}}';
  varTemplate += '  <span ng-show="showCorr">';
  varTemplate += '    <span ng-show="{{qObj.questions[qNum].correct}}">fsss</span>';
  varTemplate += '    <span ng-show="{{qObj.questions[qNum].correct}}"  class="glyphicon glyphicon-ok"></span>';
  varTemplate += '    <span ng-show="{{!qObj.questions[qNum].correct}}" class="glyphicon glyphicon-remove"></span>';
  varTemplate += '  </span>';
  varTemplate += '  <span ng-show="showAnsw">xxxxxxxxxxxxxx</span>';
  varTemplate += '</span>';

  return {
      restrict : 'AE',
      replace  : true,
      template : varTemplate,
      scope    : {
        qObj : '=',
        qOb  : '=',
        qNum : '='
      },
      link     : function($scope, element, attr) { 

        $scope.showCorr = true;
        $scope.showAnsw = true;
        $scope.correct  = $scope.qObj.questions[$scope.qNum].correct;
        // $scope.canswer  = $scope.qObj.questions[$scope.qNum].ca;
        $scope.canswer  = $scope.qOb;

        // console.log('this is the link fun', $scope.qObj, $scope.qNum);
      },
  };
});