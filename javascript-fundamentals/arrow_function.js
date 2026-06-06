// Arrow function
// ---------------
/* structure 
const functionName = (parameter) => 
    {
        // code goes here};
    }
 */

// Unnamed function
// ------------------
// (parameter) => {// code goes here};

/* const calculateTotal = (price, quantity) => 
{
    return price * quantity;
} */
// or
// if the function has only one line code(no need of return keyword)
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(599, 3);
console.log(totalCost);
