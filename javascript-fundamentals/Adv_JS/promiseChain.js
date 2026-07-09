const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 3000);
    })
}

const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 3000)
    })
}

console.log("fetching data1...");
let p1 = asyncFunction();
p1.then((res) => {
    console.log("fetching data2...");
    // Promise chain
    let p2 = asyncFunction2();
    p2.then((res) => {})
})


// Short way
/*
asyncFunction().then((res) => {
    console.log("fetching data2...");
    asyncFunction2().then((res) => {})
})
*/

// Another Example of Promise chain
function getData(dataId) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");
        }, 2000);
    })
}

getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });