function Test() {
  alert("Poseidon quivers before him!!");
}

function ArthurIbbott() {
  alert("nonce");
}

function Zeus_Speaks() {
  var r_text = new Array();
  r_text[0] = "You will live a long and powerful life!";
  r_text[1] = "You are fairly average, change your ways.";
  r_text[2] = "One day you will become the assistant manager of a small KFC";
  r_text[3] = "There is money to be made from potatoes";
  r_text[4] = "Appreciate what you have, tomorrow will be worse";

  var i = Math.floor(r_text.length * Math.random());

  alert(r_text[i]);

  var bgcolorlist = new Array(
    "#228B22",
    "#FFD700",
    "#ADFF2F",
    "#FF69B4",
    "#CD5C5C"
  );

  document.body.style.background =
    bgcolorlist[Math.floor(math.random() * bgcolorlist.length)];
}

var myQuestions = [
  {
    question: "What was the first capital of Egypt?",
    answers: {
      a: "Memphis",
      b: "Thebes",
      c: "Alexandria",
      d: "Luxor",
    },
    correctAnswer: "a",
  },
  {
    question: "On which island did ancient Greek civilisation originate?",
    answers: {
      a: "Samos",
      b: "Crete",
      c: "Olympia",
      d: "Rhodes",
    },
    correctAnswer: "b",
  },
];

function StartQuiz() {
  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  // call the quiz generator
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
}

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;
    // for each question
    for (var i = 0; i < questions.length; i++) {
      answers = [];
      for (letter in questions[i].answers) {
        // add a HTML radio button
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }
      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep trach of user's answers
    var userAnswer = "";
    var numCorrect = 0;

    // for each question
    for (var i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;

        // colour the answers green
        answerContainers[i].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // colour the answers red
        answerContainers[i].style.color = "red";
      }
    }

    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }
  showQuestions(questions, quizContainer);
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
