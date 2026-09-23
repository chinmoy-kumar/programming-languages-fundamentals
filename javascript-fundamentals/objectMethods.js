const empInfo = {
    firstName: "Isaac",
    lastName: "Olson",
    birthYear: 1992,
    hobby: ["reading", "gradening", "traveling"],

    //> Object method
    /* 
    calcAge: function (birthYear) {
        return 2026 - birthYear;
    } 
    */
    
    //- using this keyword
    calcAge: function(){
        return 2026 - this.birthYear;
    }
}

// console.log(empInfo.calcAge(empInfo.birthYear));
// console.log(empInfo['calcAge'](empInfo.birthYear));

console.log(empInfo.calcAge());

// NOTE: 'this' keyword points to the object which is calling the method.

const user = {
    birthYear: 1995,
    calcAge: function() {
        this.age = 2026- this.birthYear;
        return this.age; // this return is optional
    }
}

// here it calculates the age one time and then use the stored value in age directly. This make the code more efficient
console.log(user.calcAge()) // first call is mandatory

console.log(user.age)
console.log(user.age)
console.log(user.age)