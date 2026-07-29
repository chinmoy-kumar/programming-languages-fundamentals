
// Promise any
// -------------
// Waits for the FIRST SUCCESSFUL promise and completely ignores any errors unless every single one fails.


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

// async function
async function orderAnyFood()
{
    try{
        const result = await Promise.any([fastFood, failedFood]);
        console.log(result);
    }
    catch(err)
    {
        console.log("canceled: ", err);
    }
}
orderAnyFood();