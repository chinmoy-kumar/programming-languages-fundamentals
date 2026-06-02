// Declare variable
// var score = 110; // Old approch and in modern JS not recommended.

// using let is recommended
let score = 110; // int 
/* Datatypes
string
number
boolean
bigint -> BigInt data type can represent numbers greater than 253-1 which helps to perform operations on large numbers.

undefined -> a variable has been declared but has not been given a value.
null -> the developer intentionally set the value to “empty” or “nothing.” But null doesn't mean zero.

object -> An object is a collection of related information stored as key-value pairs.

symbol

*/
let website = "chinmoykumar.com" // string
let age = 17; // number
let amount = 1102.56; // number
let isLoggedin = true; // boolean

// object
let teaTypes = ["lemon tea", "orange tea", "oolong tea"];
let user = {firstname: "Chinmoy", lastname: "Kumar" };

let getAge = age; // assign the age into getAge

console.log(typeof amount);
console.log(score);

// Fixed variable datatype
const username = "chinmoy";
// username = "kumar"; // This will throw error because const variable value cannot be changed after declaration.
console.log(username);