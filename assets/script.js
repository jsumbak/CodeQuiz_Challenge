var questionContainer = document.getElementById('quiz');
const questions = document.getElementsByClassName("question");
var nextButton = document.getElementById('next-btn');
var button = document.getElementById('submit');
var startButton = document.getElementById('start-btn');
var timeEl = document.getElementById('#timer');
var answerButtonElement = document.getElementById('answer-buttons');
let score = 0;
let scoreElement;
let shuffleQuestions, currentQuestionContainer;
var quiz = ('#quiz')
var question = [
    {
        title: " Which operator is used to assign a value to a variable?",
        choices:["+","*","=","#"],
        answer: "="
    },

    {
        title: "Which element runs the same code repeatedly with different values",
        choices:["Boolean","Div","Loop","String"],
        answer: "Loop"
    },

    {
        title:"How do you create a function in JavaScript?",
        choices:["function myFunction()", "func myFunction()","function myFunction", "if function()"],
        answer:"function myFunction()"
    },

    {
        title:"How to write an IF statement in JavaScript?",
        choices:["if (x > y)","if else (x > y)","if x > y","var if (x > y)"],
        answer:"if (x > y)"
    },

    {
        title:"Which one is a logical operator?",
        choices:[ "==","!=","&&",">"],
        answer:"&&"
    },

    {
        title:"How many values do booleans have?",
        choices:["5","2","1","3"],
        answer:"2"
    },
]

let titleDiv = document.getElementById('title');
// titleDiv.textContent = question.title;

// btn.addEventListener('click', startQuiz);
//     console.log('clicked')

function startQuiz(){
questionContainer.setAttribute('class', 'hide')
var div = document.querySelector('.questions');
div.classList.remove('hide')
randomQuestion = questions.sort(() => Math.random() - .5)
currentQuestionContainer = 0
setNextQuestion()
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionContainer])
    // var index = 0
    // var title = questions[index].title
}

function showNewQuestion(){
    questions[currentQuestion].style.display = "none";
    currentQuestion++
    questions[currentQuestion].style.display = "block";
    clearInterval(interval);
    timer.innerHTML = 10;
    startInterval();

// let titleDiv = document.getElementById('title');
// titleDiv.textContent = question.title;
// questionContainer.innerText = question.question;
// question.answers.forEach(answer => {
//     var button = document.createElement('button')
//     button.innerText = answer.text;
//     button.classList.add('btn')
//     if (answer.correct){
//         button.dataset.correct = answer.correct
//     }
//     button.addEventListener("click", selectAnswer)
//     answerButtonElement.appendChild(button);
    // startButton.addEventListener('click', selectAnswer)
}


function resetState() {
	nextButton.classList.add("hide"); 
	while (answerButtonElement.firstChild) {
		answerButtonElement.removeChild(answerButtonElement.firstChild);
	}
}
// function showResults()

// show results to user
// submitButton.addEventListener('click', showResults); 

// function timer(){
//     var timeInterval = setInterval(function () {
//         timeLeft --;
//         timeEl.textContent = timeLeft;
//         if(timeLeft === 0) {
//           clearInterval(timeInterval);
//           displayMessage();
//         }
//       }, 1000);
// }

function createTimer(){
    timeEl.innerHTML = 10;
    document.body.append(timeEl);    
    startInterval();
}

function getScoreFromLocalStorage() {
    const userScore = localStorage.getItem("score");
    userScore && alert(`The last score was: ${userScore}`)
 }
 
 function updateScore() {
     scoreElement.innerHTML = `Your score is ${score}` + '!';
     localStorage.setItem("score", score);
 }
 