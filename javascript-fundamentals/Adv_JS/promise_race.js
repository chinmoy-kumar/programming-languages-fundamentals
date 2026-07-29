// Promise race
// Settles as soon as the VERY FIRST promise finishes, whether it succeeds (resolves) or fails (rejects). It doesn't care about success, it only cares about speed!

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