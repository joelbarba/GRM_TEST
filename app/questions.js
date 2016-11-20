var ngApp = angular.module('myApp');

// -------------------------------------------------------------------------
// Unit 1
// -------------------------------------------------------------------------
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


// -------------------------------------------------------------------------
// Unit 2
// -------------------------------------------------------------------------
ngApp.factory('Unit2', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [], unitNum: 2 };

    unit.ex[1] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 1;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "Complete the sentences using the following verbs:";
      ex.data = [
        { id: 1,  ca: ["speaks"],   t1: "Tanya",                 t2: "German very well."                 },
        { id: 2,  ca: ["drink"],    t1: "I don't often",         t2: "coffee."                           },
        { id: 3,  ca: ["opens"],    t1: "The swimming pool",     t2: "at 7.30 every morning."            },
        { id: 4,  ca: ["causes"],   t1: "Bad driving",           t2: "many accidents."                   },
        { id: 5,  ca: ["live"],     t1: "My parents",            t2: "in a very small flat."             },
        { id: 6,  ca: ["take"],     t1: "The Olympic Games",     t2: "place every four years."           },
        { id: 7,  ca: ["connects"], t1: "The Panama Canal",      t2: "the Atlantic and Pacific Oceans."  }
      ];

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

    unit.ex[2] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 2;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += 'Put the verb into the correct form.';
      ex.data = [
        { ca: ["doesn't drink", "does not drink"], t1: "Julie",                        hint: "(not / drink)",        t2:"tea very often."             },
        { ca: ["do the banks close"],              t1: "What time",                    hint: "(the banks / close)",  t2:"here?."                      },
        { ca: ["don't use", "do not use"],         t1: "I've got a car, but I",        hint: "(not / use)",          t2:"it much."                    },
        { ca: ["does Ricardo come"],               t1: "Where",                        hint: "(Ricardo / come)",     t2:"from? From Cuba."            },
        { ca: ["do you do"],                       t1: "What",                         hint: "(you / do)",           t2:"? I'm an electrician."       },
        { ca: ["takes"],                           t1: "It",                           hint: "(take)",               t2:"me an hour to get to work."  },
        { ca: ["does it take"],                    t1: "How long", fix: true,             hint: "(it / take)",          t2:"you?."                       },
        { ca: ["does this word mean"],             t1: "Look at this sentence. What",  hint: "(this word / mean)",   t2:"?"                           },
        { ca: ["doesn't do", "does not do"],       t1: "David isn't very fit. He",     hint: "(not / do)",           t2:"any sport."                  },
      ];

      ex.prepare = function() {
        // ex.q = angular.copy(ex.data);
        ex.q = ArrayHelper.setQNum(ArrayHelper.unorderArray(ex.data));
        // ex.q = ArrayHelper.setQNum(ex.data);
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
      ex.title += "Use the following verbs to complete the sentences. Sometimes you need the negative:";
      ex.data = [
        { ca: ["goes"],                                 t1: "The earth",             t2:"round the sun." },
        { ca: ["doesn't grow", "does not"],             t1: "Rice",                  t2:"in Britain." },
        { ca: ["rises"],                                t1: "The sun",               t2:"in the east." },
        { ca: ["make"],                                 t1: "Bees",                  t2:"honey" },
        { ca: ["don't eat", "do not eat"],              t1: "Vegetarians",           t2:"meat." },
        { ca: ["doesn't believe", "does not believe"],  t1: "An atheist",            t2:"in god." },
        { ca: ["translates"],                           t1: "An interpreter",        t2:"from one language into another." },
        { ca: ["don't tell", "do not tell"],            t1: "Liars are people who",  t2:"the truth." },
        { ca: ["flows"],                                t1: "The River Amazon",      t2:"into the Atlantic Ocean." }
      ];

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
      ex.title += "You ask Lisa questions about herself and her family. Write the questions.";
      ex.data = [
        { ca: ["How often do you play tennis"],       t1: "You know that Lisa plays tennis. You want to know how often. Ask her.",                 t3:"?" },
        { ca: ["Does your sister play tennis"],       t1: "Perhaps Lisa's sister plays tennis too. You want to know. Ask Lisa.",                   t3:"?", hint: "your sister" },
        { ca: ["Which newspaper do you read"],        t1: "You know that Lisa reads a newspaper every day. You want to know which one. Ask her.",  t3:"?" },
        { ca: ["What does your brother do"],          t1: "You know that Lisa's brother works. You want to know what he does. Ask Lisa.",          t3:"?" },
        { ca: ["How often do you go to the cinema"],  t1: "You know that Lisa goes to the cinema a lot. You want to know how often. Ask her.",     t3:"?" },
        { ca: ["Where do your grandparents live"],    t1: "You don't know where Lisa's grandparents live. You want to know. Ask Lisa.",            t3:"?" }
      ];

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

    unit.ex[5] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 5;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "Complete using the following:.";
      ex.data = [
        { ca: ["I suggest"],    t1: "Mr Evans is not in the office today.", t2:"you try calling him tomorrow." },
        { ca: ["I promise"],    t1: "I won't tell anybody what you said.", t2:"." },
        { ca: ["I insist"],     t1: "(In a restaurant) You must let me pay for the meal.", t2:"." },
        { ca: ["I apologise"],  t1: "", t2:"for what I did. It won't happen again." },
        { ca: ["I recommend"],  t1: "The new restaurant in Hill Street is very good.", t2:"it." }
      ];

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


// -------------------------------------------------------------------------
// Unit 3
// -------------------------------------------------------------------------
ngApp.factory('Unit3', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [], unitNum: 3 };

    unit.ex[1] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 1;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "Are the underlined verbs right or wrong? Write the correct form when they are wrong..";
      ex.data = [
        { ca: [""],                               t1: "Water ",                                 t2:"boils",                   t3:" at 100 degrees Celsius." },
        { ca: ["is boiling", "'s boiling"],       t1: "The water ",                             t2:"boils",                   t3:". Can you turn it off?" },
        { ca: ["is trying",  "'s trying"],        t1: "Look! That man ",                        t2:"tries",                   t3:" to open the door of your car." },
        { ca: ["are they talking"],               t1: "Can you hear those people? What ",       t2:"do they talk",            t3:" about?" },
        { ca: [""],                               t1: "The moon ",                              t2:"goes",                    t3:" round the earth in about 27 days." },
        { ca: ["It is getting", "It's getting"],  t1: "I must go now. ",                        t2:"It gets",                 t3:" late." },
        { ca: [""],                               t1: "",                                       t2:"I usually go",            t3:" to work by car." },
        { ca: ["I am coming", "I'm coming"],      t1: "'Hurry up! It's time to leave.' 'OK, ",  t2:"I come",                  t3:".'" },
        { ca: ["are you getting"],                t1: "I hear you've got a new job. How ",      t2:"do you get",              t3:" on?" },
        { ca: ["He always gets"],                 t1: "Paul is never late. ",                   t2:"He's always getting",     t3:" to work on time." },
        { ca: [""],                               t1: "They don't get on well. ",               t2:"They're always arguing",  t3:"." }
      ];

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

    unit.ex[2] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 2;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "Put the verb into the correct form, present continuous or present simple.";
      ex.data = [
        { t1: "Let’s go out. ",                                hint: "(it / not / rain)",      t2: " now." },
        { t1: "Julia is very good at languages. ",             hint: "(she / speak)",          t2: " four languages very well." },
        { t1: "Hurry up! ",                                    hint: "(everybody / wait)",     t2: " for you." },
        { t1: "'",                                             hint: "(you / listen)",         t2: " to the radio?' 'No, you can turn it off.'" },
        { t1: "'",                                             hint: "(you / listen)",         t2: " to the radio every day?' 'No, just occasionally.'" },
        { t1: "The River Nile ",                               hint: "(flow)",                 t2: " into the Mediteranean." },
        { t1: "The river ",                                    hint: "(flow)",                 t2: " very fast today - much faster than usual." },
        { t1: "",                                              hint: "(we / usually / grow)",  t2: " vegetables in our garden" },
        { fix: true, t1: ", but this year",                    hint: "(we / not / grow)",      t2: " any." },
        { t1: "A: How's your English? B: Not bad. I think",    hint: "(it / improve)",         t2: "slowly." },
        { t1: "Rachel is in New York right now.",              hint: "(she / stay)",           t2: "at the Park Hotel." },
        { fix: true, t1: "",                                   hint: "(she / always / stay)",  t2: "there when she's in New York." },
        { t1: "Can we stop walking soon?",                     hint: "(I / start)",            t2: "to feel tired." },
        { t1: "A: Can you drive? B: ",                         hint: "(I / learn)",            t2: "" },
        { fix: true, t1: "My father",                          hint: "(teach)",                t2: "me." },
        { t1: "Normally",                                      hint: "(I / finish)",           t2: "work at five" },
        { fix: true, t1: ", but this week",                    hint: "(I / work)",             t2: "until six to earn a little more money." },
        { t1: "My parents",                                    hint: "(live)",                 t2: "in Manchester. They were born there and have never lived anywhere else." },
        { fix: true, t1: "Where",                              hint: "(your parents / live)",  t2: "?" },
        { t1: "Sonia",                                         hint: "(look)",                 t2: "for a place to live." },
        { fix: true, t1: "",                                   hint: "(she / stay)",           t2: "with her sister until she finds somewhere." },
        { t1: "A: What",                                       hint: "(your brother / do)",    t2: "?" },
        { fix: true, t1: "B: He's an architect, but",          hint: "(he / not / work)",      t2: "at the moment." },
        { t1: "[at a party]",                                  hint: "(I usually enjoy)",      t2: "parties" },
        { fix: true, t1: ", but",                              hint: "(I / not / enjoy)",      t2: "this one very much." }
      ];
      ex.data[0].ca  = ["It is not raining", "It's not raining", "It isn't raining"];
      ex.data[1].ca  = ["She speaks"];
      ex.data[2].ca  = ["Everybody's waiting", "Everybody is waiting"];
      ex.data[3].ca  = ["Are you listening"];
      ex.data[4].ca  = ["Do you listen"];
      ex.data[5].ca  = ["flows"];
      ex.data[6].ca  = ["is flowing", "'s flowing"];
      ex.data[7].ca  = ["We usually grow"];
      ex.data[8].ca  = ["we are not growing", "we aren't growing", "we're not growing"];
      ex.data[9].ca  = ["it is improving", "it's improving"];
      ex.data[10].ca = ["She is staying", "She's staying"];
      ex.data[11].ca = ["She always stays"];
      ex.data[12].ca = ["I am starting", "I'm starting"];
      ex.data[13].ca = ["I am learning", "I'm learning"];
      ex.data[14].ca = ["is teaching", "'s teaching"];
      ex.data[15].ca = ["I finish"];
      ex.data[16].ca = ["I am working", "I'm working"];
      ex.data[17].ca = ["live"];
      ex.data[18].ca = ["do your parents live"];
      ex.data[19].ca = ["is looking", "'s looking"];
      ex.data[20].ca = ["She is staying", "She's staying"];
      ex.data[21].ca = ["does your brother do"];
      ex.data[22].ca = ["he is not working", "he's not working", "he isn't working"];
      ex.data[23].ca = ["I usually enjoy"];
      ex.data[24].ca = ["I am not enjoying", "I'm not enjoying"];

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

    unit.ex[3] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 3;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "Finish B's sentences. Use always -ing.";
      ex.data = [
        { t1: "A: I've lost my phone again.",                  t2: "B: Not again!" },
        { t1: "A: The car has broken down again.",             t2: "B: That car is useless. It" },
        { t1: "A: Look! You've made the same mistake again,",  t2: "B: Oh no, not again! I" },
        { t1: "A: Oh, I've forgotten my glasses again.",       t2: "B: Typical!" }
      ];
      ex.data[0].ca = ["You are always losing your phone",       "You're always losing your phone"];
      ex.data[1].ca = ["is always breaking down",                "'s always breaking down"];
      ex.data[2].ca = ["am always making the same mistake",      "'m always making the same mistake"];
      ex.data[3].ca = ["You are always forgetting your glasses", "You're always forgetting your glasses"];

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


/*
// -------------------------------------------------------------------------
// Unit 9999
// -------------------------------------------------------------------------
ngApp.factory('Unit9999', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [], unitNum: 9999 };

    unit.ex[888] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 888;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "xxxxxxxxxxxxxxxxx.";
      ex.data = [
      { t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." },
      { t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." },
      { t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." },
      { t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." },
      { t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." },
      { t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." },
      { t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." },
      { t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." },
      { t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." },
      { fix: true, t1: "xxxxxxxxxxx ",   hint: "xxxxxxxx",   t2: " xxxxxxxxxx." }
      ];
      ex.data[0].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];
      ex.data[1].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];
      ex.data[2].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];
      ex.data[3].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];
      ex.data[4].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];
      ex.data[5].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];
      ex.data[6].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];
      ex.data[7].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];
      ex.data[8].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];
      ex.data[9].ca  = ["xxxxxxxxxx", "xxxxxxxxx"];

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

    unit.ex[888] = (function() {}());
    unit.ex[888] = (function() {}());
    unit.ex[888] = (function() {}());
    unit.ex[888] = (function() {}());

    unit.refreshPage = function() {
      unit.ex.forEach(function(ex, num) {
        ex.isExpanded = (num === Teacher.getCurrentQuestion());
      });
    };
    $rootScope.$on('refresh_page', unit.refreshPage);

    Teacher.iniScore(unit);

    return unit;
}]);

 */
