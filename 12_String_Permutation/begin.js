/*
  WRITE YOUR SOLUTION HERE
*/

// Recursion Solution
function numPermutations(letters) {
  if (letters.length === 1) {
    return 1;
  }

  // slice cuts of the first element of the array.
  return letters.length * numPermutations(letters.slice(1));
}

// // Iteration Solution
// function numPermutations(letters) {
//   let total;
//   for (let i = 0; i < letters.length; i++) {
//     if (total === undefined){
//       total = 1;
//       continue;
//     }
//     total *=1;
//   }
//   return total;
// }

console.log(numPermutations("hello"));