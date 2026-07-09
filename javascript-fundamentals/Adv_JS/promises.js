// A Promise acts as a placeholder for a value that will be available at some point in the future, allowing you to handle asynchronous code in a cleaner way than traditional callbacks & also used to avoid callback hell.

// Promise is an Object in JS. It has 3 state -> Fullfilled, Pending, Rejected.

// A promise is considered settled if it is fulfilled or rejected (not pending).


/* Syntax:
=============
let myPromise = new Promise(function(resolve, reject) {

    // Code that may take some time

    resolve(value); // when successful
    reject(value);  // when error
});

 */


function fetchData()
{
    // return new Promise(call back functiion)
    return new Promise((resolve, reject) => {
        // resolve -> function to run if finishes successfully
        // reject  -> function to run if finishes with an error
        setTimeout(() => { // code that can may take some time
            let success = true;
            if(success)
            {
                // resolve(pass any type data object/array/string etc)
                resolve("Fetched Data Successfully"); 
            }
            else{
                // reject(pass any type data object/array/string etc)
                reject("Data fetching failed"); 
            }
        }, 3000);
    })

    
}

// Consuming promise
fetchData()
    .then((data) => { // .then() receives the resolve data of fetchData()
        console.log(data);
        return data.toLowerCase(); // passed to the next .then()
    })
    .then((value) => {
        console.log(value);
    })
    .catch((data) => { // .catch() receives the reject data of fetchData()
        console.log(data);
    })