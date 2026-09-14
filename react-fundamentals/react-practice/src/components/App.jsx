import { useState } from "react";
import { Counter } from "./Counter.jsx";
import Display from "./Display.jsx";

function App()
{
    const [count, setCount] = useState(0);
    return(
        <>
            <Display count = {count} setCount = {setCount}></Display>
            <Counter count = {count} setCount = {setCount}/>
        </>
    );
}

export default App;