// for-of loop -> Can be use on array, string, set but not on Object
// ------------
/* Structure:

for (const element of object) {
    
}
*/

let numbers = [1, 2, 3, 4, 5, 6, 7];
let newNumbers = [];
for (const num of numbers) {
    if(num ===  4) 
        break;
    newNumbers.push(num);
}
console.log(newNumbers);

// for-in loop -> For objects for-in loop works better than for-of loop
// ------------
/* Structure

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}
 */

let BDcityPopulation = {
    Dhaka: 5000000, // Dhaka is called key and 5000000 is called value
    Bogura: 3000000,
    Rangpur: 2000000,
    "Bogura city": 5000000, // if key contain space keep it inside of quotation
}

let BDlargeCities = {}

// There is not sequence of pointing cities from BDcityPopulation object
for(const city in BDcityPopulation)
{
    if(BDcityPopulation[city] < 3000000)
    {
        continue;
    }

    // key = value 
    BDlargeCities[city] = BDcityPopulation[city];
}

console.log(BDlargeCities);

// for-each loop -> For using with Array only
// ---------------
/* Structure

array.forEach(element => {
    
});
    
*/


let teaCollection = ["green tea", "masala tea", "chai", "ginger tea"];

let availableTea = [];

// syntax-01
teaCollection.forEach(tea => {
    if(tea === "chai") 
    {
        return
    }
    availableTea.push(tea);
})
console.log(availableTea);

/* syntax-02
--------------
teaCollection.forEach(function(tea){
    if(tea === "chai")
    {
        return; 
        // inside forEach 'return' means skip the current execution only. Works like 'continue'
        // can't use break & continue here because this is a function under forEach loop.
    }
    availableTea.push(tea);
})
console.log(availableTea);
 */