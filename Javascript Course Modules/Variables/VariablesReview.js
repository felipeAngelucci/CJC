/*
let is the best to declare a variable when it can be reassigned, and const is the best way to declare a variable with a constant value.

Variables that have not been initialized store the primitive data type undefined.

The + operator is used to concatenate strings including string values held in variables.

In ES6, template literals use backticks ` and ${} to interpolate values into a string.

The typeof keyword returns the data type (as a string) of a value.
*/
const unitedStatesCapital = 'Washington, D.C.';
const italyCapital = 'Rome';
const germanyCapital = 'Berlin';
const franceCapital = 'Paris';
// Geneva is not the capital of Switzerland. I am manipulating the value of Switzerland's capital as practice.
let switzerlandCapital = 'Geneva';
console.log(switzerlandCapital);
switzerlandCapital = 'Bern';
console.log(switzerlandCapital);
let totalCapitals = 5;
let areCapitals = true;

// \n creates a new line to separate outputted strings in a variable that is logged to the console.

// Concatenating strings of different data types
let concatenatedStatement = '\nThe ' + totalCapitals + ' capitals used in this program include ' + unitedStatesCapital + ', ' + italyCapital + ', ' + germanyCapital + ', ' + franceCapital + ', ' + 'and ' + switzerlandCapital + '.' + ' All of these cities are ' + areCapitals + ' ' + 'capitals.';

console.log(concatenatedStatement);

// Interpolating multiple variables into a string that is printed
let interpolatedStatement = `\nInterpolated statement: The ${totalCapitals} capitals used in this program include ${unitedStatesCapital}, ${italyCapital}, ${germanyCapital}, ${franceCapital}, and ${switzerlandCapital}. All of these cities are ${areCapitals} capitals.`;
console.log(interpolatedStatement);
// Interpolated statements are much easier to read and a better method of displaying data in string format.

// Testing what happens when I use console.log on variables declared by const, let, and var before they are defined.
/*
console.log(test1);
const test1 = 'test1initiated';
console.log(test2);
let test2 = 'test1initiated';
console.log(test3);
var test3 = 'test1initiated';
*/
// Results of experiment: const and let yield errors. Var doesn't yield an error and doesn't print until after it is set.
console.log(test3);
var test3 = 'test1initiated';
console.log(test3);
// Returning the data type of test3 variable (string).
console.log(typeof test3);
// Returning the data type of the resulting value after concatenating variables that contain two or more different data types.
console.log(typeof test3 + ' ' + typeof areCapitals + ' ' + typeof totalCapitals + ' ' + typeof areCapials);
// The misspelling I made of areCapitals, areCapials, serves the purpose of showing what typeof returns if no such variable exists: It returns undefined for the undefined variable that doesn't exist. This is a good thing to know when debugging and seeing that a variable that should return a value returns undefined instead.
