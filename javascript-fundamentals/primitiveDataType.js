// Number
let receivedAmount = 1000;
let TransferAmount = new Number(500); // Object(non-primitive)

// console.log(receivedAmount);
// console.log(TransferAmount.valueOf());

console.log(typeof receivedAmount);
console.log(typeof TransferAmount);

// Boolean
let isActive = true;
console.log(isActive);

// Undefined
// Declared and defined, but don't insert a value in it yet. It's called undefined. 
let firstName;
// or let firstName = undefined;
console.log(firstName);

// Null
// It means empty but not zero. Zero is an actual value, not null. 
let secondName = null;
console.log(secondName);

// String
let stringOne = "Hello";
// or let stringOne = 'Hello';

let userName = "Robert";
let oldGreet = stringOne + " " + userName;
console.log(oldGreet);

// String interpolation
console.log(`Hello ${userName}, Welcome!`);

// Symbol
// It returns a unique symbol value each time it is called. Symbols are immutable and unique, making them useful for creating property keys that are guaranteed to be unique across different objects. 

let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1);
console.log(sym1 == sym2); // false, because they are unique and different from each other.

// Create symbol with name
let sym3 = Symbol("Chinmoy");
let sym4 = Symbol("Chinmoy");
console.log(sym3);
console.log(sym3 == sym4); // false. Because even if the name is same, the Symbol() will always generate with it's uniqueness.



