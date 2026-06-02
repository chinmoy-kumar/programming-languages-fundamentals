// Array

// Both array declaration are valid
let car = ["BMW", "Toyota", "Marcedes"];
// or
let otherCar = new Array("car1", "car2", "car3");

// In JS, different types are allowed in an array.
let heros = ["Batman", "Ironman", "Spiderman", true, 3];

// Access array elements
console.log(heros[2])

// Methods
let cities = ["Dhaka", "Bogura", "Rangpur", "Rajshahi", "Khulna"];
console.log(cities);
// push method -> Add value at the end
cities.push("Cumilla");
console.log(cities);

// pop method -> Removes the last element
cities.pop();
console.log(`after pop: ${cities}`);
// pop method also returns the removed elements
const removedCity = cities.pop();
console.log(removedCity);

// length
let cityCount = cities.length;
console.log(cityCount);


// array copy 
// Soft copy: copy of an array also points the same memory. so if the original array got changed, the same change will also refect in the copy version of that array. It also called soft copy.
let arr = ["item1", "item2", "item3"];
let softCopyArr = arr;
arr.pop();
console.log(softCopyArr); // item3 also pop from the copy array

// Hard copy: This is opposite of soft copy, where the copy array is not depended on the original copy.
let arr2 = ["item1", "item2", "item3"]
let hardCopyArr2 = [...arr2]; // ... is spread operator
arr2.pop();
console.log(arr2);
console.log(hardCopyArr2);

// Merge arrays (Concating array)
let group1 = ["emp1", "emp2", "emp3"];
let group2 = ["emp4", "emp5"];
console.log(group1.concat(group2));

// Find item in array
let groceryList = ["Potato", "Tomato", "Lemon", "Onion", "Cucumber"];
let isInList = groceryList.includes("Lemon");
console.log(isInList);
isInList = groceryList.includes("lemon");
console.log(isInList); // false, because item name need to be exactly same as the array item to be found.


let arr5 = [1, 2, 3, 4];
console.log(arr5.indexOf(3));
console.log(arr5.indexOf(3));