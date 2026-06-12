// constructor
// -------------
// In javascript, constructor can be created & called without a class.
function Person(name, age)
{
    this.name = name;
    this.age = age;
}

// Create object & called constructor
// -----------------------------------
let emp1 = new Person("Robert", 33);
console.log(emp1);


// constructor with function
// ---------------------------
function Tea(type)
{
    this.type = type;
    this.describe = function () {
        return `this is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());


// Prototype with constructor function
// -------------------------------------
function Animal(species)
{
    this.species = species;
}

//Every time you create a function in JavaScript, it automatically comes with a hidden empty object attached to it called prototype.
Animal.prototype.sound = function ()
{
    return `${this.species} makes a sound`;
}
// By writing Animal.prototype.sound = ..., you are attaching the sound method to that hidden shared object.
// In general, if the property is a function it is better to declare it as prototype.

let Tiger = new Animal("Tiger");
console.log(Tiger.sound());
console.log(Tiger.species);


// Check if the instance/object created with new keyword or not in constructor function
// --------------------------------------------------------------------------------------
function Drink(drinkType)
{
    if(!new.target)
    {
        throw new Error("Drink must be called with new keyword");
    }
    this.drinkType= drinkType;
}

let masalaTea = new Drink("tea");
let Coffee = Drink("coffee") // will throw error as it doesn't contain new keyword