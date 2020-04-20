var correct = 0;
var score = 0;
var timeLeft = 30;

var time = document.getElementById('display4');
// var timeId = setInterval(countdown, 1000);

var questionStart = document.getElementById("start");
var startButton = document.getElementById("btn-start");

// var answerA = document.getElementById("choice-1");
// var answerB = document.getElementById("choice-2");
// var answerC = document.getElementById("choice-3");
// var answerD = document.getElementById("choice-4");
// var buttonA = document.getElementById("btn-a");
// var buttonB = document.getElementById("btn-b");
// var buttonC = document.getElementById("btn-c");
// var buttonD = document.getElementById("btn-d");

const startQuiz = document.querySelector("#start-quiz");

function startGame() {
    console.log("started");

    questionStart.style.visibility = "visible";


}
startButton.addEventListener('click', startGame);







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











var lastQuestion = questions.length - 1;

var runningQuestion = 0;

function checkAnswer() {
    if (questions[runinngQuestionIndex], correct == true)
        score++;
}
answerIscorrect();






buttonA.addEventListener("click", function () {

    }







);



document.getElementById("btn-start").addEventListener("click", function () {
    questionStart.style.display = "visible";


});

// buttonC.addEventListener("click" , buttonC);
// buttonD.addEventListener("click", buttonD );




// function countdown(){
//     if(timeLeft == -1){
//         clearTimeout(timeId);
//         // Stop the quiz //
//     } else{
//         parseInt(time.value) == timeLeft +  0;timeLeft--;
//     }
// }
// countdown();






function getQuestions() {

    var q = questions[runningQuestion];



    question.innerHTML = "<p>" + q.question + "</p>";



    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
}






buttonB.addEventListener("click", getQuestions());

function displayQuestion() {


}

function showAnswers() {

}

function trackScore() {

}





getQuestions();