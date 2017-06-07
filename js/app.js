'use strict';

var score = 0;
alert('Welcome to my guessing game!');

var firstName = prompt('Is my name: Rami?').toLowerCase();
console.log('Guess my first name, is it Rami?');
if(firstName === 'yes' || firstName === 'y'){
  alert('Great job, my name is Rami.');
  score += 10;
}else{
  alert('Wrong answer!');
}

var age = prompt('Am I 32?');
console.log('Do you think I am 32?');
if(age == 'yes' || age == 'y'){
  alert('That\'s right, I am 32.');
  score += 10;
}else{
  alert('Wrong answer, I am 32 years old.');
}

var origin = prompt('Am I from Tunisia?').toLowerCase();
console.log('Do you I am originally from Tunisia?');
if(origin === 'yes' || origin === 'y'){
  alert('You are doing a great job, I am originally from Tunisia.');
  score += 10;
}else{
  alert('That\'s not correct.');
}

var team = prompt('Is my favorite team Real Madrid?').toLowerCase();
console.log('Is my favorite team is Real Madrid? or Maybe it\'s Barcelona...You guess!');
if(team === 'no' || team === 'n'){
  alert('Wow, we probably know each other. I like FC Barcelona.');
  score += 10;
}else{
  alert('Wrong answer!');
}

var goldQuestion = prompt('You can get 3 times the score if you answer this question right:\nDo I have 2 brothers?').toLowerCase();
console.log('How many brothers do I have? is it 2?');
if(goldQuestion == 'yes' || goldQuestion == 'y'){
  alert('You must be one of my friends. I have 2 brothers.');
  score += 30;
}else{
  alert('Sorry, try again!');
}

// 6Th question:
// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

var guess = prompt('How many time has Germany won the World cup? Guess a number!');
//Germany won 4 times the world cup
var numbersOfTries;

while(numbersOfTries <= 4){
  if(guess >= 5) {
    alert('Your guess is too high! Try again');
    numbersOfTries++;
  }else if(guess < 4){
    alert('Your guess is too low! Try again');
    numbersOfTries++;
  }else{
    alert('You got it right: Germany won the world cup 4 times, you got 40 more points!');
    score += 40;
  }
}




alert('Thank you for taking the time to play this game with me!');

var choice = confirm('Do you want to know your score?');
if (choice == true){
  alert('Your score is: ' + score);
}else{
  alert('See you next time!');
}
