/*
  WRITE YOUR SOLUTION HERE
*/

function getStudents(classroom) {
  // Atribute
  //  hasTeachingAssistant <- hasTeachingAssistant
  //  classList <- classList
  let { hasTeachingAssistant, classList } = classroom;

  if (hasTeachingAssistant) {
    // destructure classList into teacher, assistant and students
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(getStudents(  {
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
}));