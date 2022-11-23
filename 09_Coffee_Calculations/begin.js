/*
  WRITE YOUR SOLUTION HERE
*/

const coffeePrice = 1.25;
let totalBill = 0;

function coffeeCalculator (coffeeArray) {
  let coffeeSum = coffeeArray.reduce(
    (totalCoffees, individualCoffee) => (totalCoffees += individualCoffee)
  )
  totalBill = coffeeSum * coffeePrice
  return `The total bill was ${totalBill}`;
}

console.log(coffeeCalculator([2, 5, 7, 1, 4]));