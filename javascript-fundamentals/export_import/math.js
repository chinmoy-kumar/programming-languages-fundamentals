// export file

function add(a, b)
{
    return a + b;
}

// named export
export function subs(a, b) {
    if(a > b) return a - b;
    else return b - a;
}

// named export
export const pi = 3.1416;


// default export
export default add;

