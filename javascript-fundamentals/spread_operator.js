// Spread operator (...)
// ... allows an iterable such as an array or string to be expended into separate elements (unpacks the elements)

// Difference between Spread and Destructure
// Spread -> Expand values into another structure
// Destructure -> Unpack values into variables from object or array.

// with numbers
// --------------
const numbers = [2, 4, 5, 1, 3]
// let max = Math.max(numbers); // returns NaN
let max = Math.max(...numbers);
console.log(max);

// with string
// --------------
const name = "Chinmoy";
let letters = [...name];
console.log(letters);

letters = [...name].join("-")
console.log(letters);

// with array
// --------------
let fruits = ["apple", "orange", "mango"];
let fruits2 = [...fruits]; // creates a copy
console.log(fruits2);

// combine two array
let vegetables = ["tomato", "potato", "carrot"];
let groceryList = [...fruits, ...vegetables];
console.log(groceryList);

// add extra items
let foods = [...fruits, ...groceryList, "eggs", "nuts"];
console.log(foods);

// with object
// ------------
// let newObj = {...oldObj}
const personalInfo = {
    name: "Callie", 
    age: 22,
}

const contactInfo = {
    email: "callie@gmail.com",
    phone: "01733377711"
}

const fullProfile = {
    ...personalInfo, // spread personalInfo
    ...contactInfo,  // spread contactInfo
    zipCode: 1200,   // added extra info
}

console.log(fullProfile);




