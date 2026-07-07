

function fetchUserData()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "chinmoy", url: "www.chinmoykumar.com"});
            // reject("Server Error"); 
        }, 3000);
    });
}

async function getUserData()
{
    try{
        console.log(`Fetching data...`);
        // 'await' can only be used where there is the `async` keyword over the function.
        const userData = await fetchUserData();
        console.log("User data fetched successfully");
        console.log("User data: ", userData)
        
    }
    catch(error){
        console.error("Error fetching data: ", error);
    }
}

getUserData();

