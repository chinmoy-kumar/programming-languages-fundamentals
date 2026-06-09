let a = {
    name: "Chinmoy",
    language: "Bengali",
    run: () => {
        console.log("Shoutout from A");
    }
}

let p = {
    run: () => {
        console.log("Shoutout from P");
    }
}

p.__proto__ = {
    hobby: "travelling",
}


a.__proto__ = p;

console.log(a.hobby);

// Finding chain for hobby property
// under a (not found) -> a.__proto__ which is p (not found) -> p.__proto__ (found)