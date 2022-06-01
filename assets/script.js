//Remove front page when quiz starts

function StartpageRemoval() {
    var StartPage = document.getElementById("quiz-start-page")
    StartPage.style.display = "none"
}

var time = 69

//set timer function
function Countdown() {
    setInterval(function (){
        var timer = document.getElementById("time-left");
        if (time > 0 && i < 5) {
        time = time - 1
        timer.textContent = "Time left:" + time+ "!"
        }
        else {
            endquiz()
        }
    },1000)
}

var startBtn = document.querySelector("#startbutton")
var Questions = document.querySelector("#question-id")
var Results = document.querySelector("#results-id")
var Highscores = document.querySelector("#highscore-id")
var RestartBtn = document.querySelector("#reloadpage")
var ResetBtn = document.querySelector("#resetscores")
var SubmiBtn = document.querySelector("#submitbtn")
var NameInitial = document.querySelector("#initials-box")


var q1 = {
    question:
        
}






