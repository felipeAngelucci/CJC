// The Kelvin amount is constant. The user is asked to enter Kelvin value. Ex: 315.
let kelvin = prompt('Please enter a value in Kelvin: ');
// The Celsius amount is Kelvin subtracted by 273.
let celsius = kelvin - 273;

// The Newton amount is Celsius * (33/100).
let newton = Math.floor(celsius * (33/100));

// This equation calculates Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
// This rounds the decimals after the integer value of Fahrenheit
fahrenheit = Math.floor(fahrenheit);

// -------------------------------
// Further improving this Kelvin Weather app to utilize user input functionality and other features with my own ideas of what to code next.
console.log(`Thank you for providing ${kelvin} degrees Kelvin as your value to be converted.`)

// -------------------------------

// Displaying the temperature of Kelvin in comparison to Fahrenheit and Celsius.
console.log(`\nThe temperature is ${kelvin} degrees Kelvin.`);
// Displaying the temperature of Kelvin in Fahrenheit using string interpolation.
console.log(`\nWhich is ${fahrenheit} degrees Fahrenheit.`);
// Displaying the temperature of kelvin in Celsius using string interpolation.
console.log(`\nWhich is ${celsius} degrees Celsius.`);
// Displaying the temperature of Celsius to the Newton scale using the equation.
console.log(`\nWhich is ${newton} degrees Newton.`);
