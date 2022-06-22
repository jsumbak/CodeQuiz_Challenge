var questionContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');
var timeEl = document.getElementById('countdown');
var randomQuestion, currentQuestionContainer
var questions = [
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

    {
        title:"How can you add a single line comment in a JavaScript?",
        choices:["// This is a comment","/* This is a comment","This is a comment","** This is a comment"],
        answer:"// This is a comment"
    },

    {
        title:"How do you declare a JavaScript variable?",
        choices:["var name","#variable name","<variable name","int name"],
        answer:"var name"
    },
]

startButton.addEventListener('click', startQuiz);

function startQuiz(){
questionContainer.setAttribute('class', 'hide')
var div = document.querySelector('.questions');
div.classList.remove('hide')
// randomQuestion = questions.sort(() => Math.random() - .5)
// currentQuestionContainer = 0
setNextQuestion()

}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionContainer])
    // var index = 0
    // var title = questions[index].title
}

// bring up question page
// start timer
// present end quiz
// end quiz -hides questions, brings back initial page
// last page which will show the high scores


// code will go here for results
function showQuestion(question){
questionContainer.innerText = question.question;
question.answers.forEach(answer => {
    var button = document.createElement('submit')
    submitButton.innerText = answer.text
    submitButton.classList.add('btn')
    if (answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButton.appendChild(button);
    // startButton.addEventListener('click', selectAnswer)
})
}

function showResults(){

}



// show results to user
submitButton.addEventListener('click', showResults);


// timer
function timer(){
    var timeInterval = setInterval(function () {
        timeLeft --;
        timeEl.textContent = timeLeft;
        if(timeLeft === 0) {
          clearInterval(timeInterval);
          displayMessage();
        }
      }, 1000);
}
