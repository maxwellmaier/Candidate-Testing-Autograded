// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//TODO: Variables for Part 2
// TODO 1.1b: Ask for candidate's name //
// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

// if (candidateAnswer == correctAnswer) {
//   console.log("Great Job!")
// } else {
//   console.log("Nice try.")
// }  // used to grade a single question quiz

const input = require("readline-sync");

let candidateName = "";

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  candidateName = input.question("What is your name?");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
  return candidateAnswers
}

  function gradeQuiz(candidateAnswers) {
    let correctCount = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i].toUpperCase() === candidateAnswers[i].toUpperCase()) {
            correctCount++;
        }
    }

    // Return the number of correct answers
    return correctCount = (correctCount / correctAnswers.length) * 100;
}

  // console.log(candidateAnswers);
  // console.log(correctAnswers);
  // let grade; //TODO 3.2 use this variable to calculate the candidates score.
  
  // if (candidateAnswers == correctAnswers) {
  //   console.log("Good Job");
  // } else {
  //   console.log("Try again");

    // return grade;
//   }
// }

function runProgram() {
  askForName();
  console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers);
  console.log(candidateAnswers);
  
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};
