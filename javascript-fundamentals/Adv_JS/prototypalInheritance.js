function Person(name)
{
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Welcome, ${this.name}`);
}

const p1 = new Person("Chinmoy");
p1.greet();