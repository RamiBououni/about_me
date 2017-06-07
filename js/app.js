'use strict';

var score = 0;
var correctQuestions = 0;
var userName = prompt('Welcome to my guessing game! What is your name?');

var firstName = prompt('Is my name: Rami?').toLowerCase();
console.log('Guess my first name, is it Rami?');
if (firstName === 'yes' || firstName === 'y') {
  alert('Great job, my name is Rami.');
  score += 10;
  correctQuestions++;
} else {
  alert('Wrong answer!');
}

var age = prompt('Am I 32?');
console.log('Do you think I am 32?');
if (age == 'yes' || age == 'y') {
  alert('That\'s right, I am 32.');
  score += 10;
  correctQuestions++;
} else {
  alert('Wrong answer, I am 32 years old.');
}

var origin = prompt('Am I from Tunisia?').toLowerCase();
console.log('Do you I am originally from Tunisia?');
if (origin === 'yes' || origin === 'y') {
  alert('You are doing a great job, I am originally from Tunisia.');
  score += 10;
  correctQuestions++;
} else {
  alert('That\'s not correct.');
}

var team = prompt('Is my favorite team Real Madrid?').toLowerCase();
console.log('Is my favorite team is Real Madrid? or Maybe it\'s Barcelona...You guess!');
if (team === 'no' || team === 'n') {
  alert('Wow, we probably know each other. I like FC Barcelona.');
  score += 10;
  correctQuestions++;
} else {
  alert('Wrong answer!');
}

var goldQuestion = prompt('You can get 3 times the score if you answer this question right:\nDo I have 2 brothers?').toLowerCase();
console.log('How many brothers do I have? is it 2?');
if (goldQuestion == 'yes' || goldQuestion == 'y') {
  alert('You must be one of my friends. I have 2 brothers.');
  score += 30;
  correctQuestions++;
} else {
  alert('Sorry, try again!');
}

// 6Th question:
// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

var guess = prompt('I love soccer, so I\'m going to ask you about my favorite sport:\nHow many time has Germany won the World cup? Guess a number! \n\nOnly 4 trials allowed');
//Germany won 4 times the world cup
var numbersOfTries = 1;

if (guess === 4) {
  alert('You got it right: Germany won the world cup 4 times, you got 40 more points!');
  score += 40;
  correctQuestions++;
} else {
  while (numbersOfTries <= 4) {
    if (guess > 4) {
      alert('Your guess is too high! Try again!');
      numbersOfTries++;
      guess = prompt('How many time has Germany won the World cup? Guess a number!');
    } else if (guess < 4) {
      alert('Your guess is too low! Try again!');
      numbersOfTries++;
      guess = prompt('How many time has Germany won the World cup? Guess a number!');
    } else {
      alert('You got it right: Germany won the world cup 4 times, you got 40 more points!');
      score += 40;
      correctQuestions++;
      break;
    }
  }
}

// Question 7:
// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.




alert('Thank you for taking the time to play this game with me! Next is your score!');

alert('Good job ' + userName + ' Your score is: ' + score + ' and you got ' + correctQuestions + ' out of 7 questions correct');
