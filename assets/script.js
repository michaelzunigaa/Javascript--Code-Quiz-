var correct = 0;
var score = 0;
var timeLeft = 30;

var time = document.getElementById('display4');
// var timeId = setInterval(countdown, 1000);

var questionDisplay = document.getElementById("#question-display");
// var startButton = document.getElementById("#start-btn");

// var answerA = document.getElementById("choice-1");
// var answerB = document.getElementById("choice-2");
// var answerC = document.getElementById("choice-3");
// var answerD = document.getElementById("choice-4");
// var buttonA = document.getElementById("btn-a");
// var buttonB = document.getElementById("btn-b");
// var buttonC = document.getElementById("btn-c");
// var buttonD = document.getElementById("btn-d");

// const startQuiz = document.querySelector("#start-quiz");

// function startGame() {
//     console.log("started");

//     questionDisplay.style.visibility = "visible";


// }
// startQuiz.addEventListener('click', startGame);
document.querySelector("#start-btn").addEventListener("click", function(event){
    event.stopPropagation();

    // startTimer();
    document.querySelector("#start-btn").style.visibility ="hidden";
    document.querySelector("#question-display").style.visibility ="visible";
    document.querySelector("#btn-a").style.visibility ="visible";
    document.querySelector("#btn-b").style.visibility ="visible";
    document.querySelector("#btn-c").style.visibility ="visible";
    document.querySelector("#btn-d").style.visibility ="visible";
   
    
    console.log("hello");
    displayQs();
    






   
    
    
});



let shuffledQuestions, currentQuestionIndex



var questions = [{
        question: 'Which one of these is a boolean in JavaScript?',
        choices: ["true", "possible", "go", "maybe"],
        answer: "true"
    },
    {
        question: 'Where does the script tag go in the html file?',
        choices: ['body', 'header', 'title', 'footer'],
        answer: "body"
    },
    {
        question: 'Which of thesr is not a CSS proerty?',
        choices: ['font-size', 'background-color', 'function()', 'margin-align'],
        answer: "function()"
    },
    {
        question: 'What coding language is used the most?',
        choices: ['html', 'CSS', 'JavaScript', 'All of the Above'],
        answer: "All of the Above"
    },
    {
        question: 'Where do you pu the link for a CSS external page, in the html?',
        choices: ['footer', 'link page', 'Body', 'Header'],
        answer: "Header"
    },
    {
        question: 'Which of these syntax are asscociated with arrays?',
        choices: ['<>', '()', '[]', '// //'],
        answer: "[]"
    }
];


function displayQs(){
    shuffledQuestions = questions.sort(() => Math.random() - ".5");
    currentQuestionIndex = 0;

    document.querySelector("#question-display").innerHTML = shuffledQuestions[0].question;
    document.querySelector("#btn-a").innerHTML = questions[0].choices[0];
    document.querySelector("#btn-b").innerHTML = questions[0].choices[1];
    document.querySelector("#btn-c").innerHTML = questions[0].choices[2];
    document.querySelector("#btn-d").innerHTML = questions[0].choices[3];
    getNextQuestion();

}

function startTimer(){

}

function getNextQuestion(){

}











var lastQuestion = questions.length - 1;



var questionTime = 10;

var TIMER;

