// For each
// ----------
let country = ["Bermuda", "Burundi", "Belarus", "Tunisia"];

let allCountry = country.forEach((c, idx) => {
    console.log(`${idx} -> ${c}`);
    // return `${idx} -> ${c}`; // forEach loop can't return
})

// Map
// -----
let allCountry2 = country.map((c, idx) => {
    // console.log(`${idx} -> ${c}`);
    return `${idx} -> ${c}`; // map can return 
})
console.log(allCountry2) // returned as an array