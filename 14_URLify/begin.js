/*
  WRITE YOUR SOLUTION HERE
*/


function urlify(blogTitle) {
  // Create regex of forbidden characters
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g; // /[regex]/
  // const punctuation = new RegExp('.,/#!$%^&*;:{}=-_`~()\'"', 'g'); // "regex"
  // const punctuation = new RegExp(/.,\/#!$%^&*;:{}=-_`~()'"/, 'g'); // "regex"

  // replace ponctuations on the string with ""
  const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
  // replace space with - and remove trailing and leading
  return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming!!!"));
console.log(urlify("I've got a new job :)"));