import express, { response } from "express";
// this line use to access this module 
const router = express.Router();

//all question ststic like in adatabase
var qustions = [
  
    {id: 1,
    question: "Which one of these is a JavaScript package manager?",
    choice1: {id:1,status:false,value:"node.js" ,qID:1},
    choice2: {id:2,status:false,value:"TypeScript",qID:1},
    choice3: {id:3,status:true,value:"npm",qID:1},
    choice4: {id:4,status:false,value:"chocolatey",qID:1}
   },

    {id: 2,
    question: "How do you write 'Hello World' in an alert box?",
    choice1: {id:1,status:false,value:"alertBox('Hello World');",qID:2},
    choice2: {id:2,status:false,value:"msg('Hello World');t",qID:2},
    choice3: {id:3,status:true,value:"alert('Hello World');",qID:2},
    choice4: {id:4,status:false,value:"msgBox('Hello World);",qID:2}

    },
  {
    id: 3,
    question: "How do you create a function in JavaScript?",
    choice1: {id:1,status:false,value:"function:myFunction()",qID:3},
    choice2: {id:2,status:true,value:"function myFunction()",qID:3},
    choice3: {id:3,status:false,value:"function = myFunction()",qID:3},
    choice4: {id:4,status:false,value:"myFunction() = function",qID:3}
  
  }
  ,
  {
    id: 4,
    question: "How do you call a function named 'myFunction'?",
    choice1: {id:1,status:false,value:"call myFunction()",qID:4},
    choice2: {id:2,status:true,value:"myFunction()",qID:4},
    choice3: {id:3,status:false,value:"call function myFunction()",qID:4},
    choice4: {id:4,status:false,value:"call = myFunction()",qID:4}
  },
  {
    id: 5,
    question: "How to write an IF statement in JavaScript?",
    choice1: {id:1,status:false,value:"if i == 5 then",qID:5},
    choice2: {id:2,status:false,value:"if i = 5 then",qID:5},
    choice3: {id:3,status:false,value:"if i = 5",qID:5},
    choice4: {id:4,status:true,value: "if (i == 5)",qID:5}
  },
  {
    id: 6,
    question: "How does a WHILE loop start?",
    choice1: {id:1,status:true,value:"while (i <= 10)",qID:6},
    choice2: {id:2,status:false,value:"while i = 1 to 10",qID:6},
    choice3: {id:3,status:false,value:"while (i <= 10; i++)",qID:6},
    choice4: {id:4,status:false,value:"while i <= 10",qID:6}
  },
  {
    id: 7,
    question: "How does a FOR loop start?",
    choice1: {id:1,status:false,value:"for (i <= 5; i++)",qID:7},
    choice2: {id:2,status:false,value:"for (i = 0; i <= 5)",qID:7},
    choice3: {id:3,status:false,value:"for i = 1 to 5",qID:7},
    choice4: {id:4,status:true,value:"for (i = 0; i <= 5; i++)",qID:7}
  },
  {
    id: 8,
    question: "How do add a comment in a JavaScript?",
    choice1: {id:1,status:false,value:"<!-- My Comment! -->",qID:8},
    choice2: {id:2,status:true,value:"// My Comment!",qID:8},
    choice3: {id:3,status:false,value:"--> My Comment! <--",qID:8},
    choice4: {id:4,status:false,value:"** My Comment! **",qID:8}
  },
  {
    id: 9,
    question: "How do you declare a JavaScript variable?",
    choice1: {id:1,status:false,value:"variable carName",qID:9},
    choice2: {id:2,status:false,value:"v carName",qID:9},
    choice3: {id:3,status:true,value:"let carName",qID:9},
    choice4: {id:4,status:false,value:"myVar carName",qID:9}
  },
  {
    id: 10,
    question: "Which operator is used to assign a value to a variable?",
    choice1: {id:1,status:true,value:"=",qID:10},
    choice2: {id:2,status:false,value:"+",qID:10},
    choice3: {id:3,status:false,value:"*",qID:10},
    choice4: {id:4,status:false,value:"-",qID:10}
   
  }
];

// this function work when aplliction anguler call this to send all questions
router.get(`/getQuestions`, (request, response) => {
  response.json(qustions);

});


export default router;