// Abstraction is a way of hiding the implementation details and showing only the functionality to the users.

function Employee(name, age, baseSalary)
{
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    this.employeeDetails = function()
    {
        console.log(`Name: ${name} Age: ${age} Salary: ${baseSalary}`);
        calculateFinalSalary(); // abstraction
    }

    let monthlyBonus = 2000;
    let calculateFinalSalary = function()
    {
        let finalSalary = baseSalary + monthlyBonus;
        console.log(`Final salary is: ${finalSalary}`);
    }
}

let emp1 = new Employee("Robert", 39, 50000);
emp1.employeeDetails();