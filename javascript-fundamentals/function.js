/* Function sturcture
----------------------- 
function functionName(parameter)
{
    // codes goes here
    return returnValue;
} 
*/

// General function
function greeting(name)
{
    let greet = `Welcome, ${name}!`;
    return greet;
}
let getGreeting = greeting("Robert");
console.log(getGreeting); 

// Nested function
function orderTea(teaType)
{
    function confirmOrder(tea)
    {
        return `order confirmed for ${tea}`;
    }
    return confirmOrder(teaType);
}
let orderStatus = orderTea("Masala tea")
console.log(orderStatus);

// Higher-order function
// -----------------------
// Higher-order function is a function that either takes one or more functions as arguments, returns a function as its result, or both

function makeTea(typeOfTea)
{
    return `make tea: ${typeOfTea}`;
}

function processTeaOrder(tea) // here tea is a function perameter
{
    return tea('Green tea');
}

let order = processTeaOrder(makeTea); // makeTea is function argument
console.log(order);

// Factory function & Closures
// In JavaScript, a factory function is a function that returns an object. Functions are also kind of object in JS.

function createTeaOrder(name)
{
    return function (teaName)
    {
        return `${teaName} is ready for ${name}`;
        // In JavaScript, an inner function always maintains access to the variables of its outer function (like name), even after the outer function has finished executing. 
        // It is called Closures.
    }
}

let teaMaker = createTeaOrder("Chinmoy");
console.log(typeof(teaMaker));
// teaMaker is alo a function type because createTeaOrder returns a function and now teaMaker holds that returned function of createTeaOrder function.
let teaOrder = teaMaker('Green tea');
// Here teaMaker() will execuate as the inner returned function of createTeaOrder function.

console.log(teaOrder);