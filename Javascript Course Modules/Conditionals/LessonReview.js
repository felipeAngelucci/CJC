/*
An if statement checks a condition and will execute a task if that condition evaluates to true.

Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.

The logical and operator, &&, or “and”, checks if both provided expressions are truthy.

The logical operator ||, or “or”, checks if either provided expression is truthy.

The bang operator, !, switches the truthiness and falsiness of a value.
*/

let lessonCompleted = true;
if (lessonCompleted) {
  console.log('The lesson was completed.');
}
else if (lessonCompleted == 'unknown') {
  console.log('The lesson was neither completed or unfinished.');
}
else {
  console.log('The lesson was not completed.');
}
// Practicing with the ternary operator
let ternaryoperator = true;
ternaryoperator ? console.log('The ternary operator has been used.') : console.log('The ternary operator has not been used.');
// Practicing with the switch statement
const LESSONRATING = 4;
switch (LESSONRATING) {
  case 1:
    console.log('The rating for this lesson is 1/5');
    break;
  case 2:
    console.log('The rating for this lesson is 2/5');
    break;
  case 3:
    console.log('The rating for this lesson is 3/5');
    break;
  case 4:
    console.log('The rating for this lesson is 4/5');
    break;
  case 5:
    console.log('The rating for this lesson is 5/5');
    break;
  default:
    console.log('There is no rating for this lesson.');
    break;
}
