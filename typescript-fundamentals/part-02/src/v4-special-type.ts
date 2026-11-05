//> Top types
//- any, unknown

let helloWorld: any = "Hello world";
// helloWorld = 123;
console.log(helloWorld.length);

const something: unknown = "Hello there";

//NOTE: before using variable decalred with unknown type, have to be specify the type.
// console.log(something.length) //* this is not valid because the type is still unknown

//> Core types
//- number, string etc

let user: unknown;

const age: number = 11;

//NOTE: top types can store it's under types
user = age;

//> Nulish types
//- null

interface IUser {
    name: string;
}

type loggedInUser = IUser | null;

const currentUser: loggedInUser = null;

//> Unit types
//- void

const greet = () => {
    console.log("Hello my boy!");
};
greet();

//> Sub-type of unit types

const anotherGreet = () => {
    console.log("Hello");
    return undefined;
};

const greetings: void = anotherGreet();
console.log(greetings);

//> Bottom types
//- never
//NOTE: We can't assign anything into never type. This is mainly used in error throwing.

//! These are invalid
// const food: never = "string";
// const car: never = 123;

const getError = (msg: string): never => {
    throw new Error(msg);
};

//NOTE: 'never' can be assigned in any type
const newMsg: string = getError("Abc");
