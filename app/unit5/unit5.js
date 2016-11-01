// 5 = num
// 1 = ex

angular.module('myApp.unit5', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/unit5', {
      templateUrl: 'unit5/unit5.html',
      controller: 'Unit5Ctrl'
    });
  }]).

controller('Unit5Ctrl', ['$scope', '$rootScope', 'CorrectExFactory', 'AnswerExFactory',
  function($scope, $rootScope, CorrectExFactory, AnswerExFactory) {

    console.log('exe5');

    // Object for question 5_1
    $scope.ex5_1 = (function() {
      var ex5_1 = {};
      ex5_1.qStr = '5_1';
      ex5_1.title = '5.1. xxxxxxxxxxxxxxxxxxxxxxxxxx.';
      ex5_1.data = [
        { t1: '1. xxxxxxxxxxx ',    t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' },
        { t1: '2. xxxxxxxxxxx ',    t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' },
        { t1: '3. xxxxxxxxxxx ',    t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' },
        { t1: '4. xxxxxxxxxxx ',    t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' },
        { t1: '5. xxxxxxxxxxx ',    t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' },
        { t1: '6. xxxxxxxxxxx ',    t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' },
        { t1: '7. xxxxxxxxxxx ',    t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' },
        { t1: '8. xxxxxxxxxxx ',    t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' },
        { t1: '9. xxxxxxxxxxx ',    t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' },
        { t1: '10. xxxxxxxxxxx ',   t2: 'xxxxxxxx',   t3: ' xxxxxxxxxx.' }
      ];
      ex5_1.data[0].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];
      ex5_1.data[1].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];
      ex5_1.data[2].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];
      ex5_1.data[3].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];
      ex5_1.data[4].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];
      ex5_1.data[5].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];
      ex5_1.data[6].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];
      ex5_1.data[7].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];
      ex5_1.data[8].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];
      ex5_1.data[9].ca  = ['xxxxxxxxxx', 'xxxxxxxxx'];

      ex5_1.prepare = function() {
        ex5_1.q = angular.copy(ex5_1.data);
        ex5_1.showCorr = false;
        ex5_1.showAnsw = false;
      };
      ex5_1.correct = CorrectExFactory;
      ex5_1.answer = AnswerExFactory;
      return ex5_1;
    })();


    $scope.ex5_1.prepare();
    $scope.ex5_1.prepare();
    $scope.ex5_1.prepare();

  }]
);