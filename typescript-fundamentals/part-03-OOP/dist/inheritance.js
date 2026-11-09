"use strict";
class OfficeEmployee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    //> getter method
    get baseSalary() {
        return this._baseSalary;
    }
    //> setter method
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be a negative value");
        }
        this._baseSalary = newSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary + 100000;
    }
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
//> Inheritance
//- Manager class inherits OfficeEmployee class
class Manager extends OfficeEmployee {
    teamMemberCount;
    // teamMemberCount: number;
    // constructor(name: string, baseSalary: number, teamMemberCount: number) {
    //     super(name, baseSalary);
    //     this.teamMemberCount = teamMemberCount;
    // }
    //- shorthand
    constructor(name, baseSalary, teamMemberCount) {
        super(name, baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
}
const oe1 = new OfficeEmployee("Caroline", 230000);
console.log(oe1.describe());
const m1 = new Manager("Lois", 4500000, 20);
console.log(m1);
console.log(m1.describe());
