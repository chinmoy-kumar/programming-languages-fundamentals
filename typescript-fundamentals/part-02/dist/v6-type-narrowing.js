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
//> Some caveat of Type guard
const printAll = (x) => {
    if (x && typeof x === "object") {
        for (let i of x)
            console.log(i);
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("null is here");
    }
};
// printAll(null);
printAll("chinmoy");
//> Equality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
compare(2, 2);
const printAll2 = (x) => {
    if (x !== null) {
        if (typeof x === "string") {
            console.log(x);
            return;
        }
        if (typeof x === "object") {
            for (let i of x)
                console.log(i);
        }
        return;
    }
    console.log("");
};
// printAll2("Dhaka");
printAll2(null);
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
//> 'instanceof' check
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
// showDate(new Date(12-12-1987))
showDate("12-12-1978");
const getArea = (val) => {
    if (val.kind === "circle") {
        console.log(val.radius);
    }
    else {
        console.log(val.sideLength);
    }
};
export {};
