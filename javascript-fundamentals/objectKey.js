//> Object Literal
let BDcityPopulation = {
    Dhaka: 5000000, // Dhaka is called key and 5000000 is called value
    Bogura: 3000000,
    Rangpur: 2000000,
    "Bogura city": 5000000, // if key contain space keep it inside of quotation
}

let UScityPoputlaiton = {} // empty object

//> Add properties
BDcityPopulation.khulna = "60000000";
BDcityPopulation["Chittagong"] = "900000000"

console.log(BDcityPopulation)

//> Access object properties
//- Dot notation
console.log(BDcityPopulation.Dhaka);
console.log(Object.keys(BDcityPopulation)); // print all keys
console.log(Object.values(BDcityPopulation)); // print all values

//- Bracket notation
console.log(BDcityPopulation['Bogura'])

let user = {
    firstName: "Hulda",
    lastName: "Gill",
    age: 67
}

const name = "Name";
console.log(user['first' + name]);
console.log(user['last' + name]);







