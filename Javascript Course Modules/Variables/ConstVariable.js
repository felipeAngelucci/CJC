/*
A const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.

Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.
*/
const entree = 'Enchiladas';
console.log(entree);
// Constant variables can't be reassigned, therefore, this code below will cause a TypeError.
entree = 'Tacos';
