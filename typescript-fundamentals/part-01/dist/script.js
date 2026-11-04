"use strict";
//> Basic types
let myString = "Chinmoy Kumar";
let myNumber = 123;
let myBoolean = false;
let mySymbol = Symbol();
let myBigInt = 100n;
//> Type safe function
const addTwo = (a, b) => {
    return a + b;
};
console.log(addTwo(2, 32));
//> Array and Tuple an readonly modifier
const arr = ["chinmoy", "Tirtho"];
const num = [123, 321, 542];
// Alternative way of declare array:
const age = [12, 32, 53, 21];
console.log(age);
//> Tuple
//- Fixed size
//- Fixed data type for each position
const dhakaLatLong = [23.8103, 90.4125];
const person = ["Chinmoy", 24];
//> Optional parameter
//- if a parameter can be given or not
const guestName = (firstName, lastName) => {
    if (!lastName)
        return firstName;
    return firstName + " " + lastName;
};
console.log(guestName("Annie"));
console.log(guestName("Annie", "Gregory"));
//> Default parameter
//- Avoid to keep the default paramter in first position. If you keep you will need to set 'Undefined' in the first position for using the default value.
const greetGuest = (firstName, greetings = "Hello") => {
    console.log(greetings + " " + firstName);
};
greetGuest("Chinmoy");
//> Rest parameters (...args)
//- it's an array type
const sum = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};
sum(1, 2, 3, 4, 5);
//- using tuples
const logUserAction = (...args) => {
    const [name, age] = args;
    console.log(`${name} is ${age}`);
};
logUserAction("Chinmoy", 21, false); // fixed 3 of that exact types of data have to be pass because of using tuple.
const user = {
    name: 'Chinmoy',
    age: 21,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ['abc', 'mno']
};
