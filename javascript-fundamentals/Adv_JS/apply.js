// apply() also runs the function immediately like call(), but arguments are provided as an array.
// The main difference between call() and apply() is how arguments are passed

function introduction(city, country){
    console.log(`My name is ${this.name}. I live in ${city}, ${country}`);
}

const person = {
    name: "Robert"
}

introduction.apply(person, ["Dhaka", "Bangladesh"]);

