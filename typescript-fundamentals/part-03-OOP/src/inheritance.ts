class OfficeEmployee {
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
}

//> Inheritance
//- Manager class inherits OfficeEmployee class
class Manager extends OfficeEmployee {
    // teamMemberCount: number;

    // constructor(name: string, baseSalary: number, teamMemberCount: number) {
    //     super(name, baseSalary);
    //     this.teamMemberCount = teamMemberCount;
    // }

    //- shorthand
    constructor(
        name: string,
        baseSalary: number,
        public teamMemberCount: number,
    ) {
        super(name, baseSalary);
    }
}

const oe1 = new OfficeEmployee("Caroline", 230000);
console.log(oe1.describe());

const m1 = new Manager("Lois", 4500000, 20);
console.log(m1);
console.log(m1.describe());
