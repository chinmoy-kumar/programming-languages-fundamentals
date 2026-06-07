// class
/* Structure
--------------- 
class className{
    constructor(parameter1, parameter2) // constructor of class (optional)
    {
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
    }

    methodName () // if a function under a class it's called method. No need of function keyword here.
    {

    }
} 
*/

// Create class
class Vehicle{
    constructor(model, brand)
    {
        this.model = model;
        this.brand = brand;
    }

    vechileInfo()
    {
        return `${this.model} is from ${this.brand}`;
    }
}

// Create object of Vehicle class
let vehicle1 = new Vehicle("Corolla", "Toyota");

console.log(vehicle1.brand);
console.log(vehicle1.model);
console.log(vehicle1.vechileInfo());