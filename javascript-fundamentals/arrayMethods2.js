// reduce
// --------
// NOTE:
// The reduce() method executes a reducer function for array element.
// the value returned from the callback becomes the new value of the accumulator for the next iteration.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

const product = [
    {name: "Monitor", price: 12000, inStock: true},
    {name: "Mouse", price: 1500, inStock: false},
    {name: "Keyboard", price: 5500, inStock: true},
]

const total = product.reduce((accumulator, currentValue) => {
    return accumulator += currentValue.price;
}, 300) // Here 300 is the initial value of the accumulator

console.log(`Total price: ${total}`)

// Method Chaining
// -----------------
const stockedProductPrice = product.filter((f) => f.inStock === true).reduce((acc, currentProduct) => {
    return acc += currentProduct.price;
}, 0);
console.log(`Stocked product price: ${stockedProductPrice}`);