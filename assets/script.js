//Remove front page when quiz starts


function RemoveStartPage() {
    document.getElementById("quiz-start").style.display = "none";
}

//set timer function
var time = 60;

function Countdown() {
    setInterval(function (){
        var timer = document.getElementById("time-left");
        if (time > 0 && i < 5) {
        time = time - 1;
        timer.textContent = "Time left:" + time + "!";
        }
        // else {
        //     endQuiz()
        // }
    },1000);
};

var startBtn = document.querySelector("#startbutton");
var Results = document.querySelector("#results-id")
var Questions = document.querySelector("#question-id");
var Highscores = document.querySelector("#highscore-id");
var HighscoreBtn = document.querySelector("#high-scores")
var ResetBtn = document.querySelector("#resetscores");
var SubmiBtn = document.querySelector("#submitbtn");
var NameInitial = document.querySelector("#initials-box");

//Create Questions changed up some from example

var q1 = {
    question: "String values must be enclosed within _____ when being associated with variables.",
    choices: ["A. Quotes", "B. Parenthesis", "C. Commas", "D. Curly Brackets"],
    answer: "A. Quotes",        
};

var q2 = {
    question: "Commonly used data types DO NOT include:",
    choices: ["A. Booleans", "B. Strings", "C. Numbers", "D. Alerts"],
    answer: "D. Alerts",
};

var q3 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["A. Console.log", "B. For loops", "C. Terminal/bash", "D. Javascript",],
    answer: "A. Console.log",
};

var q4 = {
    question: "Arrays in JavaScript can be used to store ______.",
    choices: [ "A. Numbers and strings", "B. Other arrays", "C. Booleans", "D. All of the above",],
    answer: "D. All of the above",
};

var q5 = {
    question: "The condition in an if / else statement is enclosed with",
    choices: [ "A. Quotes", "B. Curly brackets", "C. Parenthesis", "D. Square brackets",],
    answer: "B. Curly brackets",
};

var q6 = {
    question: "What symbol denotes a JQUERY line of code?",
    choices: [ "A. $", "B . #", "C. %", "D. &"],
    answer: "A. $",
};


//Question Array

var QArray = [q1,q2,q3,q4,q5,q6];

var i = 0;

//start up quiz with start button!

var startQuiz = function(){
    
    RemoveStartPage();

    if (i === 0) {
        Countdown();
    }
    if (i === 6) {
        endQuiz();
    }


//question creation

    var questionDiv = document.createElement("div");
        questionDiv.textContent = QArray[i].question;
        questionDiv.className = "question-div";
        Questions.append(questionDiv);

    for (j = 0; j < QArray[i].choices.length; j++) {
        var ChoicesDiv = document.createElement("button");
        ChoicesDiv.textContent =  QArray[i].choices[j];
        ChoicesDiv.className = "btnstyle";
        ChoicesDiv.addEventListener("click", answerCheck);
        Questions.append(ChoicesDiv);        
    }
}

var answerCheck = function(event) {
    if (i > 5) return

    if (event.target.textContent === QArray[i].answer && i < 6){
        alert("Correct!!!")
    }else {
        alert("WRONG!!! You lose 5 seconds")
        time -= 5
    }

    i++;
    Questions.innerHTML = " ";
    startQuiz();
}

function endQuiz() {
    clearInterval(Countdown)  

    var qDisplay = document.getElementById("question-id")
    qDisplay.style.display = "none"

    var resultdisplay =  document.getElementById("results-id") 
    Results.classList.remove("results-class")

    var countdownDisplay = document.getElementById("time-left")
    countdownDisplay.style.display = "none"

    var endScoreSection = document.getElementById("scoreid")
    var endScoreDiv = document.createElement("div")
    endScoreDiv.textContent = time;
    endScoreSection.append(endScoreDiv)

}

document.getElementById("reloadpage").onclick = function(){
    location.href = "https://chucktowntiger.github.io/Challenge4/"
}

function userInitials () {
    if(NameInitial.value === ""){
        return alert ("Please enter Name/Initials must be a min of 1 Character!")
    }   


var scores = {
    "initial" : NameInitial.value,
    "score" : time
}


    var storage = JSON.parse(localStorage.getItem("scores"))

    if (storage === null || storage === undefined) {
        storage = []
        storage.push(scores)
    }
    else {
        storage.push(scores)
    }

    localStorage.setItem("scores", JSON.stringify(storage))

    var getStorage = JSON.parse(localStorage.getItem("scores"))

    var highscorelist = document.getElementById("highscorelist")

    getStorage.sort(function(a,b){
        return b.store - a.score
    })

    for (let i = 0; i < getStorage.length; i++) {
        var highscoreli = document.createElement("li")
        highscorelist.append(highscoreli)

        highscoreli.textContent = getStorage[i].initial +" " + getStorage[i].score 
        highscoreli.className = "highscorelist"

        document.getElementById("resetscores").onclick = function() {
            localStorage.clear()
            highscorelist.remove(highscoreli)
        }
    }
}

var HighscoresD = function(){
    var highscoredisplay =  document.getElementById("highscore-id") 
    Highscores.classList.remove("highscores")
}
    

startBtn.addEventListener("click", startQuiz)

SubmiBtn.addEventListener("click", userInitials)

document.getElementById("reloadpage").onclick = function(){
    location.href="https://chucktowntiger.github.io/Challenge4/"
}

HighscoreBtn.addEventListener("click", HighscoresD)










