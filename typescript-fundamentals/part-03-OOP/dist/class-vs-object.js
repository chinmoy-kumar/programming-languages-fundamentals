"use strict";
//- Traditional way of creating a class
/*
class Student {
    name: string;
    roll: number;

    constructor(name: string, roll: number) {
        this.name = name;
        this.roll = roll;
    }
}
 */
//- Shorthand:
class Student {
    name;
    roll;
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
}
const s1 = new Student("Caroline", 23);
const s2 = new Student("Winifred", 21);
console.log(s1);
console.log(s1 instanceof Student);
console.log(s2);
