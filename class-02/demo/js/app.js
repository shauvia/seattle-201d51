'use strict';

var answers = [];

var awesome = confirm('Confirm that you are awesome.');

answers.push(awesome);

if (awesome) {
  alert('Congratulations you\'re awesome');
}
else {
  alert('Maybe someday...');
}

var city = prompt('What city are you from?');
answers.push(city);

city = city.toLowerCase();

if (city === 'cape may') {
  console.log('Lets go fishin');
}

console.log(answers);