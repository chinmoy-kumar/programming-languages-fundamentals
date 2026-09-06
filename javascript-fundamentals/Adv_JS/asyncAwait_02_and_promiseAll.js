// Manage multiple promises using AsyncAwait 

function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post Data fetched");
        }, 3000);
    })
}

function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment Data fetched");
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching data...");
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();
        // or,
        // Promise all -> Handles multiple promises more efficiently
        // ------------
        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ]);

        console.log(postData);
        console.log(commentData);
        console.log("Data1 fetching complete.\n")
    }
    catch (err) { // if any of those promise got rejected then catch part runs
        console.error("No", err);
    }
    
    console.log("Fetching data2...") // this line is just for clear understanding the difference with the next part.
}

getBlogData();

// Additionally:
// Promise.all() is used when you need all promises to succeed.
//  - If every promise resolves, Promise.all() resolves with an array of their values.
//  - If even one promise rejects, Promise.all() rejects immediately.


// What if there is a chance of one can get resolve and another one can get reject?
// In this case we use Promise.allSettled()
function fetchPostData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data got fetched");
        }, 6000);
    })
}

function fetchCommentData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Data not fetched");
        }, 6000);
    })
}

async function getBlogData2() {
    const results = await Promise.allSettled([
        fetchPostData2(),
        fetchCommentData2()
    ]);
    
    results.forEach(result => {
        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Failed:", result.reason);
        }
    });
    console.log("Data2 fetching complete.\n")
}

getBlogData2();


