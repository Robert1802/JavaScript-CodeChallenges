/*
  WRITE YOUR SOLUTION HERE
*/

function foodTruckFestival(menu) {
  // combine the arrays into a single array
  let flatMenu = menu.flat();

  // Create Set() variable
  let newMenu = new Set();
  flatMenu.forEach(menuItem => {
    // Set().add adds a new item to an array without repeating values
    newMenu.add(menuItem);
  });

  const menuNode = document.querySelector("#combined-menu");
  for (let item of newMenu){
    let foodNode = document.createElement("li");
    foodNode.innerText = item;
    menuNode.appendChild(foodNode);
  }
}

foodTruckFestival([["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]);