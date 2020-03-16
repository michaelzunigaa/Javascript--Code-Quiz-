var correct = 0;

var score = 0;




var Question = document.getElementById("display-question");


var answerA = document.getElementById("choice-1");
var answerB = document.getElementById("choice-2");
var answerC = document.getElementById("choice-3");
var answerD = document.getElementById("choice-4");

var buttonA = document.getElementById("btn-a");
var buttonB = document.getElementById("btn-b");
var buttonC = document.getElementById("btn-c");
var buttonD = document.getElementById("btn-d");
var startButton = document.getElementById("btn-start");

var questions = [
    {
        Question: 'Which one of these is a boolean in JavaScript?',
        answers: [
            {text:"true" , correct: true},
            {text:"possible" , correct: false},
            {text:"go" , correct: false},
            {text:"maybe" , correct: false}
        ],

         Question1: 'Where does the script tag gi in the html file?',
         answers1:[
             {text:'body', correct: true},
             {text:'header', correct: false},
             {text:'title', correct: false},
             {text:'footer', correct:false}
         ],   
         Question2: 'Which of thesr is not a CSS proerty?',
         answers2:[
            {text:'font-size', correct: false},
            {text:'background-color', correct: false},
            {text:'function()', correct: true},
            {text:'margin-align', correct:false}
         ]
        

        




        }
];






buttonA.addEventListener("click" , function () {
    console.log("Hi!");

    }
    
);
startButton.addEventListener("click" , function () {
   document.getElementsByClassName("display-question").style.display = "visible";

    
}
);

// buttonC.addEventListener("click" , buttonC);
// buttonD.addEventListener("click", buttonD );







function getQuestions() {
}

buttonB.addEventListener("click", getQuestions() );

function displayQuestion() {
     
    
}

function showAnswers() {
    
}

function trackScore() {
    
}





getQuestions();