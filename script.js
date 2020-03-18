var correct = 0;
var score = 0;
var timeLeft = 30;

var time = document.getElementById('display4');
var timeId = setInterval(countdown, 1000);

var questionStart = document.getElementById("start");
var startButton = document.getElementById("btn-start");

var answerA = document.getElementById("choice-1");
var answerB = document.getElementById("choice-2");
var answerC = document.getElementById("choice-3");
var answerD = document.getElementById("choice-4");
var buttonA = document.getElementById("btn-a");
var buttonB = document.getElementById("btn-b");
var buttonC = document.getElementById("btn-c");
var buttonD = document.getElementById("btn-d");

    startButton.addEventListener('click', startGame);





    function startGame(){
        console.log("started");

        questionStart.style.visibility ="visible";
        

    }


var questions = [
    {
        Question: 'Which one of these is a boolean in JavaScript?',
        answers: [
            {text:"true" , correct: true},
            {text:"possible" , correct: false},
            {text:"go" , correct: false},
            {text:"maybe" , correct: false}
        ],

         Question1: 'Where does the script tag go in the html file?',
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
         ], 
         Question3: 'Which of thesr is not a CSS proerty?',
         answers3:[
            {text:'font-size', correct: false},
            {text:'background-color', correct: false},
            {text:'function()', correct: true},
            {text:'margin-align', correct:false}
         ], 
         Question4: 'What coding language is used the most?',
         answers4:[
             {text:'html', correct: false},
             {text: 'CSS', correct: false},
             {text:'JavaScript', correct: false},
             {text:'All of the Above', correct: true}

         ],
         Question5: 'Where do you pu the link for a CSS external page, in the html?',
         answers5:[
             {text:'footer', correct: false},
             {text: 'link page', correct: false},
             {text:'Body', correct: false},
             {text:'Header', correct: true}
         ],
         Question6: 'Which of these syntax are asscociated with arrays?',
         answers6:[
             {text:'{}', correct: false},
             {text:'[]', correct: true},
             {text: '// //', correct: false},
             {text:'()', correct: false}
            ],
            
            

            
        }
        
    ];
        var lastQuestion = questions.length - 1;

        var runningQuestion = 0;
    
           function checkAnswer()
           {
               if(questions[runinngQuestionIndex],correct == true) 
                    score++;
                }
                answerIscorrect();
    





buttonA.addEventListener("click" , function (){
   console.log('JEW!')
}







);
    


document.getElementById("btn-start").addEventListener("click" , function () {
  questionStart.style.display = "visible";

    
}
);

// buttonC.addEventListener("click" , buttonC);
// buttonD.addEventListener("click", buttonD );




function countdown(){
    if(timeLeft == -1){
        clearTimeout(timeId);
        // Stop the quiz //
    } else{
        parseInt(time.value) == timeLeft +   ; timeLeft--;
    }
}
countdown();






function getQuestions(){

    var q = questions[runningQuestion];

   

    question.innerHTML = "<p>"+ q.question +"</p>";

    

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
}






buttonB.addEventListener("click", getQuestions() );

function displayQuestion() {
     
    
}

function showAnswers() {
    
}

function trackScore() {
    
}





getQuestions();