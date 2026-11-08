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

//> Some caveat of Type guard

const printAll = (x: string | string[] | null) => {
    if (x && typeof x === "object") {
        for (let i of x) console.log(i);
    } else if (typeof x === "string") {
        console.log(x);
    } else {
        console.log("null is here");
    }
};

// printAll(null);
printAll("chinmoy");

//> Equality

const compare = (x: number | string, y: boolean | number) => {
    if (x === y) {
        console.log(x, y);
    }
};

compare(2, 2);

const printAll2 = (x: string | string[] | null) => {
    if (x !== null) {
        if (typeof x === "string") {
            console.log(x);
            return;
        }
        if (typeof x === "object") {
            for (let i of x) console.log(i);
        }

        return;
    }
    console.log("");
};

// printAll2("Dhaka");
printAll2(null);

//> 'in' Operator
//- check if a property exists in an object.

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};

//> 'instanceof' check

const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }

    const date = new Date(x);
    console.log(date.toISOString());
};

// showDate(new Date(12-12-1987))
showDate("12-12-1978");

//> Discriminated union
//- identify the object based on the common property and then access other properties of that selected object.

interface ICircle {
    kind: "circle";
    radius: number;
}

interface ISquare {
    kind: "square";
    sideLength: number;
}

const getArea = (val: ICircle | ISquare) => {
    if (val.kind === "circle") {
        console.log(val.radius);
    } else {
        console.log(val.sideLength);
    }
};

