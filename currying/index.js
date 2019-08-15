function greet(greeting) {
  return function(name) {
    return `${greeting} ${name}`;
  };
}

console.log(greet("good morning", "james"));

const friends = ["james", "nate", "scoot", "joshua"];

const friendGreetings = friends.map(greet("good morning"));
console.log(friendGreetings);
