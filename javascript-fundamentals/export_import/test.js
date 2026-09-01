// default import
// ---------------
// import add from './math.js'

// console.log(add(5, 2));

// named import
// ---------------
// import {subs, pi} from './math.js'
// console.log(subs(10, 6));
// console.log(pi);

// use default export and named export at the same time
// -----------------------------------------------------
import add, {subs, pi} from './math.js'
console.log(add(3, 6));
console.log(pi);