const images = [
  '1.jpg',
  '2.jpeg',
  '3.jpg',
  '4.jpeg'
];

let index = 0;
const bg = document.getElementById('bg');

function changeBackground() {
  bg.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

setInterval(changeBackground, 4000);
changeBackground();

function loadSignupPage() {
  window.location.href = 'login.html';
}
function loadSignupPage2() {
  window.location.href = 'earnpoint.html';
}