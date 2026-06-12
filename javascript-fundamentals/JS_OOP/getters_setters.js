class Employee
{
    #salary;
    constructor(name, salary)
    {   
        if(salary < 0)
        {
            throw new Error("Salary cannot be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary()
    {
        return this.#salary;
    }

    set salary(value)
    {
        if(value < 0)
        {
            console.error("Invalid salary");
        }
        else
        {
            this.#salary = value;
        }
    }
}

let emp1 = new Employee("Robert", 30000);

// NOTE: no need to give () to call get method
// get using getter
console.log(emp1.salary);
// set using setter
emp1.salary = 50000;
console.log(emp1.salary);