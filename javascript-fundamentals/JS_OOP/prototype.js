// Prototype:
// an object can use properties/methods from another object.
// Think of it like inheritance or sharing.
// Prototype is JavaScript’s way of sharing properties and methods between objects.

let Macbook = {
    cpu: "M1 Chip",
    ram: 32,
}
let Surface = {
    gpu: "Nvdia 5060",
    __proto__: Macbook, // this will inherit all the properties of Macbook.
}

console.log(`Mabook`, Macbook.__proto__); // Shows null or {} because it has not overridden.

console.log(`Surface`, Surface.__proto__);


// __proto__: is pre-defined in js. We are just overwrite this property.

// Alt way: 
// .setPrototypeOf()

let car = {
    tyre: 4,
}

let tesla = {
    driver: "AI",
}

Object.setPrototypeOf(tesla, car); // Set car properties to tesla's prototype. Just like __proto__: but this is a better way.
console.log(tesla.tyre); // not a good way

// better way is this:
console.log(Object.getPrototypeOf(tesla));

// Check if a object owns a property or it comes from the prototype
console.log(tesla.hasOwnProperty('driver')); // true, because it's tesla's property
console.log(tesla.hasOwnProperty('tyre')); // false, because it's car's property