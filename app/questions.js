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



// -------------------------------------------------------------------------
// Unit 4
// -------------------------------------------------------------------------
ngApp.factory('Unit4', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [], unitNum: 4 };

    unit.ex[1] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 1;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "Put the verb into the correct form, present continuous or present simple.";
      ex.data = [
        { t1: "Are you hungry? ",                          hint: "(you / want)",   t2: "something to eat?" },
        { t1: "Don't put the dictionary away. ",           hint: "(I / use)",      t2: " it." },
        { t1: "Don't put the dictionary away. ",           hint: "(I / need)",     t2: " it." },
        { t1: "Who is that man? What ",                    hint: "(he / want)",    t2: "?" },
        { t1: "Who is that man? Why ",                     hint: "(he / look)",    t2: " at us?" },
        { t1: "Alan says he's 80 years old, but nobody ",  hint: "(believe)",      t2: " him." },
        { t1: "She told me her name, but ",                hint: "(I / not / remember)",   t2: " it now." },
        { t1: "",                                          hint: "(I / think)",        t2: " of selling my car. Would you be interested in buying it?" },
        { t1: "",                                          hint: "(I / think)",        t2: " you should sell your car." },
        { fix: true, t1: "",                               hint: "(you / not / use)",  t2: " it very often." },
        { t1: "Air ",                                      hint: "(consist)",          t2: " mainly of nitrogen and oxygen." }
      ];
      ex.data[0].ca  = ["Do you want"];
      ex.data[1].ca  = ["I'm using", "I am using"];
      ex.data[2].ca  = ["I need"];
      ex.data[3].ca  = ["does he want"];
      ex.data[4].ca  = ["is he looking"];
      ex.data[5].ca  = ["believes"];
      ex.data[6].ca  = ["I don't remember", "I do not remember", "I can't remember", "I cannot remember"];
      ex.data[7].ca  = ["I'm thinking", "I am thinking"];
      ex.data[8].ca  = ["I think"];
      ex.data[9].ca  = ["You don't use", "You do not use"];
      ex.data[10].ca  = ["consists"];

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
      ex.title += "Use the words in brackets to make sentences. (You should also study Unit 3 before you do this exercise)";
      ex.data = [
      { ca: ["You do not seem very happy today", "You don't seem very happy today"] },
      { ca: ["What are you doing?"] },
      { ca: ["I'm thinking", "I am thinking"] },
      { ca: ["Who does this umbrella belong to?"] },
      { ca: ["The dinner smells good"] },
      { ca: ["Is anybody sitting there?"] },
      { ca: ["These gloves don't fit me", "These gloves do not fit me"] }
      ];

      ex.prepare = function() {
        ex.q = angular.copy(ex.data);
        // ex.q = ArrayHelper.setQNum(ArrayHelper.unorderArray(ex.data));
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
      ex.title += "Are the underlined verbs right or wrong? Correct them where necessary.";
      ex.data = [
      { t1: "Nicky ",    t2: "is thinking",         t3: " of giving up her job." },
      { t1: "",          t2: "Are you believing",   t3: " in God?" },
      { t1: "",          t2: "I'm feeling",         t3: " hungry. Is there anything to eat?" },
      { t1: "This sauce is great. ",    t2: "It's tasting",   t3: " really good." },
      { t1: "",          t2: "I'm thinking ",       t3: "this is your key. Am I right?" }
      ];
      ex.data[0].ca  = [""];
      ex.data[1].ca  = ["Do you believe"];
      ex.data[2].ca  = ["", "I feel"];
      ex.data[3].ca  = ["It tastes"];
      ex.data[4].ca  = ["I think"];

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
      ex.title += "Complete the sentences using the most suitable form of be. Use am/is/are being (continuous) where possible; otherwise use am/is/are (simple).";
      ex.data = [
      { t1: "I can't understand why ",                     t2: " so selfish. He isn't usually like that." },
      { t1: "Sarah ",                                      t2: " very nice to me at the moment. I wonder why." },
      { t1: "You'll like Sophie when you meet her. She ",  t2: " very nice." },
      { t1: "You're usually very patient, so why ",        t2: " so unreasonable about waiting ten more minutes?" },
      { t1: "Why isn't Steve at work today? ",             t2: " ill?" }
      ];
      ex.data[0].ca  = ["he is being", "he's being"];
      ex.data[1].ca  = ["'s being", "is being"];
      ex.data[2].ca  = ["'s", "is"];
      ex.data[3].ca  = ["are you being"];
      ex.data[4].ca  = ["Is he"];

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
// Unit 5
// -------------------------------------------------------------------------
ngApp.factory('Unit5', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [], unitNum: 5 };

    unit.ex[1] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 1;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "Read what Laura says about a typical working day:";
      ex.data = [
      { t1: "",      t2: " at 7 o'clock.." },
      { t1: "She ",  t2: " a big breakfast." },
      { t1: "She ",  t2: "." },
      { t1: "It ",   t2: " to get to work." },
      { t1: "",      t2: " at 8:45." },
      { t1: "",      t2: " lunch." },
      { t1: "",      t2: " at 5 o'clock." },
      { t1: "",      t2: "tired " },
      { fix: true, t1: "when ",   t2: " home." },
      { t1: "",      t2: " a meal yesterday evening." },
      { t1: "",      t2: " out yesterday evening." },
      { t1: "",      t2: " at 11 o'clock." },
      { t1: "",      t2: " well last night." }
      ];
      ex.data[0].ca  = ["She got up"];
      ex.data[1].ca  = ["had"];
      ex.data[2].ca  = ["walked to work"];
      ex.data[3].ca  = ["took her half an hour", "took her about half an hour"];
      ex.data[4].ca  = ["She started work"];
      ex.data[5].ca  = ["She didn't have", "She didn't have any", "She did not have", "She did not have any", "She didn't eat", "She didn't eat any lunch", "She did not eat", "She did not eat any lunch"];
      ex.data[6].ca  = ["She finished work"];
      ex.data[7].ca  = ["She was"];
      ex.data[8].ca  = ["she got"];
      ex.data[9].ca  = ["She cooked"];
      ex.data[10].ca  = ["She didn't go", "She did not go"];
      ex.data[11].ca  = ["She went to bed"];
      ex.data[12].ca  = ["She slept"];

      ex.prepare = function() {
        ex.q = ArrayHelper.setQNum(ex.data);
        // ex.q = ArrayHelper.setQNum(ArrayHelper.unorderArray(ex.data));
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
      ex.title += "Complete the sentences using the following verbs in the correct form:";
      ex.data = [
      { t1: "Mozart ",   t2: " more than 600 pieces of music." },
      { t1: "'How did you learn to drive?' 'My father ",   t2: " me.'" },
      { t1: "We couldn't afford to keep our car, so we ",   t2: " it." },
      { t1: "Dave ",   t2: " down the stairs this morning " },
      { fix: true, t1: "and ",   t2: " his leg." },
      { t1: "Joe  ",   t2: " the ball to Sue, " },
      { fix: true, t1: "who ",   t2: " it." },
      { t1: "Ann ",   t2: " a lot of money yesterday." },
      { fix: true, t1: "She",   t2: " a dress " },
      { fix: true, t1: "which ",   t2: " £100." }
      ];
      ex.data[0].ca  = ["wrote"];
      ex.data[1].ca  = ["taught"];
      ex.data[2].ca  = ["sold"];
      ex.data[3].ca  = ["fell"];
      ex.data[4].ca  = ["hurt"];
      ex.data[5].ca  = ["threw"];
      ex.data[6].ca  = ["caught"];
      ex.data[7].ca  = ["spent"];
      ex.data[8].ca  = ["bought"];
      ex.data[9].ca  = ["cost"];

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
      ex.title += "You ask James about his holiday. Write your questions.";
      ex.data = [
      { t1: "A: Where ",   t2: "?" },
      { t1: "A: How ",     t2: "? By car?" },
      { t1: "A: It's a long way to drive. How long ", t2: " to get to Denver?" },
      { t1: "A: Where ",   t2: "? In hotels?" },
      { t1: "A: ",         t2: " good?", hint: "(weather)" },
      { t1: "A: ",         t2: " the Grand Canyon?" }
      ];
      ex.data[0].ca  = ["did you go"];
      ex.data[1].ca  = ["did you travel", "did you go"];
      ex.data[2].ca  = ["did it take", "did it take you"];
      ex.data[3].ca  = ["did you stay"];
      ex.data[4].ca  = ["Was the weather"];
      ex.data[5].ca  = ["Did you go to", "Did you see", "Did you visit"];

      ex.prepare = function() {
        ex.q = angular.copy(ex.data);
        // ex.q = ArrayHelper.setQNum(ArrayHelper.unorderArray(ex.data));
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
      ex.title += "Complete the sentences. Put the verb into the correct form, positive or negative.";
      ex.data = [
      { t1: "It was warm, so I ",   hint: "(took)",   t2: " off my coat." },
      { t1: "The film wasn't very good. I ",   hint: "(enjoy)",   t2: " it much." },
      { t1: "I knew Sarah was busy, so I ",   hint: "(disturb)",   t2: " her." },
      { t1: "We were very tired, so we ",   hint: "(leave)",   t2: " the party early." },
      { t1: "The bed was very uncomfortable. I ",   hint: "(sleep)",   t2: " well." },
      { t1: "The window was open and a bird ",   hint: "(fly)",   t2: " into the room." },
      { t1: "The hotel wasn’t very expensive. It ",   hint: "(cost)",   t2: " much to stay there." },
      { t1: "I was in a hurry, so I ",   hint: "(have)",   t2: " time to phone you." },
      { t1: "It was hard carrying the bags. They ",   hint: "(be)",   t2: " very heavy." }
      ];
      ex.data[0].ca  = ["took"];
      ex.data[1].ca  = ["didn't enjoy", "did not enjoy"];
      ex.data[2].ca  = ["didn't disturb", "did not disturb"];
      ex.data[3].ca  = ["left"];
      ex.data[4].ca  = ["didn't sleep", "did not sleep"];
      ex.data[5].ca  = ["flew"];
      ex.data[6].ca  = ["didn't cost", "did not cost"];
      ex.data[7].ca  = ["didn't have", "did not have"];
      ex.data[8].ca  = ["were"];

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
