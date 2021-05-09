// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from "./utils.js";
// initialize state
const shoot = document.querySelector("#shoot-button");
const reset = document.querySelector("#reset-button");
const feedbackDiv = document.querySelector("#feedback-div");
const winTotalDiv = document.querySelector("#total-wins");
const lossTotalDiv = document.querySelector("#total-losses");
const drawTotalDiv = document.querySelector("#total-draws");
const resetTotalDiv = document.querySelector("#total-reset");

let winTotal = 0;
let lossTotal = 0;
let drawTotal = 0;
let resetTotal = 0;
// set event listeners
shoot.addEventListener("click", () => {
  const selectedRadio = document.querySelector("input:checked");
  const userThrow = selectedRadio.value;
  resetTotalDiv.textContent = resetTotal;
  let autoThrow = getRandomThrow();

  const result = didUserWin(userThrow, autoThrow);
  // set a variable equal to the string retured from did user win, passing in userthrow and autothrow

  if (result === "win") {
    winTotal++;
    winTotalDiv.textContent = winTotal;
  }
  if (result === "lose") {
    lossTotal++;
    lossTotalDiv.textContent = lossTotal;
  }
  if (result === "draw") {
    drawTotal++;
    drawTotalDiv.textContent = drawTotal;
  }
  //when added to html, can put the variable result straight into my html (.textcontent), + to add "you" (a sting and a var)
});
// get user input
reset.addEventListener("click", () => {
  // use user input to update state
  winTotal = 0;
  lossTotal = 0;
  drawTotal = 0;
  resetTotal++;
  // update DOM to reflect the new state
  winTotalDiv.textContent = winTotal;
  lossTotalDiv.textContent = lossTotal;
  drawTotalDiv.textContent = drawTotal;
  resetTotalDiv.textContent = resetTotal;
  //grab radio button
  let rRadio = document.querySelector("#rock");
  let pRadio = document.querySelector("#paper");
  let sRadio = document.querySelector("#scissors");
  //deselect radio
  rRadio.checked = false;
  pRadio.checked = false;
  sRadio.checked = false;
});
