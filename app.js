// import functions and grab DOM elements
import {  } from './utils.js';
// initialize state
const shoot = document.querySelector('#shoot-button');
const feedbackDiv = document.querySelector('#feedback-div');
const winTotalDiv = document.querySelector('#total-wins');
const lossTotalDiv = document.querySelector('#total-losses');

console.log(shoot, feedbackDiv, winTotal, lossTotal);

let winTotal = 0;
let lossTotal = 0;
// set event listeners 
shoot.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input:checked');
    const userThrow = selectedRadio.value;
    let autoThrow = Math.ceil(Math.random() * 3);

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
