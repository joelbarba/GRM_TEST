'use strict';

angular.module('myApp.unit1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/unit1', {
        templateUrl: 'unit1/unit1.html',
        controller: 'Unit1Ctrl'
    });
}])

.controller('Unit1Ctrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {


        // ex = exercice
        // ca = correct answer
        // ua = user answer
        // q = question

        // Checks (question by question) if the correct answer (ca) matches the user answer
        var correct_ex = function(ex, qStr) {

            ex.questions.forEach(function(q) {
                q.correct = false;
                if (q.ua) {
                    for (var t = 0; t < q.ca.length; t++) {
                        if (q.ca[t].toUpperCase() == q.ua.toUpperCase()) q.correct = true;
                    }
                }
            });
            ex.showCorr = true;
            $rootScope.$emit('show_question_result', ex.qStr, ex.showCorr);
        };

        // Show the answers of every question
        var answer_ex = function(ex) {
            ex.showAnsw = !ex.showAnsw;
            $rootScope.$emit('show_question_answer', ex.qStr, ex.showAnsw);
        };


        // Object for question 1 1
        $scope.ex1_1 = (function() {
            var ex1_1 = {};
            ex1_1.qStr = '1_1';
            ex1_1.title = '1.1. The sentences on the right follow those on the left. Which sentence goes with which?';
            ex1_1.data = [
                { id: 1, text : "Please don't make so much noise.",           ca: "I'm trying to work." },
                { id: 2, text : "I need to eat something soon.",              ca: "I'm getting hungry." },
                { id: 3, text : "I don't have anywhere to live right now.",   ca: "I'm looking for an apartment." },
                { id: 4, text : "We need to leave soon.",                     ca: "It's getting late." },
                { id: 5, text : "They don't need their car any more.",        ca: "They're trying to sell it." },
                { id: 6, text : "Things are not so good at work.",            ca: "The company is losing money." },
                { id: 7, text : "It isn't true what they said.",              ca: "They're lying." },
                { id: 8, text : "We're going to get wet",                     ca: "It's starting to rain." }
            ];
            ex1_1.prepare = function() {

                ex1_1.questions = $scope.unorderArray(ex1_1.data);
                ex1_1.allAnswers = $scope.unorderArray(ex1_1.data);
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
            ex1_1.answer = answer_ex;
            return ex1_1;
        })();


        // Object for question 1 2
        $scope.ex1_2 = (function() {
            var ex1_2 = {};
            ex1_2.qStr = '1_2';
            ex1_2.title = '1.2. Complete the conversations.';
            ex1_2.data = [
                { id: 1, ca: ["What is he doing", "What's he doing"] },
                { id: 2, ca: ["What is he studying", "What's he studying"] },
                { id: 3, ca: ["Is he enjoying"] },
                { id: 4, ca: ["is your new job going", "'s your new job going"] },
                { id: 5, ca: ["it is getting", "it's getting"] },
                { id: 6, ca: ["he is not enjoying", "he isn't enjoying"] },
                { id: 7, ca: ["he is beginning", "he's beginning"] },
            ];
            ex1_2.prepare = function() {

                ex1_2.questions = angular.copy(ex1_2.data);
                ex1_2.showCorr = false;
                ex1_2.showAnsw = false;
            };
            ex1_2.correct = correct_ex;
            ex1_2.answer = answer_ex;
            return ex1_2;
        })();


        // Object for question 1 3
        $scope.ex1_3 = (function() {
            var ex1_3 = {};
            ex1_3.qStr = '1_3';
            ex1_3.title = '1.3. Put the verb into the correct form, positive (I\'m doing etc.) or negative (I\'m not doing etc.).';
            ex1_3.data = [
                { id: 1,  ca: ["I am trying", "I'm trying"] },
                { id: 2,  ca: ["It is not raining", "It isn't raining"] },
                { id: 3,  ca: ["I'm not listening", "I am not listening"] },
                { id: 4,  ca: ["She's having", "She is having"] },
                { id: 5,  ca: ["I'm not eating", "I am not eating"] },
                { id: 6,  ca: ["He's learning", "He is learning"] },
                { id: 7,  ca: ["They aren't speaking", "They are not speaking"] },
                { id: 8,  ca: ["I'm getting", "I am getting"] },
                { id: 9,  ca: ["isn't working", "is not working", "'s not working"] },
                { id: 10, ca: ["I'm looking", "I am looking"] }
            ];
            ex1_3.prepare = function() {

                ex1_3.questions = angular.copy(ex1_3.data);
                ex1_3.showCorr = false;
                ex1_3.showAnsw = false;
            };
            ex1_3.correct = correct_ex;
            ex1_3.answer = answer_ex;
            return ex1_3;
        })();


        // Object for question 1 4
        $scope.ex1_4 = (function() {
            var ex1_4 = {};
            ex1_4.qStr = '1_4';
            ex1_4.title = '1.4. Complete the sentences using the following verbs:';
            ex1_4.data = [
                { id: 1,  ca: ["is increasing"] },
                { id: 2,  ca: ["is changing"] },
                { id: 3,  ca: ["is getting", "'s getting"] },
                { id: 4,  ca: ["is rising"] },
                { id: 5,  ca: ["is starting"] }
            ];
            ex1_4.prepare = function() {

                ex1_4.questions = angular.copy(ex1_4.data);
                ex1_4.showCorr = false;
                ex1_4.showAnsw = false;
            };
            ex1_4.correct = correct_ex;
            ex1_4.answer = answer_ex;
            return ex1_4;
        })();






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
        $scope.ex1_3.prepare();
        $scope.ex1_4.prepare();


    }]
);
