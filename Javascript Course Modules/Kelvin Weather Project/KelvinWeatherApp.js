// This is the temperature conversion function to streamline the conversion process and make it more efficient. It encapsulates the equations in a function that makes the process simpler and reusable.
function convertTemperature(kelvin) {
  // The Celsius amount is Kelvin subtracted by 273.
  const celsius = kelvin - 273;
  // This equation calculates Fahrenheit and rounds the decimals after the integer value of Fahrenheit.
  const fahrenheit = Math.floor(celsius * (9/5) + 32);
  // The Newton amount is Celsius * (33/100).
  const newton = Math.floor(celsius * (33/100));
  // -------------------------------
  // Further improving this Kelvin Weather app to utilize user input functionality and other features with my own ideas of what to code next.
  // This block of code thanks the user for inputting a value and displays the conversion results. String interpolation is utilized to make the code easier to read.
  console.log(`Thank you for providing ${kelvin} degrees Kelvin as your value to be converted.`)
  console.log(`${kelvin} Kelvin is ${fahrenheit} degrees Fahrenheit.`);
  console.log(`${kelvin} Kelvin is ${celsius} degrees Celsius.`);
  console.log(`${kelvin} Kelvin ${newton} degrees Newton.`);
// -------------------------------
}

// The user is asked to enter the Kelvin value. Ex: 315.
const kelvin = prompt('Please enter a value in Kelvin: ');

// This statement calls the function to complete the equations and display the conversions to the user.
convertTemperature(kelvin);
