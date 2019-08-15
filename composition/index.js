const R = require("ramda");

const sentence = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const wordList = R.split(" ", sentence);
// console.log(R.length(R.split(" ", sentence)));

const countWords = R.compose(
  R.length,
  R.split
);

console.log(countWords(" ", sentence));

const countWords2 = R.compose(
  R.length,
  R.split(" ")
);

console.log("countwords 2 = ", countWords2(sentence));

const countWords3 = R.pipe(
  R.split(" "),
  R.length
);

console.log("countwords 3 = ", countWords2(sentence));
