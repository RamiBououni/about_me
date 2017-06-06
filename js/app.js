'use strict';

var score = 0;
alert('Welcome to my guessing game!');

var firstName = prompt('What is my name?').toLowerCase();
if(firstName === 'rami'){
  alert('Great job, my name is Rami.');
  score += 10;
}else{
  alert('Wrong answer, my name is Rami.');
}

var age = prompt('How old am I?');
if(age == 32){
  alert('That\'s right, I am 32.');
  score += 10;
}else{
  alert('Wrong answer, I am 32 years old.');
}

var origin = prompt('Where do I come from?').toLowerCase();
if(origin === 'tunisia'){
  alert('You are doing a great job, I am originally from Tunisia.');
  score += 10;
}else{
  alert('That\'s not correct.');
}

var team = prompt('What is my favorite soccer team?').toLowerCase();
if(team === 'barcelona'){
  alert('Wow, we probably know each other. I like FC Barcelona.');
  score += 10;
}else{
  alert('Wrong answer!');
}

var goldQuestion = prompt('If you answer this question right, you will get 3 times the score:\nHow many brothers do I have? Hint: Less than 5.');
if(goldQuestion == 2){
  alert('You must be one of my friends. I have 2 brothers.');
  score += 30;
}else{
  alert('Sorry, try again!');
}

alert('Thank you for taking the time to play this game with me!');

var choice = confirm('Do you want to know your score?');
if (choice == true){
  alert('Your score is: ' + score);
}else{
  alert('See you next time!');
}
