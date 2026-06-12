// Static: 
// It can only be called by the class itself, not by objects.
// both variable & method.

class Calculator
{
    static prime = 2;
    static add(num1, num2)
    {
        return `result is: ${num1 + num2}`;
    }
}

/* Wrong because static can't be called by objects. 
let calc1 = new Calculator();
console.log(calc1.prime);
console.log(calc1.add(2, 5)); 
*/

console.log(Calculator.prime);
console.log(Calculator.add(2, 5));
