/*
  WRITE YOUR SOLUTION HERE
*/

// Generator
function* getStop(){
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}

// Atribute to the nycTrainline variable
const nycTrainline = getStop();
const nextStopButton = document.querySelector("#next-stop");
// Every click activates method next
nextStopButton.addEventListener("click", () => {
  let currStop = nycTrainline.next();
  if (currStop.done) {
    console.log("We made it!");
    nextStopButton.setAttribute("disabled", true);
  } else {
    console.log(currStop.value);
  }
});