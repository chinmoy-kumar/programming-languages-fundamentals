// For each
// ----------
let country = ["Bangladesh", "Japan", "China", "Argentina"];

let allCountry = country.forEach((c, idx) => {
    console.log(`${idx} -> ${c}`);
    // return `${idx} -> ${c}`; // forEach loop can't return
})

// Map
// -----
let allCountry2 = country.map((c, idx) => {
    // console.log(`${idx} -> ${c}`);
    return `${idx} -> ${c}`; // map can return 
})
console.log(allCountry2) // returned as an array

// Filter -> Filter out elements according to a condition and return all the elements those satisfy the conditions
// -------
let customCountry = country.filter((f) => f.length > 5);
console.log(customCountry);

// Find -> Find only returns the first element that satisfy the condition
// -----
let targetCountry = country.find((f) => f.length > 5);
console.log(targetCountry);

// Includes -> returns true or false. If it is present returns true else returns false
// ---------
let isPresent = country.includes("Japan");
console.log(isPresent);

// Some -> returns true if at least one element satisfy the condition.
// ------
let student = [
    {name: "Chinmoy", age: 21, location:"Dhaka"},
    {name: "Razu", age: 22, location:"Rajshahi"},
    {name: "Arnob", age: 23, location: "Pabna"}
]
console.log(student.some((s) => s.age > 22));

// every -> returns true if all the elements satisfy the condition
console.log(student.every((s) => s.age > 22)); // returns false
console.log(student.every((s) => s.age > 18)); // returns true

