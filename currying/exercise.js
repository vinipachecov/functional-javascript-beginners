// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array,
// to studentFeedback (as shown in comments below)

const gradings = {
  a: "Excellent job",
  b: "Nice job",
  c: "Well Done",
  d: "What happened",
  f: "Not good"
};

function getGrade(student) {
  if (student.grade >= 90) {
    return `Excellent Job ${student.name}, you got an a`;
  } else if (student.grade >= 80) {
    return `Nice Job ${student.name}, you got an b`;
  } else if (student.grade >= 70) {
    return `Well done ${student.name}, you got an c`;
  } else if (student.grade >= 60) {
    return `What happened ${student.name}, you got an d`;
  } else if (student.grade >= 50) {
    return `Not good ${student.name}, you got an f`;
  }
}

function studentToGrade(gradings) {
  return function(student) {
    return getGrade(student);
  };
}

const studentGrades = [
  { name: "Joe", grade: 88 },
  { name: "Jen", grade: 94 },
  { name: "Steph", grade: 77 },
  { name: "Allen", grade: 60 },
  { name: "Gina", grade: 54 }
];

console.log(studentGrades.map(getGrade));
/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
];
*/

// Solution found at:
// https://jsbin.com/vaqomiy/1/edit?js,console
