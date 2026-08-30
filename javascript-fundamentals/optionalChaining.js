// optional Chaining (?)
// -----------------------
// The Optional Chaining ( ?. ) Operator returns undefined if an object is undefined or null. (Instead of throwing an error).

let student1 = {
    name: "Robert",
    address: {
        city: "Dhaka",
        zipCode: 1230,
    }
}

let student2 = {
    name: "Bob",
}

console.log(student1?.address?.city);
console.log(student2?.address?.city); // prints 'undefined' instead throw an error

// nullish coalescing (??) -> 
// -------------------------
// Returns the right-hand value only if the left-hand operand evaluates to null or undefined

let a = null;
console.log(a??10)

// implement on previous code
console.log(student2?.address?.city ?? "city is missing");
// Now, it shows "city is missing" instead of print `undefined`


