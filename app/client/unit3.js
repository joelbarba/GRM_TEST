console.log('loading 3');
// ex = exercice
// ca = correct answer
// ua = user answer
// q = question


angular.module('mainModule').controller('Unit3Ctrl', ['$scope', '$rootScope', 'CorrectExFactory', 'AnswerExFactory',
  function($scope, $rootScope, CorrectExFactory, AnswerExFactory) {

console.log('exe3');

    // Object for question 3_1
    $scope.ex3_1 = (function() {
      var ex3_1 = {};
      ex3_1.qStr = '3_1';
      ex3_1.title = '3.1. Are the underlined verbs right or wrong? Write the correct form when they are wrong.';
      ex3_1.data = [
        { ca: [""],                               t1: "1. Water ",                                 t2:"boils",                   t3:" at 100 degrees Celsius." },
        { ca: ["is boiling", "'s boiling"],       t1: "2. The water ",                             t2:"boils",                   t3:". Can you turn it off?" },
        { ca: ["is trying",  "'s trying"],        t1: "3. Look! That man ",                        t2:"tries",                   t3:" to open the door of your car." },
        { ca: ["are they talking"],               t1: "4. Can you hear those people? What ",       t2:"do they talk",            t3:" about?" },
        { ca: [""],                               t1: "5. The moon ",                              t2:"goes",                    t3:" round the earth in about 27 days." },
        { ca: ["It is getting", "It's getting"],  t1: "6. I must go now. ",                        t2:"It gets",                 t3:" late." },
        { ca: [""],                               t1: "7. ",                                       t2:"I usually go",            t3:" to work by car." },
        { ca: ["I am coming", "I'm coming"],      t1: "8. 'Hurry up! It's time to leave.' 'OK, ",  t2:"I come",                  t3:".'" },
        { ca: ["are you getting"],                t1: "9. I hear you've got a new job. How ",      t2:"do you get",              t3:" on?" },
        { ca: ["He always gets"],                 t1: "10. Paul is never late. ",                  t2:"He's always getting",     t3:" to work on time." },
        { ca: [""],                               t1: "11. They don't get on well. ",              t2:"They're always arguing",  t3:"." }
      ];
      ex3_1.prepare = function() {
        ex3_1.q = angular.copy(ex3_1.data);
        ex3_1.showCorr = false;
        ex3_1.showAnsw = false;
      };
      ex3_1.correct = CorrectExFactory;
      ex3_1.answer = AnswerExFactory;
      return ex3_1;
    })();

    // Object for question 3_2
    $scope.ex3_2 = (function() {
      var ex3_2 = {};
      ex3_2.qStr = '3_2';
      ex3_2.title = '3.2. Put the verb into the correct form, present continuous or present simple.';
      ex3_2.data = [
        { t1: "1. Let’s go out. ",                                hint: "(it / not / rain)",      t2: " now." },
        { t1: "2. Julia is very good at languages. ",             hint: "(she / speak)",          t2: " four languages very well." },
        { t1: "3. Hurry up! ",                                    hint: "(everybody / wait)",     t2: " for you." },
        { t1: "4. '",                                             hint: "(you / listen)",         t2: " to the radio?' 'No, you can turn it off.'" },
        { t1: "5. '",                                             hint: "(you / listen)",         t2: " to the radio every day?' 'No, just occasionally.'" },
        { t1: "6. The River Nile ",                               hint: "(flow)",                 t2: " into the Mediteranean." },
        { t1: "7. The river ",                                    hint: "(flow)",                 t2: " very fast today - much faster than usual." },
        { t1: "8. ",                                              hint: "(we / usually / grow)",  t2: " vegetables in our garden" },
        { t1: ", but this year",                                  hint: "(we / not / grow)",      t2: " any." },
        { t1: "9. A: How's your English? B: Not bad. I think",    hint: "(it / improve)",         t2: "slowly." },
        { t1: "10. Rachel is in New York right now.",             hint: "(she / stay)",           t2: "at the Park Hotel." },
        { t1: "",                                                 hint: "(she / always / stay)",  t2: "there when she's in New York." },
        { t1: "11. Can we stop walking soon?",                    hint: "(I / start)",            t2: "to feel tired." },
        { t1: "12. A: Can you drive? B: ",                        hint: "(I / learn)",            t2: "" },
        { t1: "My father",                                    hint: "(teach)",                t2: "me." },
        { t1: "13. Normally",                                     hint: "(I / finish)",           t2: "work at five" },
        { t1: ", but this week",                                  hint: "(I / work)",             t2: "until six to earn a little more money." },
        { t1: "14. My parents",                                   hint: "(live)",                 t2: "in Manchester. They were born there and have never lived anywhere else." },
        { t1: "Where",                                            hint: "(your parents / live)",  t2: "?" },
        { t1: "15. Sonia",                                        hint: "(look)",                 t2: "for a place to live." },
        { t1: "",                                                 hint: "(she / stay)",           t2: "with her sister until she finds somewhere." },
        { t1: "16. A: What",                                      hint: "(your brother / do)",    t2: "?" },
        { t1: "B: He's an architect, but",                        hint: "(he / not / work)",      t2: "at the moment." },
        { t1: "17. [at a party]",                                 hint: "(I usually enjoy)",      t2: "parties" },
        { t1: ", but",                                            hint: "(I / not / enjoy)",      t2: "this one very much." }
      ];
      ex3_2.data[0].ca  = ["It is not raining", "It's not raining", "It isn't raining"];
      ex3_2.data[1].ca  = ["She speaks"];
      ex3_2.data[2].ca  = ["Everybody's waiting", "Everybody is waiting"];
      ex3_2.data[3].ca  = ["Are you listening"];
      ex3_2.data[4].ca  = ["Do you listen"];
      ex3_2.data[5].ca  = ["flows"];
      ex3_2.data[6].ca  = ["is flowing", "'s flowing"];
      ex3_2.data[7].ca  = ["We usually grow"];
      ex3_2.data[8].ca  = ["we are not growing", "we aren't growing", "we're not growing"];
      ex3_2.data[9].ca  = ["it is improving", "it's improving"];
      ex3_2.data[10].ca = ["She is staying", "She's staying"];
      ex3_2.data[11].ca = ["She always stays"];
      ex3_2.data[12].ca = ["I am starting", "I'm starting"];
      ex3_2.data[13].ca = ["I am learning", "I'm learning"];
      ex3_2.data[14].ca = ["is teaching", "'s teaching"];
      ex3_2.data[15].ca = ["I finish"];
      ex3_2.data[16].ca = ["I am working", "I'm working"];
      ex3_2.data[17].ca = ["live"];
      ex3_2.data[18].ca = ["do your parents live"];
      ex3_2.data[19].ca = ["is looking", "'s looking"];
      ex3_2.data[20].ca = ["She is staying", "She's staying"];
      ex3_2.data[21].ca = ["does your brother do"];
      ex3_2.data[22].ca = ["he is not working", "he's not working", "he isn't working"];
      ex3_2.data[23].ca = ["I usually enjoy"];
      ex3_2.data[24].ca = ["I am not enjoying", "I'm not enjoying"];

      ex3_2.prepare = function() {
        ex3_2.q = angular.copy(ex3_2.data);
        ex3_2.showCorr = false;
        ex3_2.showAnsw = false;
      };
      ex3_2.correct = CorrectExFactory;
      ex3_2.answer = AnswerExFactory;
      return ex3_2;
    })();

    // Object for question 3_3
    $scope.ex3_3 = (function() {
      var ex3_3 = {};
      ex3_3.qStr = '3_3';
      ex3_3.title = '3.3. Finish B\'s sentences. Use always -ing.';
      ex3_3.data = [
        { t1: "1. A: I've lost my phone again.",                  t2: "B: Not again!" },
        { t1: "2. A: The car has broken down again.",             t2: "B: That car is useless. It" },
        { t1: "3. A: Look! You've made the same mistake again,",  t2: "B: Oh no, not again! I" },
        { t1: "4. A: Oh, I've forgotten my glasses again.",       t2: "B: Typical!" }
      ];
      ex3_3.data[0].ca = ["You are always losing your phone",       "You're always losing your phone"];
      ex3_3.data[1].ca = ["is always breaking down",                "'s always breaking down"];
      ex3_3.data[2].ca = ["am always making the same mistake",      "'m always making the same mistake"];
      ex3_3.data[3].ca = ["You are always forgetting your glasses", "You're always forgetting your glasses"];

      ex3_3.prepare = function() {
        ex3_3.q = angular.copy(ex3_3.data);
        ex3_3.showCorr = false;
        ex3_3.showAnsw = false;
      };
      ex3_3.correct = CorrectExFactory;
      ex3_3.answer = AnswerExFactory;
      return ex3_3;
    })();


    $scope.ex3_1.prepare();
    $scope.ex3_2.prepare();
    $scope.ex3_3.prepare();

  }]
);
