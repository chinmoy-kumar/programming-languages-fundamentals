//> "typeof"
let x = ["abc", "bcd"];
console.log(typeof x == "object"); //* true
// console.log(typeof x == 'array') //* false because typescript consider array, null as object
//> Type guard
const printValue = (val) => {
    // return val.toUpperCase(); //! Invalid
    //- type guard
    if (typeof val == "string") {
        return val.toUpperCase();
    }
    else {
        return val;
    }
};
const loggedInUser = {
    name: "Matilda",
    address: {
        street: "ABC",
    },
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("User not found");
};
export {};
