"use strict";
//> Abstract class
//- declared with 'abstract' keyword
//- no instance can be created with abstract class
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can not be negative");
        }
        this._baseSalary = newSalary;
    }
}
class OfficeManager extends Employee {
    calcualtePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    calcualtePay() {
        return this.baseSalary + 3000;
    }
}
