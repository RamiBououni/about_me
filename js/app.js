'use strict';

var score = 0;
var correctQuestions = 0;

var guest = prompt('Welcome to my guessing game!\n\nWhat is your name?');

var firstName = prompt('Hello ' + guest + '!\n\nFirst question: Is my name: Rami?').toLowerCase();
console.log('My name is Rami, and you guessed ' + firstName + '.');
firstQuestion();

function firstQuestion() {
  if (firstName === 'yes' || firstName === 'y') {
    alert('Great job, my name is Rami.');
    score += 10;
    correctQuestions++;
    console.log('Q1: Number of correct answers: ' + correctQuestions + '.');
    console.log('Q1: Your score is ' + score + '.');
  } else {
    alert('Oh oh, this is a bad start!');
    console.log('Q1: Your score is ' + score + '.');
  }
}

var age = prompt('Am I 32?');
console.log('Do you think I am 32? you guessed: ' + age + '.');
secondQuestion();

function secondQuestion() {
  if (age == 'yes' || age == 'y') {
    alert('That\'s right, I am 32.');
    score += 10;
    correctQuestions++;
    console.log('Q2: Number of correct answers: ' + correctQuestions + '.');
    console.log('Q2: Your score is ' + score + '.');
  } else {
    alert('Wrong answer, I am 32 years old.');
    console.log('Q2: Your score is ' + score + '.');
  }
}

var origin = prompt('Am I from Tunisia?').toLowerCase();
console.log('I am originally from Tunisia, you guessed ' + origin + '.');

thirdQuestion();

function thirdQuestion() {
  if (origin === 'yes' || origin === 'y') {
    alert('You are doing a great job, I am originally from Tunisia.');
    score += 10;
    correctQuestions++;
    console.log('Q3: Number of correct answers: ' + correctQuestions + '.');
    console.log('Q3: Your score is ' + score + '.');
  } else {
    alert('Come on man, I thought you knew me!');
    console.log('Q3: Your score is ' + score + '.');
  }
}


var team = prompt('Is my favorite team Real Madrid?').toLowerCase();
console.log('Is my favorite team is Real Madrid? You guessed ' + team + '.');

fourthQuestion();

function fourthQuestion() {
  if (team === 'no' || team === 'n') {
    alert('Wow, we probably know each other. I like FC Barcelona.');
    score += 10;
    correctQuestions++;
    console.log('Q4: Number of correct answers: ' + correctQuestions + '.');
    console.log('Q4: Your score is ' + score + '.');
  } else {
    alert('Nope. But you must be a Real Madrid fan!');
    console.log('Q4: Your score is ' + score + '.');
  }
}


var goldQuestion = prompt('You can get 30 points if you answer this question right:\n\nDo I have 2 brothers?').toLowerCase();
console.log('I have only 2 brothers, you guessed ' + goldQuestion + '.');

fifthQuestion();

function fifthQuestion() {
  if (goldQuestion == 'yes' || goldQuestion == 'y') {
    alert('You must be one of my friends. I have 2 brothers.');
    score += 30;
    correctQuestions++;
    console.log('Q5: Number of correct answers: ' + correctQuestions + '.');
    console.log('Q5: Your score is ' + score + '.');
  } else {
    alert('You think I have 10 brothers or something? It\'s only 2.');
    console.log('Q5: Your score is ' + score + '.');
  }
}

// 6Th question:

var numbersOfTries = 4;

sixthQuestion();

function sixthQuestion() {
  while (numbersOfTries > 0) {
    var guess = prompt('I love soccer, so I\'m going to ask you about my favorite sport:\n\nHow many time has Germany won the World cup? Guess a number! \n\nOnly 4 trials allowed');
    console.log('Q6: you guessed ' + guess);
    if (guess == 4) {
      alert('You got it right: Germany won the world cup 4 times, you got 40 more points!');
      score += 40;
      correctQuestions++;
      numbersOfTries = -1;
      console.log('Q6: Number of correct answers: ' + correctQuestions + '.');
      console.log('Q6: Your score is ' + score + '.');
    } else if (guess > 4) {
      numbersOfTries--;
      alert('Your guess is too high! You have ' + numbersOfTries + ' left.');
      console.log('Q6: Numbers of tries left = ' + numbersOfTries + '.');
    } else if (guess < 4) {
      numbersOfTries--;
      alert('Your guess is too low! You have ' + numbersOfTries + ' left.');
      console.log('Q6: Numbers of tries left = ' + numbersOfTries + '.');
    } else {
      numbersOfTries--;
      alert('Try again!');
      console.log('Q6: Numbers of tries left= ' + numbersOfTries + '.');
    }
  }
}
// Question 7:
var correctAnswers = ['france', 'italy', 'oman'];

var countriesTrials = 0;

seventhQuestion();

function seventhQuestion() {
  while (countriesTrials < 6) {
    var guessedAnswer = prompt('Can you guess which countries I visited?\n\nYou have 6 tries to get a single correct answer').toLowerCase();
    console.log('Q7: you guessed ' + guessedAnswer);
    if (guessedAnswer === correctAnswers[0] || guessedAnswer === correctAnswers[1] || guessedAnswer === correctAnswers[2]) {
      alert('Good job! Here are the countries I visited:\n' + correctAnswers + '.');
      score += 10;
      correctQuestions++;
      countriesTrials = 7;
      console.log('Q7: Number of correct answers: ' + correctQuestions + '.');
      console.log('Q7: Your score is ' + score + '.');
    } else {
      countriesTrials++;
      alert('Try again! you guessed ' + countriesTrials + ' out of 6.');
      console.log('Q7: Numbers of tries = ' + countriesTrials + ' out of 6.');
    }
  }
}
alert('Thank you for taking the time to play this game with me! Check out your score next!');
//keeping score and number of correct questions.
alert('Good job ' + guest + ' Your score is: ' + score + ' and you got ' + correctQuestions + ' out of 7 questions correct');
console.log('Total correct answers: ' + correctQuestions + '.');
console.log('Total score is ' + score + '.');
