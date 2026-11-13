//> Partial
//- partial makes every properties opitonal

interface User {
    id: string;
    name: string;
    email: string;
}

// type partialUser = Partial<User>;

const updateProfile = (id: string, data: Partial<User>) => {
    // some backend logic
};

updateProfile("abc", { name: "bca" });

//> Required
//- Opposite of partial
//- removes the optional from the properties and makes it requried

interface config {
    apikey?: string;
    timeout?: number;
}

const initialize = (config: Required<config>) => {
    // some logic
};

//- As I have used Required<>, I have to use all the properties
initialize({ apikey: "aflkajsdfl", timeout: 30000 });

//> Pick
//- Picks only selected properties to use from a already created interface

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

type productReview = Pick<Product, "name" | "description">;

const preview: productReview = {
    name: "Chair",
    description: "New product",
    // price: 20000, //! this will give error
};

//>  Omit
//- Omits only selected properties to use from a already created interface

interface IEmployee{
    id: number,
    name:string,
    salary: number,
    nid: number,
}

type publicEmployee = Omit<IEmployee, "salary" | "nid">

const directoryEntry: publicEmployee = {
    id: 23421,
    name: "Phillip",
    // salary: 2342, //! this will give error
}

//> Record
//- Record uses the existing type without creating a new interface

type Enviroment = "development" | "staging" | "production";

const apiUrls: Record<Enviroment, string> = {
    development: "sometext",
    staging: "sometext",
    production: "sometext",
} 