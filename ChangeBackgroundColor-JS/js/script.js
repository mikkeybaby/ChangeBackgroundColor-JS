// Define Selector Variables
const button = document.querySelector('button');
const body = document.querySelector('body');
const btntext = document.getElementById('btntxt');
const colors = ['blue', 'red', 'pink', 'purple', 'black', 'white'];

//set base backgroundColor & Create Event Listener
body.style.backgroundColor = 'teal';
btntext.style.color = 'white';
btntext.style.backgroundColor = 'green';
button.addEventListener('click', changeBackground);

//Create changeBackground function
function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
}