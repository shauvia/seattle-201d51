'use strict';

var content = document.getElementsByClassName('content')[0];

var door = document.getElementsByClassName('door')[0];


door.addEventListener('click', toggleDoor);

function toggleDoor() {
  var classes = door.classList;
  classes.toggle('open');
}

localStorage.setItem('class', 'almost over');