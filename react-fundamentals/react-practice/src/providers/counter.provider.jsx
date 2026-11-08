import { createContext } from "react";
import { useState } from "react";


//* It creates a React Context container/channel through which counter data can be shared between components. without prop drilling
// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext();

function CounterProvider({ children }) {
    const [count, setCount] = useState(0);
  return <CounterContext.Provider value={{count, setCount}}>
    {children}
    </CounterContext.Provider>;
}

export default CounterProvider;
