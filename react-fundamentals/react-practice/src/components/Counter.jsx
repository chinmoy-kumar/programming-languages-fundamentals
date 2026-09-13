import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    function increaseCounter() {
        setCount(count + 1);
    }
    function incrementByValue(value)
    {
        setCount(count + value)
    }
    return (
        <div>
            <button onClick={increaseCounter}>Increment</button>
            <button onClick={() => incrementByValue(3)}>Increment by value</button>
            {count}
            <button onClick={() =>  count <= 0 ? setCount(0) : setCount(count - 1) }>Decrement</button>
        </div>
    )
}