// Rarely used

function* numberGeneraotor()
{
    yield 1;
    yield 2; 
    yield 3;
}

let gen = numberGeneraotor();
let genTwo = numberGeneraotor();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // ouput: undefined bcause only 3 yield are there

console.log(genTwo.next().value);
console.log(genTwo.next().value);