// Implicit Type Cating
let a = "1";
let b = 2;
let c = a + b;
console.log(c);
console.log(typeof c);

// Explicit Type Casting
let d = "3";
let e = 4;
let g = (Number(d) + e);
console.log(g);
console.log(typeof g);

// NaN -> Not a number
let isValue = "2abc";
console.log(Number(isValue));
console.log(typeof Number(isValue)); // But the NaN is also a Number datatype.

// Null
let value = null;
console.log(Number(null));

// Undefined
let value2 = undefined;
console.log(Number(value2));

// BigInt
let value3 = 23;
console.log(typeof value3);
console.log(typeof BigInt(value3));
