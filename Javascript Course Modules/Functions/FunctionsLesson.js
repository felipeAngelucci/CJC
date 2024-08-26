// A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
// Example of a function below
function greetWorld() {
  console.log('Hello, World!');
}
// Hoisting is when a function is called before it is defined. Hoisting isn't usually a good practice but it's a feature in JavaScript that can be used.
// for example:
countToThree();
function countToThree() {
  console.log('One, two, three.');
}
