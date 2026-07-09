// A callback function is a function passed into another function as an argument, which is then executed (or "called back") inside that outer function to complete an action.

function sum(a, b)
{
    console.log(a + b);
}

// sumCallback here is a callback function.
function calculator (a, b, sumCallback)
{   
    sumCallback(a, b);
}

// Passed sum function as an argument to function calculator. So, it is a callback function.
// Here sum function cann't be written with () because if we write calculator(2, 5, sum()) then the sum() function will not pass as an argument instead it will try to executed there.
calculator(2, 5, sum);


// Callback Hell
// --------------
// Callback hell is a problem because it can make your code difficult to read and maintain. When you have multiple nested callbacks, it’s easy to lose track of what’s happening at each step. This can lead to bugs and errors, and make it harder for other developers to understand and work with your code.

function getData(dataId, getNextData)
{
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData)
        {
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
