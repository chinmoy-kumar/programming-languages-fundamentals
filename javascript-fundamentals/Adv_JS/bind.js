const person = {
    name: "Chinmoy",
    greet: function(){
        console.log(`Hey! I'm ${this.name}`);
    }
}

person.greet();

// If a function referance is transfered to another variable then the context of 'this' gets lost (in this case the context of person).
// const againGreet = person.greet;
// againGreet() // output: Hey! I'm Undefined. (becuase the context lost of this keyword)

// For this reason we use 'Bind'. To add the context through bind.
const boundGreet = person.greet.bind({name: "Tirtho "}); // 
boundGreet();   
