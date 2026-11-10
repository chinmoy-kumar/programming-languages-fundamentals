//> Abstract class
//- declared with 'abstract' keyword
//- no instance can be created with abstract class
abstract class Employee {
    constructor(
        public name: string,
        private _baseSalary: number,
    ) {}

    get baseSalary() {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary can not be negative");
        }

        this._baseSalary = newSalary;
    }

    //> Abstract method
    //- abstract method can not be implemented in the abstract class
    //- abstract method must be implemented in inherited class
    abstract calcualtePay(): number;

}


class OfficeManager extends Employee{
    calcualtePay(){
        return this.baseSalary + 5000;
    }
}

class Developer extends Employee{
    calcualtePay(){
        return this.baseSalary + 3000;
    }
}