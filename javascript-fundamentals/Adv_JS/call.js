// The call() method is used to call a function with an object as an argument.
// The call() method takes this as the first argument.

// Borrowing a Method from Another Object
let name = {
    firstName: "Robert",
    lastName: "Bob",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

let name2 = {
    firstName: "Alias",
    lastName: "Martin"
}

// first argument of call is what we want to `this` to be pointing to.
name.printFullName.call(name2);
// here `this` of name object function is pointing to name2 instead of name object.

// The call() method executes the function immediately.
// It does not return a new function.

// The call() Method with Arguments
const person = {
    fullName: function(city, country){
        console.log(this.firstName + " " + this.lastName + "," + city + "," + country); 
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");
