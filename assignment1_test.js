const input = require("readline-sync");

let candidateName = "";

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  candidateName = input.question("What is your name?");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
  return candidateAnswers;
}
let correctCount = 0;
function gradeQuiz(candidateAnswers) {
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] == candidateAnswers[i]) {
      correctCount++;
    }
  }
  // Return the number of correct answers
  return correctCount;
}

askForName();
console.log("Hello " + candidateName);
askQuestion();
gradeQuiz(candidateAnswers);
console.log(candidateAnswers);
console.log(correctCount);
