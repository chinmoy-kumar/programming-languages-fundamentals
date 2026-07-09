// A callback function is a function passed into another function as an argument, which is then executed (or "called back") inside that outer function to complete an action.

function sum(a, b) {
    console.log(a + b);
}

// sumCallback here is a callback function.
function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

// Passed sum function as an argument to function calculator. So, it is a callback function.
// Here sum function cann't be written with () because if we write calculator(2, 5, sum()) then the sum() function will not pass as an argument instead it will try to executed there.
calculator(2, 5, sum);

