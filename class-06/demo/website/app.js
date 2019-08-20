'use strict';

var john = {
  name: 'John Cokos',
  pets: ['Rosie', 'Luna'],
};

var title = document.getElementById('pageName');
title.textContent = john.name;

// Find the UL
var elementList = document.getElementById('list');



// For john.children.length
for (var i = 0; i < john.pets.length; i++) {

  // Create an LI
  var newListItem = document.createElement('li');

  // Set the textContent to the name of the child
  newListItem.textContent = john.pets[i];

  // Append LI as a Child to UL
  elementList.appendChild(newListItem);
}