// Rarely used

function* numberGenerator() // * after function indicates that it is a generator function
{
    yield 1;
    yield 2; 
    yield 3;
}

let gen = numberGeneraotor(); // it doesn't print anything, it's just setup the generator function
let genTwo = numberGeneraotor();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // ouput: undefined bcause only 3 yield are there

console.log(genTwo.next().value);
console.log(genTwo.next().value);

// NOTE:
// yield is like a "pause" button. Each time the generator hits a yield, it:
// - Produces that value
// - Pauses execution right there
// - Waits until something asks for the next value
// This is different from return, which exits the function completely.

// gen.next() -> returns two property `done` and `value`.
// done: false means more codes to run
// done: true means no more code to run
// value means whatever is yielded