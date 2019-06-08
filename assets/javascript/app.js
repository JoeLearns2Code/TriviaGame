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
    correct: "3",
},

{
    question: "Which pirate was technically a knighted lord?",
    answers: ["Anne Bonny", "William Kidd", "Bartholomew Roberts", "Henry Morgan"],
    correct: "4",

},

{
    question: "When was the Golden Age of Piracy?",
    answers: ["1650-1730", "1775-1783", "800-1066", "It's happening right now."],
    correct: "1",

},

{
    question: "Where was the 'Republic of Pirates' located?",
    answers: ["Cat Island", "Nassau", "Davos", "Freeport"],
    correct: "2",

},

{
    question: "According to the Pirate Code of Black Bart Roberts, who besides the Captain receives two shares of the prize?",
    answers: ["The Swabbie", "The Boatswain", "The Gunner", "The Quartermaster"],
    correct: "4",

},

{
    question: "Who was Anne Bonny married to when she lived as a pirate?",
    answers: ["Benjamin Hornigold", "Stede Bonnet", "Calico Jack", "Charles Vane"],
    correct: "3",

},


];

//variable to hold index of current question
var questionIndex = 0;


//On load start screen -- do not repeat this after first loading of the page.

function openGame() {
    $("#questionblock").html("Welcome to Pirate Trivia, Yarr!");
    $("#answerblock").html("<button class= startbutton>Press Here to Begin the Voyage</button>");
    //upon clicking start the game begins:
    $(".startbutton").on("click", function startGame() {
        //  console.log("click click"); //this will initiate function that starts the game.
        cycleQuiz();
    });

};
window.onload = openGame;




// functions for timer to go down 30 seconds, before triggering function to go to next question.

function startInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);

};

function countdown() {
    timeLeft--;
    $("#timeleft").html("Time Remaining: " + timeLeft);
    timeCount = true;
    // when time hits 0, stop countdown, add 30 secs back, add to the Qindex, cycleQuiz to next set of question & answers
    if (timeLeft === 0) {
        clearInterval(intervalId);
        timeCount = false;
        if (questionIndex >= 5) {
            unanswered++;
            resetPage();

        }
        else {
            questionIndex++;
            unanswered++;
            timeLeft = 30;
            cycleQuiz();
        }

    }

}





// start game sequence

function cycleQuiz() {

    $("#timeleft").html("Time Remaining: " + timeLeft);
    // display first question from object in #questionblock
    $("#questionblock").empty();
    $("#questionblock").html(triviaQuestions[questionIndex].question);
    // console.log("this works");

    // display column of potential answers from object as clickable buttons in #answerblock

    $("#answerblock").empty();
    $("#answerblock").html("<br>" + "<button class='answerbutton' id='1'></button>" + "<br>" + "<button class='answerbutton' id='2'></button>" + "<br>" + "<button class='answerbutton' id='3'></button>" + "</br>" + "<button class='answerbutton' id='4'></button>");
    $("#1").append(triviaQuestions[questionIndex].answers[0]);
    $("#2").append(triviaQuestions[questionIndex].answers[1]);
    $("#3").append(triviaQuestions[questionIndex].answers[2]);
    $("#4").append(triviaQuestions[questionIndex].answers[3]);

    //Start the countdown

    startInterval();


    // Answer buttons clicked, leading to a correct or wrong answer.

    $(".answerbutton").click(function answerQuestion() {
        console.log("click click");
        var chosenAnswer = $(this)[0].id;
        console.log(chosenAnswer);
        if (chosenAnswer === triviaQuestions[questionIndex].correct) {
            clearInterval(intervalId);
            timeCount = false;
            correctAnswers++;
            if (questionIndex >= 5) {
                resetPage();

            } else {
                
                questionIndex++;
                timeLeft = 30;
                cycleQuiz();

            }

            



        }
        else  {
            clearInterval(intervalId);
            timeCount = false;
            incorrectAnswers++;
            if (questionIndex >= 5) {
                resetPage();

            } else {
               
                questionIndex++;
                timeLeft = 30;
                cycleQuiz();
            }


        }
    });

};



// function to create final page, showing correctAnswers, incorrectAnswers, unanswered, and add a button to reset the question cycle.

function resetPage() {

    // empty & replace q & a with final message and totals
    $("#questionblock").empty();
    $("#questionblock").html("And thar she blows!  See how ye did: ");
    $("#answerblock").empty();
    $("#answerblock").html("<br>" + "<p id='totalcorrect'" + "</p>" + "<p id='totalincorrect'" + "</p>" + "<br>" + "<p id='totalunanswered'" + "</p>");
    $("#totalcorrect").append("Correct Answers: " + correctAnswers);
    $("#totalincorrect").append("Incorrect Answers: " + incorrectAnswers);
    $("#totalunanswered").append("Unanswered: " + unanswered);



    //Add a reset button 
    $("#resetblock").html("<br>" + "<button class='resbutton' id='resetbutton'></button>");
    $("#resetbutton").text("Play Again");




    // reset button that clears out totals, returns to cycleQuiz


    $("#resetbutton").click(function playAgain() {

        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 0;
        questionIndex = 0;
        timeLeft = 30;
        $("#resetbutton").remove();
        cycleQuiz();

    });




};


