"use strict";
//> Partial
//- partial makes every properties opitonal
// type partialUser = Partial<User>;
const updateProfile = (id, data) => {
    // some backend logic
};
updateProfile("abc", { name: "bca" });
const initialize = (config) => {
    // some logic
};
//- As I have used Required<>, I have to use all the properties
initialize({ apikey: "aflkajsdfl", timeout: 30000 });
const preview = {
    name: "Chair",
    description: "New product",
    // price: 20000, //! this will give error
};
const directoryEntry = {
    id: 23421,
    name: "Phillip",
    // salary: 2342, //! this will give error
};
const apiUrls = {
    development: "sometext",
    staging: "sometext",
    production: "sometext",
};
