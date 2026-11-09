//NOTE: Polymorphism only supports 'override' but does not support 'overloading'

class OfficeEmployees {
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

    describe(): string {
        return `${this.name} earns ${this.baseSalary}`;
    }

    calculatePay() {
        return this.baseSalary;
    }
}

class Managers extends OfficeEmployees {
//- if no extra attribute added then no need to call constructor for the child class

    //> polymorphism
    //- overriding
    override calculatePay(){
        return this.baseSalary + 50000;
    }

}

const oes1 = new OfficeEmployees("Caroline", 230000);
console.log(oes1.describe());

const ms1 = new Managers("Lois", 4500000);
console.log(ms1);
console.log(ms1.describe());


console.log(oes1.calculatePay())
console.log(ms1.calculatePay())