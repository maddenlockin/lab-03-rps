// import functions and grab DOM elements
import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';
// initialize state
const shoot = document.querySelector('#shoot-button');
const feedbackDiv = document.querySelector('#feedback-div');
const winTotalDiv = document.querySelector('#total-wins');
const lossTotalDiv = document.querySelector('#total-losses');

console.log(shoot, feedbackDiv, winTotalDiv, lossTotalDiv);

let winTotal = 0;
let lossTotal = 0;
// set event listeners 
shoot.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input:checked');
    const userThrow = selectedRadio.value;

    let autoThrow = getRandomThrow();

    const result = didUserWin(userThrow, autoThrow);
    // set a variable equal to the string retured from did user win, passing in userthrow and autothrow

    if (result === 'win') {
        winTotal++;
        winTotalDiv.textContent = winTotal;
    }
    if (result === 'lose') {
        lossTotal++;
        lossTotalDiv.textContent = lossTotal;
    }
    if (result === 'draw') {
        ;
    }
    //when added to html, can put the variable result straight into my html (.textcontent), + to add "you" (a sting and a var)
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
