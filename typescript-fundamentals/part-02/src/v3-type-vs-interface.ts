//> type alias VS interface
//- Interface is generally connected to objects
//- type alias is more connected to literals, union, tuples, primitives

type Id = number;
//! interface Id = number;  // not valid

type Role = "Admin" | "Manager";
//! interface Role = 'Admin' | 'Manager';   // not valid

interface User {
    name: string;
    id: Id; // type Id can be assigned
    role: "Admin" | "Manager";
    // role: Role; // valid
}

const user: User = {
    name: "Myrtle",
    id: 123,
    role: "Manager",
};

// interface with object

interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string;
}

const cat: Cat = {
    species: "Flexis Catus",
    breed: "Persian",
};

// samething using type

type Vehicle = {
    brand: string;
};

type Car = Vehicle & {
    //NOTE: "&" symbol is used to perform intersection
    model: string;
};

const car: Car = {
    model: "Corolla",
    brand: "Toyota",
};

//> duplicate in interface & type

//- Interface with same name got merged automatically
interface IEmployee {
    name: string;
}

interface IEmployee {
    salary: number;
}

//! This is not valid. Types with same name don't merge
// type Employee = {
//     name: string;
// }

// type Employee = {
//     salary: number;
// }

const Employee: IEmployee = {
    name: "Ivan",
    salary: 90000,
};
