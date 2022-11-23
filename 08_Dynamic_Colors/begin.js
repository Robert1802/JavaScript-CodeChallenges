/*
  WRITE YOUR SOLUTION HERE
*/

// // No Closure
// function makeBodyBlue() {
//   document.body.style.background = "#0f62fe";
// }

// function makeBodyPink() {
//   document.body.style.background = "#ff7eb6";
// }

// function makeBodyGreen() {
//   document.body.style.background = "#42be65";
// }

// document.querySelector("#blue").addEventListener("click", makeBodyBlue);
// document.querySelector("#pink").addEventListener("click", makeBodyPink);
// document.querySelector("#green").addEventListener("click", makeBodyGreen);

 // With Closure
function changeColor(color) {
  return function () {
    document.body.style.background = color;
  };
}

const bgColorBlue = changeColor("#0f62fe");
const bgColorPink = changeColor("#ff7eb6");
const bgColorGreen = changeColor("#42be65");

document.querySelector("#blue").addEventListener("click", bgColorBlue);
document.querySelector("#pink").addEventListener("click", bgColorPink);
document.querySelector("#green").addEventListener("click", bgColorGreen);