/*
  WRITE YOUR SOLUTION HERE
*/

function checkPassword(password) {
  let oneLowerCaseLetter = /(?=.+[a-z])/;
  let oneUpperCaseLetter = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  let minimumEightCharacters = /(?=.{8,})/;

  // RegExp.test(string) checks if the string follows the rule of the regex
  let isValid = 
  oneLowerCaseLetter.test(password) &&
  oneUpperCaseLetter.test(password) &&
  oneDigit.test(password) &&
  oneSpecialCharacter.test(password) &&
  minimumEightCharacters.test(password);

  // Ternary expression
  return isValid
    ? "Your password is valid"
    : "Your password is invalid, try again";

}

// Test False
console.log(checkPassword("abc"));
// Test True
console.log(checkPassword("9Ab!4567"));