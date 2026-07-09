// Promise Methods
// promise.then((result) => {...}) -> When the promise resolved.
// promise.catch((error) => {...}) -> When the promise rejected.

const getPromise = () => {
    return new Promise((resolve, reject) => {
        // resolve("Data Successfully fetched.");
        reject("Network Error");
    })
}

const promiseData = getPromise();
promiseData.then((result) => {
    console.log("Hurrah!", result);
})

promiseData.catch((error) => {
    console.log("Error is ", error);
})

