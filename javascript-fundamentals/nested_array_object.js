// Nested object
let user = {
    name: "Chinmoy",
    age: "21",
    location: "Bangladesh",
    address: {
        district: "Dhaka",
        postCode: 1206,
    }
}
console.log(user.address.postCode);

// Nested array object
let userArr = Object.entries(user);
// console.log(userArr);
console.log(userArr[3][1].district);

let employee = {
    general: {
        name: "Robert",
        age: 31,
        gender: "male",
    },
    locaiton: {
        district: "Dhaka",
        thana: "Cantonment",
        postCode: 1230,
    },
    others: {
        nationality: "american",
        hobby: ["drawing", "reading books", "traveling"],
    }
}
console.log(employee.others.hobby[1]);
