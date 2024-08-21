// This statement sets the myAge variable to 18.
let myAge = 18;
// This statement sets the earlyYears variable to 2 and is declared with let since it will change.
let earlyYears = 2;
// These 2 statements below multiply the earlyYears value by 10.5 and let the result of myAge -= 2 be 16 for laterYears. 
earlyYears *= 10.5;
let laterYears = myAge -= 2;
// Returning myAge to 18 years old so the information isn't inaccurate by using a different form of assigning the value other than += to assign the value.
myAge = myAge + 2;
// This statement multiplies the 16 years after the first 2 years by 4.
laterYears *= 4;
// This statement adds the earlyYears and laterYears variables to get my age in dog years.
let myAgeInDogYears = earlyYears + laterYears;
// This statement stores my name in lower case.
const myName = 'Felipe'.toLowerCase();
// This statement displays my name and age in dog years by utilizing string interpolation to display the data.
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`)
