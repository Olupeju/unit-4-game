var wins =0;
var losses =0;
var totalScore =

// Getting the DOM ready
$(document).ready(function() {
    console.log( "ready!" );

// Crystal variables are random numbers between 1 and 12.
var crystal1 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystal2 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystal3 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystal4 = Math.floor(Math.random() * (12 - 1)) + 1;
var clickVar = 0;

console.log("crystal1 = ", crystal1, "crystal2 = ", crystal2, "crystal3 = ", crystal3, "crystal 4 = ",  crystal4);

// set button values
document.getElementById("crystal1").value = crystal1;
document.getElementById("crystal2").value = crystal2;
document.getElementById("crystal3").value = crystal3;
document.getElementById("crystal4").value = crystal4;

// randomNum variable is a random number between 19 and 120. It regenerates when there's a win or loss.
var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;

// TotalScore variable increases when the crystal buttons are clicked. This resets to 0 with a win or loss.
let totalScore = 0;

// Wins variable increases when randomNum = totalScore variable.
// Losses variable increases when totalScore variable is greater than randomNum.
var wins = 0;
var losses = 0;

// this function generates and returns a random number between the min and max parameters passed to it
var randNumGenerator = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//Setting DOM elements after initial page load
$("#spanwins").text(wins);
$("#spanloss").text(losses);
$("#totalscore").text(totalScore);
$("#randid").text(randomNum);

// Button click action
$(".crystal").click(function() {
    clickVar = $(this).val();
    totalScore = parseInt(clickVar, 10) + totalScore;
    $("#totalscore").text(totalScore);
    scoreCheck();
});

// this function checks the scores and performs related work related to a loss or a win.
let scoreCheck = function() {
    //console.log("scoreChecker started");
    //console.log("total score", totalScore, "random num", randomNum, "losses", losses, "wins", wins);
    if(totalScore > randomNum) {
        losses = (losses + 1);
        $("#spanloss").text(losses);
        alert("You lose!");
        clearFunc();
    } else if(totalScore == randomNum) {
        wins = (wins + 1);
        $("#spanwins").text(wins);
        alert("You Win!");
        clearFunc();
    };
};

// this function resets the necessary variables and button values after a win or loss.
let clearFunc = function() {
    //console.log("clearFunc started");
    
    totalScore = 0;
    $("#totalscore").text(totalScore);
    
    randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#randid").text(randomNum);
    
    crystal1 = Math.floor(Math.random() * (12 - 1)) + 1;
    crystal2 = Math.floor(Math.random() * (12 - 1)) + 1;
    crystal3 = Math.floor(Math.random() * (12 - 1)) + 1;
    crystal4 = Math.floor(Math.random() * (12 - 1)) + 1;

    document.getElementById("crystal1").value = crystal1;
    document.getElementById("crystal2").value = crystal2;
    document.getElementById("crystal3").value = crystal3;
    document.getElementById("crystal4").value = crystal4;
    //console.log("randomnum", randomNum, "crystal1 = ", crystal1, "crystal2 = ", crystal2, "crystal3 = ", crystal3, "crystal 4 = ",  crystal4);
};


});