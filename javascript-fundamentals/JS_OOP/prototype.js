// Ref. video: https://www.youtube.com/watch?v=AOPmqw9scfc

// Prototype:
// an object can use properties/methods from another object.
// Think of it like inheritance or sharing.
// Prototype is JavaScript’s way of sharing properties and methods between objects.

// __proto__ -> for objects
// prototype -> for base classes
// objects __proto__ points towards base class's prototype.

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

// Object.create()
// ----------------
// Use Object.setPrototypeOf() only if you absolutely must change the prototype of an object that already exists and already has properties attached to it that you don't want to lose.
// Use Object.create() if you are setting up your prototype chain early on and don't mind overriding the current prototype object.
// 1. Create our "blueprint" object
const animalBlueprint = {
  type: "Unknown",
  makeSound: function() {
    console.log(`${this.name} says hello!`);
  }
};

// 2. Use Object.create() to stamp out a new object based on the blueprint
const myDog = Object.create(animalBlueprint);

// At this point, myDog is actually an EMPTY object {} 
// but it is secretly linked to animalBlueprint.
console.log(myDog); // Output: {}

// Check if animalBlueprint is the prototype of myDog
console.log(Object.getPrototypeOf(myDog) === animalBlueprint);

// 3. Add properties unique to this specific dog
myDog.name = "Buddy";
myDog.type = "Dog"; // Overrides the blueprint's "Unknown" type

// 4. Test it out!
myDog.makeSound(); // Output: "Buddy says hello!"
console.log(myDog.type); // Output: "Dog"