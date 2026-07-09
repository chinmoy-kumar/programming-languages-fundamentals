// Async function always returns a promise.

// Structure
// async function myFunc(){...}

function fetchUserData()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "chinmoy", url: "www.chinmoykumar.com"});
            // reject("Server Error"); 
        }, 3000);
    });
}

// 'await' pauses the execution of it's surrounding async function until the promise is settled.
// 'await' can only be used where there is the `async` keyword over the function.
async function getUserData()
{
    try{
        console.log(`Fetching data...`);
        const userData = await fetchUserData();
        console.log("User data fetched successfully");
        console.log("User data: ", userData)
        
    }
    catch(error){
        console.error("Error fetching data: ", error);
    }
}

getUserData();

