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

    // check if an object is instance of a class or not
    static isVehicle(obj)
    {
        return obj instanceof Vehicle;
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

    static isCar(obj)
    {
        return obj instanceof Car;
    }
}

// create object
let car1 = new Car("Corolla", "Toyota", "ABC-123");
let vehicle1 = new Vehicle("SUVs", "BMW");

console.log(car1.vechileInfo()); // inherits from Vehicle class
console.log(car1.drive());
console.log(car1.model);

let res = Vehicle.isVehicle(car1);
console.log(res); // true
res = Car.isCar(car1);
console.log(res); // true

res = Car.isCar(vehicle1);
console.log(res); // false
res = Vehicle.isVehicle(vehicle1);
console.log(res); // true

