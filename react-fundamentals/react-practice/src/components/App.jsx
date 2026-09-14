import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);
    
    useEffect(() => {
        console.log("useEffect func triggered");
    }, [anotherCount]) //* dependency array has 'anotherCount'. So the useEffect function will only trigger while the 'anotherCount' changes

  return (
    <div>
        <button onClick={() => setCount(count+1)}>Increment {count}</button>
        <button onClick={() => setAnotherCount(anotherCount+1)}>Another Increment {anotherCount}</button>
    </div>
  )
}


export default App