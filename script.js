var startButton = document.querySelector(".startButton");

var questions = [
  {
    question: "What is the correct HTML element for the largest heading?",
    answer1: "<h1>",
    answer2: "<heading>",
    answer3: "<h6>",
    answer4: "<head>",
    correctAnswer: "<h1>",
  },
  {
    question:
      "Which CSS property is used to change the background color of an element?",
    answer1: "background-color",
    answer2: "color",
    answer3: "font-size",
    answer4: "border",
    correctAnswer: "background-color",
  },
  {
    question: "What does CSS stand for?",
    answer1: "Cascading Style Sheets",
    answer2: "Computer Style Sheets",
    answer3: "Colorful Style Sheets",
    answer4: "Creative Style Sheets",
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to link an external JavaScript file?",
    answer1: "<script>",
    answer2: "<link>",
    answer3: "<style>",
    answer4: "<js>",
    correctAnswer: "<script>",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    answer1: "<ul>",
    answer2: "<li>",
    answer3: "<ol>",
    answer4: "<list>",
    correctAnswer: "<ul>",
  },
  {
    question: "What is the correct way to comment out code in JavaScript?",
    answer1: "// This is a comment",
    answer2: "<!-- This is a comment -->",
    answer3: "# This is a comment",
    answer4: "/* This is a comment */",
    correctAnswer: "// This is a comment",
  },
  {
    question:
      "Which CSS property is used to add spacing between HTML elements?",
    answer1: "margin",
    answer2: "padding",
    answer3: "border",
    answer4: "display",
    correctAnswer: "margin",
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    answer1: "To define the main content of the document",
    answer2: "To define the footer of the document",
    answer3: "To define the body of the document",
    answer4: "To define the metadata of the document",
    correctAnswer: "To define the metadata of the document",
  },
  {
    question:
      "Which JavaScript function is used to select an HTML element by its ID?",
    answer1: "getElementByClass",
    answer2: "getElementByTag",
    answer3: "getElementByAttribute",
    answer4: "getElementById",
    correctAnswer: "getElementById",
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    answer1: "variable myVariable;",
    answer2: "var myVariable;",
    answer3: "let myVariable;",
    answer4: "const myVariable;",
    correctAnswer: "var myVariable;",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answer1: "style",
    answer2: "class",
    answer3: "id",
    answer4: "src",
    correctAnswer: "style",
  },
  {
    question: "Which CSS property is used to make text bold?",
    answer1: "font-style",
    answer2: "font-variant",
    answer3: "font-weight",
    answer4: "font-size",
    correctAnswer: "font-weight",
  },
  {
    question:
      "What is the correct way to write a JavaScript comment for a single line?",
    answer1: "/* This is a comment */",
    answer2: "<!-- This is a comment -->",
    answer3: "// This is a comment",
    answer4: "# This is a comment",
    correctAnswer: "// This is a comment",
  },
  {
    question:
      "Which CSS property is used to control the order of elements in a flex container?",
    answer1: "flex-direction",
    answer2: "flex-wrap",
    answer3: "justify-content",
    answer4: "order",
    correctAnswer: "order",
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    answer1: "<a>",
    answer2: "<link>",
    answer3: "<h1>",
    answer4: "<p>",
    correctAnswer: "<a>",
  },
  {
    question: "What does API stand for?",
    answer1: "Application Programming Interface",
    answer2: "Automated Programming Interface",
    answer3: "Abstract Programming Interface",
    answer4: "Advanced Programming Interface",
    correctAnswer: "Application Programming Interface",
  },
  {
    question:
      "Which JavaScript function is used to round a number to the nearest integer?",
    answer1: "ceil()",
    answer2: "floor()",
    answer3: "round()",
    answer4: "toFixed()",
    correctAnswer: "round()",
  },
  {
    question:
      "What is the correct way to include an external CSS file in an HTML document?",
    answer1: "<style src='styles.css'>",
    answer2: "<css src='styles.css'>",
    answer3: "<link rel='stylesheet' href='styles.css'>",
    answer4: "<script src='styles.css'>",
    correctAnswer: "<link rel='stylesheet' href='styles.css'>",
  },
  {
    question: "Which HTML tag is used to define a table row?",
    answer1: "<tr>",
    answer2: "<td>",
    answer3: "<table>",
    answer4: "<th>",
    correctAnswer: "<tr>",
  },
];

var questionList = document.querySelector(".question");
var questionText = document.querySelector("#questionText");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var highScore = document.querySelector("#highScore");
var correctAnswerCount = document.querySelector("#correctAnswers");
var timer = document.querySelector("#timer");
var timeLeft = 60;
var timerRunning;
var correctAnswers = 0;
var currentQuestionIndex = 0;
var totalQuestions = questions.length;
var initials;


function startedGame() {
  startButton.setAttribute("class", "gameStarted");
  startTimer();
  gameFunctions();
}

function gameFunctions() {
  displayQuestion(currentQuestionIndex);

  answer1.addEventListener("click", handleAnswerClick);
  answer2.addEventListener("click", handleAnswerClick);
  answer3.addEventListener("click", handleAnswerClick);
  answer4.addEventListener("click", handleAnswerClick);
}

function handleAnswerClick(arg1) {
  var selectedAnswer = arg1.target.textContent;

  if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
    correctAnswers++;
    correctAnswerCount.textContent = "Correct Answers: " + correctAnswers;
  } else
  {
    timeLeft = timeLeft - 5;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < totalQuestions) {
    displayQuestion(currentQuestionIndex);
  } else {
    gameOverFunction();
  }
}

function displayQuestion(questionNumber) {
  var currentQuestion = questions[questionNumber];
  questionList.style.setProperty("display", "block");
  questionText.textContent = currentQuestion.question;
  answer1.textContent = currentQuestion.answer1;
  answer2.textContent = currentQuestion.answer2;
  answer3.textContent = currentQuestion.answer3;
  answer4.textContent = currentQuestion.answer4;
}

function gameOverFunction() {
  questionList.style.setProperty("display", "none");
  if(correctAnswers >= localStorage.getItem('High_Score'))
  {
    initials = prompt("Save your high score by entering your initials");
    localStorage.setItem('High_Score', correctAnswers);
    localStorage.setItem('initials', initials);
  }
  highScore.textContent = "High Score: " + localStorage.getItem('High_Score') + ", Initials: " + localStorage.getItem('initials');
  highScore.style.setProperty("display", "block");
}

function startTimer() {
  timerRunning = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timer.textContent = "Time Left: " + timeLeft;
  } else {
    clearInterval(timerRunning);
    gameOverFunction();
  }
}


questionList.style.setProperty("display", "none");
startButton.addEventListener("click", startedGame);









