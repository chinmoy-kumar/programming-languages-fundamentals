//NOTE: Encapsulation protects a state and change it through methods.

//> Access modifiers
//- public (default)
//- private -> gives access only inside the class itself.
//- protected -> inherited classes can also access
//- readonly

class employee {
    constructor(
        public name: string,
        private _baseSalary: number,
    ) {}

    //> getter method
    get baseSalary(): number {
        return this._baseSalary;
    }

    //> setter method
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be a negative value");
        }
        this._baseSalary = newSalary;
    }

    get salaryWithBonus(): number {
        return this._baseSalary + 100000;
    }
}

const e1 = new employee("Caroline", 230000);

// e1.baseSalary = -500;

//NOTE: 'get' and 'set' methods no needs to call with ()
console.log(e1.baseSalary);
console.log(e1.salaryWithBonus);
