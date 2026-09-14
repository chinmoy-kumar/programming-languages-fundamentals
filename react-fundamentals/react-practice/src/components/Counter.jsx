import { use } from "react";
import "./Box.css";
import { CounterContext } from "../providers/counter.provider";

export function Counter() {
  const {count, setCount} = use(CounterContext);

  function increaseCounter() {
    setCount(count + 1);
  }
  function incrementByValue(value) {
    setCount(count + value);
  }
  return (
    <div className="box">
      <button onClick={increaseCounter} className="btn">Increment</button>
      <button onClick={() => incrementByValue(3)} className="btn">Increment by value</button>
      <button onClick={() => (count <= 0 ? setCount(0) : setCount(count - 1))} className="btn">
        Decrement
      </button>
    </div>
  );
}
