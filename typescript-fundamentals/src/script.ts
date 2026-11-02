//> Basic types
let myString : string = "Chinmoy Kumar";
let myNumber : number = 123;
let myBoolean : boolean = false;
let mySymbol : symbol = Symbol();
let myBigInt : bigint = 100n;

//> Type safe function
const addTwo = (a : number, b : number) : number => {
    return a + b;
}

console.log(addTwo(2, 32))

//> Array and Tuple an readonly modifier
const arr : string[] = ["chinmoy", "Tirtho"]
const num : number[] = [123, 321, 542]
// Alternative way of declare array:
const age : Array<number> = [12, 32, 53, 21]
console.log(age)

//> Tuple
//- Fixed size
//- Fixed data type for each position

const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125]
const person: readonly [string, number] = ["Chinmoy", 24]

//> Optional parameter
//- if a parameter can be given or not

const guestName = (firstName:string, lastName?:string) => {
    if(!lastName)
        return firstName;

    return firstName + " " + lastName;
}

console.log(guestName("Annie"));
console.log(guestName("Annie", "Gregory"));

//> Default parameter
//- Avoid to keep the default paramter in first position. If you keep you will need to set 'Undefined' in the first position for using the default value.

const greetGuest = (firstName:string, greetings:string = "Hello") => {
    console.log(greetings + " " + firstName)
}

greetGuest("Chinmoy");

//> Rest parameters (...args)
//- it's an array type

const sum = (...numbers:number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0);
}

sum (1, 2, 3, 4, 5);

//- using tuples
const logUserAction = (...args : [name:string, age:number, isActive:boolean]) => {
    const [name, age] = args;
    console.log(`${name} is ${age}`);
}

logUserAction("Chinmoy", 21, false) // fixed 3 of that exact types of data have to be pass because of using tuple.

//> Object type
/* 
const user : {
    name:string;
    age:number;
    isActive:boolean;
    action: () => void;
    badges: string[];
} = {
    name: 'Chinmoy',
    age: 21,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ['abc', 'mno']
};
*/

//> Type alias
type User = {
    name:string;
    age:number;
    isActive:boolean;
    action: () => void;
    badges: string[];
}

//> Interface  
//- Recommended to use instead of Type alias if possible
interface IUser {
    name:string;
    age:number;
    isActive:boolean;
    action: () => void;
    badges: string[];
}

const user : IUser = {
    name: 'Chinmoy',
    age: 21,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ['abc', 'mno']
};