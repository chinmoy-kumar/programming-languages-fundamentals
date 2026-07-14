// rest parameters:
// (...rest) allow a function work with a variable number of arguments by bundiling them into an array

// Difference between Spread and Rest:
// spread -> expands or unpacks an array into separate elements.
// rest   -> bundles separate elements into an array.

// Example-01
// -----------
function openFridge(...foods) // rest perameter
{
    console.log(foods);
    console.log(...foods); // spread operator (seperates each elements)
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "Momo";
const food5 = "Singara";
openFridge(food1, food2, food3, food4, food5);

// Example-02
// -----------
function getFoods(...foods) {
    return foods; // combines all foods in an array and returns
}
const myFoods = getFoods(food1, food2, food3, food4, food5);
console.log(myFoods);

// Example-03
// -----------
function sum(...numbers) {
    let result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}
const total = sum(1, 5, 4);
console.log(`Total is: ${total}`);

// Example-04
// ------------
function getAverage(...numbers) {
    let res = 0;
    for (let num of numbers) {
        res += num;
    }
    return res / numbers.length;
}
const avg = getAverage(2, 3, 5);
console.log(`Average is: ${avg.toFixed(3)}`);

// Example-05
// -----------
function combineString(...str) {
    return str.join(" "); // joins parameters with space
}
const fullName = combineString("Mr.", "Spongbob", "Squarepants");
console.log(fullName);



