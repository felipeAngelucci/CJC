// The Kelvin amount is constant.
const kelvin = 315;
// The Celsius amount is Kelvin subtracted by 273.
let celsius = kelvin - 273;

// The Newton amount is Celsius * (33/100).
let newton = Math.floor(celsius * (33/100));

// This equation calculates Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
// This rounds the decimals after the integer value of Fahrenheit
fahrenheit = Math.floor(fahrenheit);

// Displaying the temperature of Kelvin in comparison to Fahrenheit and Celsius.
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
// Displaying the temperature of Kelvin in Fahrenheit using string interpolation.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Displaying the temperature of kelvin in Celsius using string interpolation.
console.log(`The temperature is ${celsius} degrees Celsius.`);
// Displaying the temperature of Celsius to the Newton scale using the equation.
console.log(`The temperature is ${newton} degrees Newton.`);
