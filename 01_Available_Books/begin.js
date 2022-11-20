/*
  WRITE YOUR SOLUTION HERE
*/

class Book {
  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author,
    this.ISBN = ISBN,
    this.numCopies = numCopies
  }

  get availability(){
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low Stock: " + this.numCopies;
    } 
    return "In Stock: " + this.numCopies
  }

  sell(numSold = 1){
    if(this.numCopies >= numSold){
      this.numCopies = this.numCopies - numSold
    } else {
      console.log("The stock is not enough to sell " + numSold +", there are only " + this.numCopies + " left!")
    }
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

const CleanCode = new Book("Clean Code", "Rober Martin", 123919, 2);
// Check how many you have
console.log(CleanCode.availability);
// Buy some for the stock
CleanCode.restock(12);
console.log(CleanCode.availability);
// Sell some books
CleanCode.sell(17);
console.log(CleanCode.availability);