//Global Variables

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timeLeft = 30;
var intervalId;
var timeCount = false;




//Object for trivia questions

var triviaQuestions = [{
    question: "What was Blackbeard's real name?",
    answers: ["Jack Rackham", "Jack Sparrow", "Edward Teach", "Michael Hogan"],
    correct: 2,
},

 {
    question: "Which pirate was technically a knighted lord?",
    answers: ["Anne Bonny", "William Kidd", "Bartholomew Roberts", "Henry Morgan"],
    correct: 3,

},

{  
    question: "When was the Golden Age of Piracy?",
    answers: ["1650-1730", "1775-1783", "800-1066", "It's happening right now."],
    correct: 0,

},

{  
    question: "Where was the 'Republic of Pirates' located?",
    answers: ["Cat Island", "Nassau", "Davos", "Freeport"],
    correct: 1,

},

{
    question: "According to the Pirate Code of Black Bart Roberts, who besides the Captain receives two shares of the prize?",
    answers: ["The Swabbie", "The Boatswain", "The Gunner", "The Quartermaster"],
    correct: 3, 

},

{
    question: "Who was Anne Bonny married to when she lived as a pirate?",
    answers: ["Benjamin Hornigold", "Stede Bonnet", "Calico Jack", "Charles Vane"],
    correct: 2,

},


];

//variable to hold index of current question
var questionIndex = 0; 


//On load start screen -- do not repeat this after first loading of the page.

function openGame () {
 $("#questionblock").html("Welcome to Pirate Trivia, Yarr!");
 $("#answerblock").html("<button class= startbutton>Press Here to Begin the Voyage</button>");
 //upon clicking start the game begins:
 $(".startbutton").on("click", function startGame() {
     console.log("click click"); //this will initiate function that starts the game.
    });
    

};
window.onload = openGame;
    
    
    
//TODO: reset mechanic, which brings the game back to the first question, having the similar effect as "start" did(but replacing start).


//TODO: function for timer to go down 30 seconds, before triggering function to go to next question.


//TODO: start game sequence

function startGame (){
    
    //TODO: display timer with countdown in #timeleft.
    
    //TODO: display first question from object in #questionblock
    $("#questionblock").html(triviaQuestions.question);
    
    //TODO: display column of potential answers from object as clickable buttons in #answerblock
    
    
    
    
    
    
    
    
    
    
}
