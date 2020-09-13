'use strict';

let face = document.querySelector('.face');

function winkEye() {
  face.innerHTML = ';)';
}

function unwinkEye() {
  face.innerHTML = ':)';
}

face.addEventListener('mouseover', winkEye);
face.addEventListener('mouseout', unwinkEye);