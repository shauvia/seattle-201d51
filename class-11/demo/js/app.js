'use strict';

// Create the figure/image tags dynamically with "The formula"
var section = document.getElementsByTagName('section')[0];
var figure = document.createElement('figure');
var imageElement = document.createElement('img');
var imageCaption = document.createElement('figcaption');
section.appendChild(figure);
figure.appendChild(imageElement);
figure.appendChild(imageCaption);

// Or ... use a static tag with an ID from the html page
// var imageElement = document.getElementById('image');
// var imageCaption = document.getElementById('caption');


// Play/Pause a noise on click
var player = document.getElementById('player');
var playing = true;


var imagesToBeLoaded = [
  '/assets/images/baldy1.bmp',
  '/assets/images/baldy2.bmp',
  '/assets/images/baldy3.png',
  '/assets/images/baldy4.bmp',
  '/assets/images/baldy5.png',
  '/assets/images/baldy6.bmp',
  '/assets/images/baldy7.bmp',
];

function Image(name, url) {
  this.name = name;
  this.src = url;
  Image.list.push(this);
}
Image.list = [];


function loadImageFromArray() {
  for (var i = 0; i < imagesToBeLoaded.length; i++) {
    new Image(`Image-${i}`, imagesToBeLoaded[i]);
  }
}

function loadImages() {
  new Image('Baldy1', '/assets/images/baldy1.bmp');
  new Image('Baldy2', '/assets/images/baldy2.bmp');
  new Image('Baldy3', '/assets/images/baldy3.png');
  new Image('Baldy4', '/assets/images/baldy4.bmp');
  new Image('Baldy5', '/assets/images/baldy5.png');
  new Image('Baldy6', '/assets/images/baldy6.bmp');
  new Image('Baldy7', '/assets/images/baldy7.bmp');

  console.log(Image.list);
}

function showRandomImage() {

  // Random, but make sure we haven't seen it before ...
  var randomNumber = Math.floor(Math.random() * Image.list.length);

  // <img id="image" src="" />
  // Change what's being shown
  imageElement.src = Image.list[randomNumber].src;
  imageCaption.textContent = Image.list[randomNumber].name;

  // Update how many times it got shown

  // Update how many times it got clicked

  if (playing) {
    player.pause();
    playing = false;
  }
  else {
    player.play();
    playing = true;
  }


}

// imageElement click handler
imageElement.addEventListener('click', showRandomImage);

// loadImagesFromArray();

loadImages();

showRandomImage();
