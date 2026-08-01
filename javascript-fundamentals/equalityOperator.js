// Loose equality using ==
// -------------------------
// == (loose equality) compares two values after converting them to a common type (type coercion)
console.log(1 == '1');       // true (string '1' is converted to number 1)
console.log(0 == false);     // true (boolean false is converted to number 0)
console.log(null == undefined); // true (special rule in JavaScript)

// Strict equality using ===
// -------------------------
// === (strict equality) compares both the value and the data type without changing them
console.log(1 === '1');      // false (different data types)
console.log(0 === false);    // false (different data types)
console.log(null === undefined); // false (different data types)
