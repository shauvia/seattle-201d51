'use strict';

var container = document.getElementsByTagName('section')[0];
var img1 = document.getElementById('image-1');

img1.addEventListener('click', clicker);
container.addEventListener('click', clicker);

function clicker(e) {
  e.stopImmediatePropagation();
  console.log(e.target);
}