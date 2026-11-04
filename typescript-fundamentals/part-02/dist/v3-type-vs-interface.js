//> type alias VS interface
//- Interface is generally connected to objects
//- type alias is more connected to literals, union, tuples, primitives
const user = {
    name: "Myrtle",
    id: 123,
    role: "Manager",
};
const cat = {
    species: "Flexis Catus",
    breed: "Persian",
};
const car = {
    model: "Corolla",
    brand: "Toyota",
};
//! This is not valid. Types with same name don't merge
// type Employee = {
//     name: string;
// }
// type Employee = {
//     salary: number;
// }
const Employee = {
    name: "Ivan",
    salary: 90000,
};
export {};
