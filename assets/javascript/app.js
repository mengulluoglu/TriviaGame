var form = $("#quiz-area");

// Questions
var questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
}, {
    question: "Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    correctAnswer: "Fred Spice"
}, {
    question: "Which NBA team won the most titles in the 90s?",
    answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: "Chicago Bulls"
}, {
    question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
    answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
    correctAnswer: "Nirvana"
}, {
    question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King"
}, {
    question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
    answers: ["Dice", "Mirror", "Fresh", "Cab"],
    correctAnswer: "Fresh"
}, {
    question: "What was Doug's best friend's name?",
    answers: ["Skeeter", "Mark", "Zach", "Cody"],
    correctAnswer: "Skeeter"
}, {
    question: "What was the name of the principal at Bayside High in Saved By The Bell?",
    answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
    correctAnswer: "Mr.Belding"
}];

// Variable that will hold the setInterval
var timer;

var game = {

    correct: 0,
    incorrect: 0,
    counter: 120,


    //timer is gonna to start count down 
    countdown: function() {
        game.counter--;
        //shows on html page 
        $("#counter-number").html(game.counter);
        //if time equal 0, "timeup" amd game done
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },
    //timer will start 
    start: function() {
        timer = setInterval(game.countdown, 1000);
        // counter number will add to  div sub-firstpage and it will show in html 
        $("#sub-firstpage").prepend("<h2>Time Remaining: <span id='counter-number'>200</span> Seconds</h2>");
        //start button will remove 
        $("#start").remove();
        //loop
        for (var i = 0; i < questions.length; i++) {
            form.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                form.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
        //done button will show after the questions
        form.append("<button id='done'>Done</button>");
    },

    done: function() {

        //setting if else 
        // set up the check box of answers
        for (var i = 0; i < questions.length; i++) {
            $.each($(`input[name='question-${i}']:checked`), function() {
                if ($(this).val() === questions[i].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        }
        // $.each($("input[name='question-0']:checked"), function() {
        //     if ($(this).val() === questions[0].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });

        // $.each($("input[name='question-1']:checked"), function() {
        //     if ($(this).val() === questions[1].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });

        // $.each($("input[name='question-2']:checked"), function() {
        //     if ($(this).val() === questions[2].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });

        // $.each($("input[name='question-3']:checked"), function() {
        //     if ($(this).val() === questions[3].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });

        // $.each($("input[name='question-4']:checked"), function() {
        //     if ($(this).val() === questions[4].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });

        // $.each($("input[name='question-5']:checked"), function() {
        //     if ($(this).val() === questions[5].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });

        // $.each($("input[name='question-6']:checked"), function() {
        //     if ($(this).val() === questions[6].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });

        // $.each($("input[name='question-7']:checked"), function() {
        //     if ($(this).val() === questions[7].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });

        this.result();

    },

    result: function() {
        //clearing timer 
        clearInterval(timer);
        //div sub-first_page is removing for the next page
        $("#sub-first_page").remove();

        //set up the result page 
        form.html("<h2>All Done!</h2>");
        form.append("<h3>Correct Answers: " + this.correct + "</h3>");
        form.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        form.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};
// CLICK EVENTS

$(document).on("click", "#start", function() {
    game.start();
});


$(document).on("click", "#done", function() {
    game.done();
});