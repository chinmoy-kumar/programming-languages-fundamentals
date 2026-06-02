/*
Comparison Operator or Equality Operator
2 types:
==: Loose Equality Operator (also called Abstract Equality)
===: Strict Equality Operator (also called Identity Operator)

Loose Equality Operator:
The double equals operator == performs type coercion, meaning it forces the values to a common type before comparing them, which often leads to hidden bugs and bizarre logical errors.
*/


// Strict Equality Operator(===):
// The triple equals operator === checks both the value and the data type without altering them, making your code safer and much more predictable. 

if(5 === "5")
    console.log("equal"); 
else
    console.log("not equal"); // not equal because false (different data types)

//Loose Equality Operator:
// The double equals operator == performs type coercion, meaning it forces the values to a common type before comparing them, which often leads to hidden bugs and bizarre logical errors.
// It converting types behind the scenes.

if(5 == "5")
    console.log("equal"); // equal because string converted to number
else
    console.log("not equal"); 
    
    