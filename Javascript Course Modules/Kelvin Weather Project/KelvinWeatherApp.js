// constants variables name must be in uppercase
const KELVIN = 273.15 
const FAHRENHEIT = 'FAHRENHEIT'
const CELCIUS = 'CELCIUS'
const NEWTON = 'NEWTON'

// This is the temperature conversion function to streamline the conversion process and make it more efficient. It encapsulates the equations in a function that makes the process simpler and reusable.
function convertTemperature(convertFrom, convertTo, temperature) {

  if(convertFrom === KELVIN && convertTo === FAHRENHEIT)
    return Math.floor() // add the calculations there
  
  if(convertFrom === FAHRENHEIT && convertTo === CELCIUS)
    return Math.floor() // add the calculations there
  
  if(convertFrom === CELCIUS && convertTo === NEWTON)
    return Math.floor() // add the calculations there

  // add more if statements if you want
    
   return temperature
  
}

// The user is asked to enter the Kelvin value. Ex: 315.
const kelvin = prompt('Please enter a value in Kelvin: ');

// convert temperatures
const faharenheit = convertTemperature(KELVIN, FAHRENHEIT, kelvin)
const celcius = convertTemperature(FAHRENHEIT, CELCIUS, faharenheit)
const newton = convertTemperature(CELCIUS, NEWTON, celcius)

console.log(`Thank you for providing ${kelvin} degrees Kelvin as your value to be converted.`)
console.log(`${kelvin} Kelvin is ${faharenheit} degrees Fahrenheit.`);
console.log(`${kelvin} Kelvin is ${celcius} degrees Celsius.`);
console.log(`${kelvin} Kelvin is ${newton} degrees Newton.`);

// -------------------------------
  // Further improving this Kelvin Weather app to utilize user input functionality and other features with my own ideas of what to code next.
  // This block of code thanks the user for inputting a value and displays the conversion results. String interpolation is utilized to make the code easier to read.
  
// -------------------------------

