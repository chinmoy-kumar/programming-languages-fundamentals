// named export
function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

// common js exports as Object
module.exports = {
    add, 
    subtract,
    multiply
}