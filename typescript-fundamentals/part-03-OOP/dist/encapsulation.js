"use strict";
//NOTE: Encapsulation protects a state and change it through methods.
//> Access modifiers
//- public (default)
//- private -> gives access only inside the class itself.
//- protected -> inherited classes can also access
//- readonly
class employee {
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
}
const e1 = new employee("Caroline", 230000);
// e1.baseSalary = -500;
//NOTE: 'get' and 'set' methods no needs to call with ()
console.log(e1.baseSalary);
console.log(e1.salaryWithBonus);
