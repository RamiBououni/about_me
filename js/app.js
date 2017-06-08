'use strict';

var score = 0;
var correctQuestions = 0;

var guest = prompt('Welcome to my guessing game! What is your name?');

var firstName = prompt('Hello ' + guest + '!\nFirst question: Is my name: Rami?').toLowerCase();
console.log('Guess my first name, is it Rami?');
firstQuestion ();
function firstQuestion () {
  if (firstName === 'yes' || firstName === 'y') {
    alert('Great job, my name is Rami.');
    score += 10;
    correctQuestions++;
  } else {
    alert('Wrong answer!');
  }
}

var age = prompt('Am I 32?');
console.log('Do you think I am 32?');
secondQuestion();
function secondQuestion() {
  if (age == 'yes' || age == 'y') {
    alert('That\'s right, I am 32.');
    score += 10;
    correctQuestions++;
  } else {
    alert('Wrong answer, I am 32 years old.');
  }
}

var origin = prompt('Am I from Tunisia?').toLowerCase();
console.log('Do you I am originally from Tunisia?');
thirdQuestion ();
function thirdQuestion() {
  if (origin === 'yes' || origin === 'y') {
    alert('You are doing a great job, I am originally from Tunisia.');
    score += 10;
    correctQuestions++;
  } else {
    alert('That\'s not correct.');
  }
}


var team = prompt('Is my favorite team Real Madrid?').toLowerCase();
console.log('Is my favorite team is Real Madrid? or Maybe it\'s Barcelona...You guess!');
fourthQuestion();
function fourthQuestion () {
  if (team === 'no' || team === 'n') {
    alert('Wow, we probably know each other. I like FC Barcelona.');
    score += 10;
    correctQuestions++;
  } else {
    alert('Wrong answer!');
  }
}


var goldQuestion = prompt('You can get 3 times the score if you answer this question right:\nDo I have 2 brothers?').toLowerCase();
console.log('How many brothers do I have? is it 2?');
fifthQuestion();
function fifthQuestion () {
  if (goldQuestion == 'yes' || goldQuestion == 'y') {
    alert('You must be one of my friends. I have 2 brothers.');
    score += 30;
    correctQuestions++;
  } else {
    alert('Sorry, try again!');
  }
}

// 6Th question:
// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

var guess = parseInt(prompt('I love soccer, so I\'m going to ask you about my favorite sport:\nHow many time has Germany won the World cup? Guess a number! \n\nOnly 4 trials allowed'));
//Germany won 4 times the world cup
var numbersOfTries = 1;
sixthQuestion();
function sixthQuestion() {
  if (guess === 4) {
    alert('You got it right: Germany won the world cup 4 times, you got 40 more points!');
    score += 40;
    correctQuestions++;
  } else {
    while (numbersOfTries <= 3) {
      if (guess > 4) {
        alert('Your guess is too high! Try again!');
        guess = parseInt(prompt('How many time has Germany won the World cup? Guess a number!'));
        numbersOfTries++;
      } else if (guess < 4) {
        alert('Your guess is too low! Try again!');
        guess = parseInt(prompt('How many time has Germany won the World cup? Guess a number!'));
        numbersOfTries++;
      } else {
        alert('You got it right: Germany won the world cup 4 times, you got 40 more points!');
        score += 40;
        correctQuestions++;
        numbersOfTries = 3; //cant use break; to break out of the while loop so I had to set up numbers of tries to 3 to break out of the while loop
      }
    }
  }
}


// Question 7:
// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.

var correctAnswers = ['france', 'italy', 'oman'];

var guessedAnswer = prompt('Can you guess which countries I visited? You have 6 tries to get a single correct answer').toLowerCase();
//Germany won 4 times the world cup
var countriesTrials = 0;

seventhQuestion();

function seventhQuestion() {
  var correct = false;
  while (countriesTrials < 6 && !correct) {

    if (guessedAnswer === correctAnswers[0] || guessedAnswer === correctAnswers[1] || guessedAnswer === correctAnswers[2]) {
      alert('Good job! Here are the countries I visited:\n ' + correctAnswers);
      score += 10;
      correctQuestions++;
      correct = true;
    } else {
      alert('Try again!');
      guessedAnswer = prompt('Can you guess which countries I visited?');
      countriesTrials++;
    }
  }
}



alert('Thank you for taking the time to play this game with me! Next is your score!');

//keeping score and number of correct questions.

alert('Good job ' + guest + ' Your score is: ' + score + ' and you got ' + correctQuestions + ' out of 7 questions correct');
