
// Callback Hell
// --------------
// Callback hell is a problem because it can make your code difficult to read and maintain. When you have multiple nested callbacks, it’s easy to lose track of what’s happening at each step. This can lead to bugs and errors, and make it harder for other developers to understand and work with your code.

/*
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// This is called callback hell.
 getData(1, () => {
    console.log("getting data2...");
    getData(2, () => {
        console.log("getting data3...");
        getData(3, () => {
            console.log("getting data4... ");
            getData(4);
        })
    })

}) 
*/

// Sove this callback hell problem by using promises.
/*
function getData(dataId) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");
        }, 2000);
    })
}

console.log("getting data1...");
getData(1)
.then((res) => {
        console.log("getting data2...");
        return getData(2);
    })
    .then((res) => {
        console.log("getting data3...");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });
*/

// Solve this callback hell problem with Async-await.
function getData(dataId)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    })
}

async function getAllData()
{
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
}

getAllData()