// declared promises
const fastFood = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Burger ready!");
    }, 1000);
})

const slowFood = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pizza ready!");
    }, 3000);
})

const failedFood = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Shop closed!");
    }, 5000);
})


// Promise all
// -------------
// Waits for ALL promises to succeed. Promise.all() rejects immediately when the first rejection occurs.

// if all promise resolved:
async function orderAllFood()
{
    try{
        const result = await Promise.all([fastFood, slowFood]);
        console.log(result);
    }
    catch(err){
        console.log("Canceled: ", err);
    }
}
orderAllFood();

// if any promise got reject:
async function orderWithFailure()
{
    try{
        const result = await Promise.all([fastFood, failedFood]);
        console.log(result);
    }
    catch(err) 
    {
        console.log("canceled: ", err);
    }
}
orderWithFailure();


// Promise race
// Settles as soon as the VERY FIRST promise finishes, whether it succeeds (resolves) or fails (rejects). It doesn't care about success, it only cares about speed!
async function raceFood()
{
    try{
        const result = await Promise.race([slowFood, failedFood]);
        console.log(result);
    }
    catch(err){
        console.log("Canceled: ", err);
    }
}
raceFood();