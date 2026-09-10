// Destructure: Unpack values into variables from object or array.

// Difference between Spread and Destructure
// Spread -> Expand values into another structure
// Destructure -> Unpack values into variables from object or array.

const student1 = {
    name: "Emilie",
    age: 21,
    location: "Dhaka",
}

// Old way
let sName = student1.name;

// using destructure
// ==================
const { age, name, location } = student1; // sequence doesn't matter in object destructure.
console.log(name);



// Nested Destructure
// ===================
const student2 = {
    name: "Howard",
    age: 21,
    address: {
        city: "Dhaka",
        postOffice: "Kafrul",
        postCode: 1230,
    }
};

const { name: stdName, // Name alias -> create alternative names for variables.
    address: { city, postOffice, postCode } } = student2;

console.log(stdName, postOffice);


// Array Destructure
// ==================
const arr = ["Red", "Green", "Blue"];
// const [first, second, third] = arr;
const [, second,] = arr; // -> If we need only second.

console.log(second);


// Nested Array Destructure
// =========================
const student3 = {
    name: "Craig",
    age: 21,
    address: {
        city: "Dhaka",
        postOffice: "Kafrul",
        postCode: 1230,
    },
    hobbies: ["Singing", "Traveling", "Gardening"],
};

const {
    name: std3Name,
    address: { city: cityName },
    hobbies: [, secondHobby,]
} = student3;

console.log(std3Name, secondHobby, cityName);
