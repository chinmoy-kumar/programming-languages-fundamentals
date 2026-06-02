let userName = {
    firstName: "Chinmoy",
    isLoggedin: true
};

console.log(userName);
console.log(typeof userName);


// The memory space of car is fixed because of `const` but the property value can be changed. Property values are not fixed.
const car = {
    ownerName: "Chinmoy",
    "country name": "Bangladesh",
    price:1200000,
}

// Ways of accessing values
console.log(car.ownerName);
// Access values with space & non-space named properties
console.log(car["country name"]);
console.log(car["price"]);

// Change object property value
car.ownerName = "Kumar";
console.log(car.ownerName);

// Add new property to car object
car.ownerAge = 27;
console.log(car.ownerAge);
console.log(car);

// In-built object
let today = new Date();
console.log(today);
console.log(today.getFullYear());

// Array
// See an the file array.js