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




// -------------------------------------------------------------------------
// Unit 7
// -------------------------------------------------------------------------
ngApp.factory('Unit6', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [], unitNum: 6 };

    unit.ex[1] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 1;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "What were you doing at these times? Write sentences as in the examples. The past continuous is not always necessary (see the second example).";
      ex.data = [
      { t1: "", hint: "(at 8 o'clock yesterday evening)" },
      { t1: "", hint: "(at 5 o'clock last Monday)" },
      { t1: "", hint: "(at 10.15 yesterday morning)" },
      { t1: "", hint: "(at 4.30 this morning)" },
      { t1: "", hint: "(at 7.45 yesterday evening)" },
      { t1: "", hint: "(half an hour ago)" }
      ];
      ex.data[0].ca  = ["Free response"];
      ex.data[1].ca  = ["Free response"];
      ex.data[2].ca  = ["Free response"];
      ex.data[3].ca  = ["Free response"];
      ex.data[4].ca  = ["Free response"];
      ex.data[5].ca  = ["Free response"];

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
      ex.correct = function() {
        ex.q.forEach(function(q) {
          q.correct = true;
        });
        ex.showCorr = true;
        $rootScope.$emit('show_question_result', ex.qStr, ex.showCorr);
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
      ex.title += "Use your own ideas to complete the sentences. Use the past continuous.";
      ex.data = [
      { t1: "Matt phoned while we ",                            t2: "." },
      { t1: "The doorbell rang while I ",                       t2: "." },
      { t1: "The car began to make a strange noise when we ",   t2: "." },
      { t1: "Jessica fell asleep while she ",                   t2: "." },
      { t1: "The television was on, but nobody ",               t2: "." }
      ];
      ex.data[0].ca  = ["Free response"];
      ex.data[1].ca  = ["Free response"];
      ex.data[2].ca  = ["Free response"];
      ex.data[3].ca  = ["Free response"];
      ex.data[4].ca  = ["Free response"];

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
      ex.correct = function() {
        ex.q.forEach(function(q) {
          q.correct = true;
        });
        ex.showCorr = true;
        $rootScope.$emit('show_question_result', ex.qStr, ex.showCorr);
        Teacher.setScore(ex);
      };
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
      ex.title += "Put the verb into the correct form, past continuous or past simple.";
      ex.data = [
      { t1: "I ",   hint: "(see)",   t2: " Sue in town yesterday," },
      { fix: true, t1: "but she",   hint: "(not see)",   t2: " me." },
      { t1: "She ",   hint: "(look)",   t2: " the other way." },

      { t1: "I ",   hint: "(meet)",   t2: " Tom and Jane at the airport a few weeks ago." },
      { t1: "They ",   hint: "(go)",   t2: " to Paris" },
      { fix: true, t1: "and I ",   hint: "(go)",   t2: " to Rome." },
      { t1: "We ",   hint: "(have)",   t2: " a chat " },
      { t1: "while we ",   hint: "(wait)",   t2: " for our flights." },

      { t1: "I ",   hint: "(cycle)",   t2: " home yesterday" },
      { fix: true, t1: " when a man",   hint: "(step)",   t2: " out into the road in front of me." },
      { t1: "I ",   hint: "(go)",   t2: " quite fast, " },
      { fix: true, t1: "but luckily I ",   hint: "(manage)",   t2: " to stop in time " },
      { fix: true, t1: "and ",   hint: "(not / hit)",   t2: " him." }
      ];
      ex.data[0].ca  = ["saw"];
      ex.data[1].ca  = ["didn't see", "did not see"];
      ex.data[2].ca  = ["was looking"];

      ex.data[3].ca  = ["met"];
      ex.data[4].ca  = ["were going"];
      ex.data[5].ca  = ["was going"];
      ex.data[6].ca  = ["had"];
      ex.data[7].ca  = ["were waiting", "waited"];

      ex.data[8].ca  = ["was cycling"];
      ex.data[9].ca  = ["stepped"];
      ex.data[10].ca  = ["was going"];
      ex.data[11].ca  = ["managed"];
      ex.data[12].ca  = ["didn't hit", "did not hit"];

      ex.prepare = function() {
        ex.q = angular.copy(ex.data);
        // ex.q = ArrayHelper.unorderArray(ex.data);
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
      ex.title += "Put the verb into the correct form, past continuous or past simple.";
      ex.data = [
      { t1: "Jenny ",   hint: "(wait)",   t2: " for me " },
      { fix: true, t1: "when I ",   hint: "(arrive)",   t2: "." },
      { t1: "'What ",   hint: "(you / do)",   t2: " at this time yesterday?' 'I was asleep.'" },
      { t1: "'",   hint: "(you / go)",   t2: " out last night?' 'No, I was too tired'." },
      { t1: "How fast ",   hint: "(you / drive)",   t2: " when the accident " },
      { fix: true, t1: "",   hint: "(happen)",   t2: "?" },
      { t1: "Sam ",   hint: "(take)",   t2: " a picture of me " },
      { fix: true, t1: "while I ",   hint: "(not / look)",   t2: "." },
      { t1: "We were in a very difficult position. We ",   hint: "(not / know)",   t2: " what to do." },
      { t1: "I haven't seen Alan for ages. When I last ",   hint: "(see)",   t2: " him, " },
      { fix: true, t1: "he ",   hint: "(try)",   t2: " to find a job." },
      { t1: "I ",   hint: "(walk)",   t2: " along the street " },
      { fix: true, t1: "when suddenly I ",   hint: "(hear)",   t2: " footsteps behind me." },
      { fix: true, t1: "Somebody ",   hint: "(follow)",   t2: " me." },
      { fix: true, t1: "I ",   hint: "(start)",   t2: " to run." },
      { t1: "When I was young, I ",   hint: "(want)",   t2: " to be a pilot." },
      { t1: "Last night I ",   hint: "(drop)",   t2: " a plate " },
      { fix: true, t1: "when I ",   hint: "(do)",   t2: " the washing-up." },
      { fix: true, t1: "Fortunately it ",   hint: "(not / break)",   t2: "." }
      ];
      ex.data[0].ca  = ["was waiting"];
      ex.data[1].ca  = ["arrived"];
      ex.data[2].ca  = ["were you doing"];
      ex.data[3].ca  = ["Did you go"];
      ex.data[4].ca  = ["were you driving"];
      ex.data[5].ca  = ["happened"];
      ex.data[6].ca  = ["took"];
      ex.data[7].ca  = ["wasn't looking", "was not looking"];
      ex.data[8].ca  = ["didn't know", "did not know"];
      ex.data[9].ca  = ["saw"];
      ex.data[10].ca  = ["was trying"];
      ex.data[11].ca  = ["was walking"];
      ex.data[12].ca  = ["heard"];
      ex.data[13].ca  = ["was following"];
      ex.data[14].ca  = ["started"];
      ex.data[15].ca  = ["wanted"];
      ex.data[16].ca  = ["dropped"];
      ex.data[17].ca  = ["was doing"];
      ex.data[18].ca  = ["didn't break", "did not break"];

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
// Unit 7
// -------------------------------------------------------------------------
ngApp.factory('Unit7', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [], unitNum: 7 };

    unit.ex[1] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 1;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "Read the situations and write sentences. Use the following verbs in the present perfect:";
      ex.data = [
      { t1: "Tom is looking for his key. He can't find it.",          t2: "Tom " },
      { t1: "Lisa can’t walk and her leg is in plaster. ",            t2: "Lisa " },
      { t1: "Last week the bus fare was £1.80. Now it is £2 ",        t2: "The bus fare " },
      { t1: "Maria’s English wasn't very good. Now it is better. ",   t2: "Her English " },
      { t1: "Dan didn't have a beard before. Now he has a beard. ",   t2: "Dan " },
      { t1: "This morning I was expecting a letter. Now I have it. ", t2: "The letter " },
      { t1: "The temperature was 20 degrees. Now it is only 12. ",    t2: "The temperature " }
      ];
      ex.data[0].ca  = ["has lost his key", "'s lost his key"];
      ex.data[1].ca  = ["has broken her leg", "'s broken her leg"];
      ex.data[2].ca  = ["has gone up", "'s gone up"];
      ex.data[3].ca  = ["has improved", "'s improved"];
      ex.data[4].ca  = ["has grown a beard", "'s grown a beard"];
      ex.data[5].ca  = ["has arrived", "'s arrived"];
      ex.data[6].ca  = ["has fallen", "'s fallen"];

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
      ex.title += "Put in been or gone.";
      ex.data = [
      { t1: "James is on holiday. He's ",   t2: " to Italy." },
      { t1: "Hello! I've just ",   t2: " to the shops. I've bought lots of things." },
      { t1: "Alice isn't here at the moment. She's ",   t2: " to the shop to get a newspaper." },
      { t1: "Tom has ",   t2: " out. He'll be back in about an hour." },
      { t1: "'Are you going to the bank?' 'No, I've already ",   t2: " to the bank.'" }
      ];
      ex.data[0].ca  = ["gone"];
      ex.data[1].ca  = ["been"];
      ex.data[2].ca  = ["gone"];
      ex.data[3].ca  = ["gone"];
      ex.data[4].ca  = ["been"];

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
      ex.title += "Complete B's sentences. Make sentences from the words in brackets.";
      ex.data = [
      { t1: "Would you like something to eat? ",   hint: "(I / just / have / lunch)",   t2: "No, thanks.", t3: "." },
      { t1: "Do you know where Julia is? ",   hint: "(I / just / see / her)",   t2: "Yes, ", t3: "." },
      { t1: "What time is David leaving? ",   hint: "(he / already / leave)",   t2: "", t3: "." },
      { t1: "What's in the newspaper today? ",   hint: "(I / not / read / it yet)",   t2: "I don't know.", t3: "." },
      { t1: "Is Sue coming to the cinema with us? ",   hint: "(she / already / see / the film)",   t2: "No, ", t3: "." },
      { t1: "Are your friends here yet? ",   hint: "(they / just / arrive)",   t2: "Yes, ", t3: "." },
      { t1: "What does Tim think about your plan? ",   hint: "(we / not / tell / him yet)",   t2: "", t3: "." }
      ];
      ex.data[0].ca  = ["I've just had lunch", "I have just had lunch"];
      ex.data[1].ca  = ["I've just seen her", "I have just seen her", "I just saw her"];
      ex.data[2].ca  = ["He's already left", "He has already left", "He already left"];
      ex.data[3].ca  = ["I haven't read it yet", "I have not read it yet", "I didn't read it yet", "I did not read it yet"];
      ex.data[4].ca  = ["she's already seen the film", "No, she has already seen", "No, she already saw"];
      ex.data[5].ca  = ["they've just arrived", "Yes, they have just arrived,", "Yes, they just arrived"];
      ex.data[6].ca  = ["We haven't told him yet", "We have not told him yet", "We didn't tell him yet"];

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
      ex.title += "Read the situations and write sentences with just, already or yet.";
      ex.data = [
      { t1: "After lunch you go to see a friend at her house.", t2: "She says, ‘Would you like something to eat?'", t3: "You say: No thank you. ",   hint: "(have lunch)",   t4: "." },
      { t1: "Joe goes out. Five minutes later, the phone rings and the caller says, 'Can I speak to Joe?' ", t3: "You say: I'm afraid ",   hint: "(go out)",   t4: "." },
      { t1: "You are eating in a restaurant. The waiter thinks you have finished and starts to take your plate away.", t3: "You say: Wait a minute! ",   hint: "(not / finish)",   t4: "." },
      { t1: "You plan to eat at a restaurant tonight. You phoned to reserve a table.", t2: "Later your friend says, 'Shall I phone to reserve a table?'", t3: "You say: No, ",   hint: "(do it)",   t4: "." },
      { t1: "You know that a friend of yours is looking for a place to live. Perhaps she has been successful. Ask her.", t3: "You say: ",   hint: "(find)",   t4: " ?" },
      { t1: "You are still thinking about where to go for your holiday.", t2: "A friend asks, ‘Where are you going for your holiday?'", t3: "You say: ",   hint: "(not / decide)",   t4: "." },
      { t1: "Linda went shopping, but a few minutes ago she returned.", t2: "Somebody asks, ‘Is Linda still out shopping?'", t3: "You say: No, ",   hint: "(come back)",   t4: "." }
      ];
      ex.data[0].ca  = ["I've just had lunch", "I have just had lunch"];
      ex.data[1].ca  = ["he's just gone out", "he has just gone out", "he just went out"];
      ex.data[2].ca  = ["I haven't finished yet", "I have not finished yet", "I didn't finish yet", "I did not finish yet"];
      ex.data[3].ca  = ["I've already done it", "I have already done it", "I already did it"];
      ex.data[4].ca  = ["Have you found a place to live yet", "Did you find a place to live yet", "Have you found a place to live yet?", "Did you find a place to live yet?"];
      ex.data[5].ca  = ["I haven't decided yet", "I have not decided yet", "I didn't decide yet", "I did not decide yet"];
      ex.data[6].ca  = ["she's just come back", "she has just come back", "she just came back"];

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
// Unit 8
// -------------------------------------------------------------------------
ngApp.factory('Unit8', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [], unitNum: 8 };

    unit.ex[1] = (function() {
      var ex = {};
      ex.unit = unit.unitNum;
      ex.qNum = 1;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ';
      ex.title += "You ask people about things they have done. Write questions with ever.";
      ex.data = [
      { hint: "(ride / horse?)", t1: ""  },
      { hint: "(be / California?)", t1: "Have "  },
      { hint: "(run / marathon?)", t1: ""  },
      { hint: "(speak / famous person?)", t1: ""  },
      { hint: "(most beautiful place / visit?)", t1: "What's "  }
      ];
      ex.data[0].ca  = ["Have you ever ridden a horse?"];
      ex.data[1].ca  = ["you ever been to California?"];
      ex.data[2].ca  = ["Have you ever run a marathon?", "Have you ever run in a marathon?"];
      ex.data[3].ca  = ["Have you ever spoken to a famous person?"];
      ex.data[4].ca  = ["the most beautiful place you've ever visited?", "the most beautiful place you have ever visited?"];

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
      ex.title += "Complete B's answers. Some sentences are positive and some negative. Use these verbs:";
      ex.data = [
      { t1: "What's Mark's sister like? ",   t2: " I've no idea.",   t3: " her." },
      { t1: "Is everything going well?",   t2: " Yes, we ",  t3: " any problems so far." },
      { t1: "Are you hungry?",   t2: " Yes. I ",  t3: " much today." },
      { t1: "Can you play chess?",   t2: " Yes, but ",  t3: "for ages." },
      { t1: "Are you enjoying your holiday?",   t2: " Yes, it's the best holiday ",  t3: " for a long time." },
      { t1: "What's that book like?",   t2: "I don't know.",  t3: " it." },
      { t1: "Is Brussels an interesting place?",   t2: "I've no idea.",  t3: "there." },
      { t1: "I hear your car broke down again yesterday.",   t2: "Yes, it's the second time ",  t3: "this month." },
      { t1: "Do you like caviar?",   t2: "I don't know.",  t3: " it." },
      { t1: "Mike was late for work again today.",   t2: "Again? He",  t3: " late every day this week." },
      { t1: "Who's that woman by the door?",   t2: "I don't know.",  t3: " her before." }
      ];
      ex.data[0].ca  = ["I've never met", "I have never met"];
      ex.data[1].ca  = ["haven't had", "have not had"];
      ex.data[2].ca  = ["haven't eaten", "have not eaten"];
      ex.data[3].ca  = ["I haven't played", "I have not played", "I haven't played it", "I have not played it"];
      ex.data[4].ca  = ["I've had", "I have had"];
      ex.data[5].ca  = ["I haven't read", "I have not read"];
      ex.data[6].ca  = ["I've never been", "I have never been", "I haven't never been", "I have not been"];
      ex.data[7].ca  = ["it's happened", "it has happened", "that's happened", "that has happened"];
      ex.data[8].ca  = ["I've never tried", "I have never tried", "I haven't tried", "I have not tried", "I've never eaten", "I have never eaten", "I haven't eaten", "I have not eaten"];
      ex.data[9].ca  = ["has been", "'s been"];
      ex.data[10].ca  = ["I've never seen", "I have never seen", "I haven't seen", "I have not seen"];

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
      ex.title += "Write four sentences about yourself. Use \"I haven't\" and choose from the boxes.";
      ex.data = [
      { t1: "" },
      { t1: "" },
      { t1: "" },
      { t1: "" },
      { t1: "" }
      ];
      ex.data[0].ca  = ["Free response"];
      ex.data[1].ca  = ["Free response"];
      ex.data[2].ca  = ["Free response"];
      ex.data[3].ca  = ["Free response"];
      ex.data[4].ca  = ["Free response"];

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
      ex.correct = function() {
        ex.q.forEach(function(q) {
          q.correct = true;
        });
        ex.showCorr = true;
        $rootScope.$emit('show_question_result', ex.qStr, ex.showCorr);
        Teacher.setScore(ex);
      };
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
      ex.title += "Read the situations and write sentences as shown in the example.";
      ex.data = [
      { t1: "Jack is driving a car, but he’s very nervous and not sure what to do.",  t2: "You ask:" },
      { fix: true, t2: " He says:" },

      { t1: "Ben is playing tennis. He's not good at it and he doesn't know the rules. ", t2: "You ask: Have" },
      { fix: true, t2: " He says: No, this is the first " },

      { t1: "Sue is riding a horse. She doesn't look very confident or comfortable. ", t2: "You ask:" },
      { fix: true, t2: " He says:" },

      { t1: "Maria is in Japan. She has just arrived and it's very new for her.", t2: "You ask:" },
      { fix: true, t2: " He says:" }
      ];
      ex.data[0].ca  = ["Have you driven a car before?"];
      ex.data[1].ca  = ["No, this is the first time I've driven a car", "No, this is the first time I have driven a car"];
      ex.data[2].ca  = ["you played tennis before?"];
      ex.data[3].ca  = ["time I've played tennis", "time I have played tennis"];
      ex.data[4].ca  = ["Have you ridden a horse before?", "Have you been on a horse before?"];
      ex.data[5].ca  = ["No, this is the first time I've ridden a horse", "No, this is the first time I've been on a horse", "No, this is the first time I have ridden a horse", "No, this is the first time I have been on a horse"];
      ex.data[6].ca  = ["Have you been to Japan before?"];
      ex.data[7].ca  = ["No, this is the first time I've been to Japan", "No, this is the first time I have been to Japan"];

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
// Unit 9999
// -------------------------------------------------------------------------
ngApp.factory('Unit9', ['$rootScope', 'ArrayHelper', 'CorrectExFactory', 'AnswerExFactory', 'Teacher',
  function($rootScope, ArrayHelper, CorrectExFactory, AnswerExFactory, Teacher) {

    var unit = { ex: [{}], unitNum: 9 };

    unit.ex.push(function() {
      var ex = {};
      ex.title = "What have these people been doing or what has been happening?";
      ex.data = [
      {},
      {},
      {},
      {}
      ];
      ex.data[0].ca  = ["have been shopping", "'ve been shopping"];
      ex.data[1].ca  = ["has been watching tv", "'s been watching tv"];
      ex.data[2].ca  = ["have been playing tennis", "'ve been playing tennis"];
      ex.data[3].ca  = ["has been running", "'s been running"];

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

    unit.ex.push(function() {
      var ex = {};
      ex.title = "Write a question for each situation.";
      ex.data = [
      { t0: "You meet Paul as he is leaving the swimming pool. ",  t1: "You ask:", hint: "(you / swim?)", t2: " ?"},
      { t0: "You have just arrived to meet a friend who is waiting for you.", t1: "You ask:", hint: "(you / wait / long?)", t2: " ?" },
      { t0: "You meet a friend in the street. His face and hands are very dirty.", t1: "You ask:", hint: "(what / you / do?)", t2: " ?" },
      { t0: "A friend of yours is now working in a shop. You want to know how long.", t1: "You ask:", hint: "(how long / you / work / there?)", t2: " ?" },
      { t0: "A friend tells you about his job - he sells mobile phones. You want to know how long.", t1: "You ask:", hint: "(how long / you / sell / mobile phones?)", t2: " ?" }
      ];
      ex.data[0].ca  = ["Have you been swimming"];
      ex.data[1].ca  = ["Have you been waiting long"];
      ex.data[2].ca  = ["What have you been doing"];
      ex.data[3].ca  = ["How long have you been working there"];
      ex.data[4].ca  = ["How long have you been selling mobile phones"];

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

    unit.ex.push(function() {
      var ex = {};
      ex.title = "Read the situations and complete the sentences.";
      ex.data = [
      { t0: "It's raining. The rain started two hours ago.", t1: "It ", t2: " for two hours." },
      { t0: "We are waiting for the bus. We started waiting 20 minutes ago.", t1: "We ", t2: " for 20 minutes." },
      { t0: "I'm learning Spanish. I started classes in December.", t1: "I", t2: " since December." },
      { t0: "Jessica is working in a supermarket. She started working there on 18 January.", t1: "", t2: " since 18 January." },
      { t0: "Our friends always spend their holidays in Italy. They started going there years ago.", t1: "", t2: " for years." }
      ];
      ex.data[0].ca  = ["is been raining", "'s been raining"];
      ex.data[1].ca  = ["have been waiting", "'ve been waiting"];
      ex.data[2].ca  = ["have been learning Spanish", "'ve been learning Spanish"];
      ex.data[3].ca  = ["She has been working there", "She's been working there"];
      ex.data[4].ca  = ["They have been going there", "They've been going there"];

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

    unit.ex.push(function() {
      var ex = {};
      ex.title = "Put the verb into the present continuous (I am -ing) or present perfect continuous (I have been -ing).";
      ex.data = [
      { t1: "",   hint: "(Maria / learn)",   t2: " English for two years." },
      { t1: "Hello, Tom. ",   hint: "(I / look)",   t2: " for you. Where have you been?" },
      { t1: "Why ",   hint: "(you / look)",   t2: " at me like that? Stop it!" },
      { t1: "Linda is a teacher. ",   hint: "(she / teach)",   t2: " for ten years." },
      { t1: "",   hint: "(I / think)",   t2: " about what you said and I've decided to take your advice." },
      { t1: "‘Is Paul on holiday this week?' ‘No, ",   hint: "(he/work)",   t2: " .'" },
      { t1: "Sarah is very tired. ",   hint: "(she / work)",   t2: " very hard recently." }
      ];
      ex.data[0].ca  = ["Maria has been learning", "Maria's been learning"];
      ex.data[1].ca  = ["I have been looking", "I've been looking"];
      ex.data[2].ca  = ["are you looking"];
      ex.data[3].ca  = ["She has been teaching", "She's been teaching"];
      ex.data[4].ca  = ["I have been thinking", "I've been thinking"];
      ex.data[5].ca  = ["he's working", "he is working"];
      ex.data[6].ca  = ["She has been working", "She's been working"];

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


    unit.ex.forEach(function(ex, num) {
      ex.qNum = num;
      ex.unit = unit.unitNum;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ' + ex.title;
    });

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

    var unit = { ex: [{}], unitNum: 9999 };

    unit.ex.push(function() {
      var ex = {};
      ex.title = "xxxxxxxxxxxxxxxxx.";
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




    unit.ex.forEach(function(ex, num) {
      ex.qNum = num;
      ex.unit = unit.unitNum;
      ex.qStr = ex.unit + '_' + ex.qNum;
      ex.title = ex.unit + '.' + ex.qNum + ' ' + ex.title;
    });

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
