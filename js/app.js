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

var goldQuestion = prompt('Do I have 2 brothers?');
console.log('How many brothers do I have? is it 2?');
if(goldQuestion == 'yes' || goldQuestion == 'y'){
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
