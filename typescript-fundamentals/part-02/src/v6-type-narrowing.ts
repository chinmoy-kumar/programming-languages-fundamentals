//> "typeof"

let x = ["abc", "bcd"];

console.log(typeof x == "object"); //* true
// console.log(typeof x == 'array') //* false because typescript consider array, null as object

//> Type guard

const printValue = (val: string | number) => {
    // return val.toUpperCase(); //! Invalid

    //- type guard
    if (typeof val == "string") {
        return val.toUpperCase();
    } else {
        return val;
    }
};

//> Truthiness

type User = {
    name: string;
    address?: {
        street: string;
    };
} | null;

const loggedInUser: User = {
    name: "Matilda",
    address: {
        street: "ABC",
    },
};

const showAddress = (user: User) => {
    if (user && user.address) {
        console.log(user.address.street);

        return;
    }

    throw new Error("User not found");
};
