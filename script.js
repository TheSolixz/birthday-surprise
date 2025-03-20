// script.js
const card = document.getElementById('card');
const openButton = document.getElementById('openButton');
const photo = document.getElementById('photo');

// Open card with button
openButton.addEventListener('click', () => {
  card.classList.remove('closed');
  card.classList.add('opened');
});

// Expand card with image click
photo.addEventListener('click', () => {
  card.classList.toggle('expanded');
});