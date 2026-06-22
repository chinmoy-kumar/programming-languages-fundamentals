// Closures:
// A closure is created when a function remembers the variables from its outer scope, even after the outer function has finished executing.
// It makes it possible for a function to have "private" variables.

function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };

  getCounter = function () {
    return `counter count is: ${counter}`
  }
}

// closure
// counter can only be changed by the add() function.So counter now works like a private variable.
const add = myCounter(); 
add();
add();
console.log(add());

