'use strict';

var canvas = document.getElementById('placemat');
var context = canvas.getContext('2d');

var pos = { x: 0, y: 0 };

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) { console.log('who cares'); return; }

  context.beginPath();
  context.lineWidth = 3;
  context.lineCap = 'round';
  context.strokeStyle = '#000';
  context.moveTo(pos.x, pos.y);
  setPosition(e);
  context.lineTo(pos.x, pos.y);
  context.stroke();
}

function drawSquare() {
  context.fillRect(25, 25, 200, 200);
  context.clearRect(27, 27, 196, 196);
}

function drawTriangle(height, width, top, left) {
  context.beginPath();
  context.moveTo(top, left);
  context.lineTo(top, width);
  context.lineTo(width, width);
  context.closePath();
  context.lineWidth = 10;
  context.strokeStyle = '#666666';

  context.stroke();

  context.fillStyle = '#ffcc00';
  context.fill();
}

drawSquare();
drawTriangle(200, 150, 10, 10);