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

// inheritance -> using extends keywords
class Car extends Vehicle{
    constructor(model, brand, numberPlate)
    {
        // Invokes the parent constructor
        super(model, brand);
        this.numberPlate = numberPlate;
    }
    drive()
    {
        return `${this.model} is a good model of car`;
    }
}

// create object
let car1 = new Car("Corolla", "Toyota");

console.log(car1.vechileInfo()); // inherits from Vehicle class
console.log(car1.drive());
console.log(car1.model);