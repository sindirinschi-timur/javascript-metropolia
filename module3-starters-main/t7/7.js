'use strict';
const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

trigger.addEventListener('mouseover', () => {
  target.src = 'img/picB.jpg';
  target.alt = 'example - B';
});

trigger.addEventListener('mouseout', () => {
  target.src = 'img/picA.jpg';
  target.alt = 'example - A';
});
