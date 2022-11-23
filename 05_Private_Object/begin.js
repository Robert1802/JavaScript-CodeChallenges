/*
  WRITE YOUR SOLUTION HERE
*/

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "user",
  [password]: "pass",
  age: 29
};

// Private
console.log(user.username)
// Private
console.log(user.password)
// Public
console.log(user.age)