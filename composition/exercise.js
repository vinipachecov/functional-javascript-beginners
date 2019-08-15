// Count how many digits there are in the following
// sentence, using functional composition

// NOTE: If you get stuck, you can get some hints from
// the following jsbin:
// https://jsbin.com/jokefus/2/edit?js,console
// my solution is here: https://jsbin.com/duxewec/1/edit?js,console
const R = require("ramda");
const sentence =
  "PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).";

// function isNumber(array) {
//   return array.map(elem => {
//     if (elem)
//   })
// }
const isNum = number => parseInt(number) >= 0 && parseInt(number) <= 9;
const numbersInString = R.pipe(
  R.split(""),
  R.filter(isNum),
  R.length
);
console.log(sentence.split("").filter(isNum).length);
console.log(numbersInString(sentence));
// const numbersInString = expect(numbersInString(sentence)).toBe(7); // add function composition here

console.log("If you see this printed in the console, the test passed!");
