import { Counter } from "./Counter.jsx";
import Display from "./Display.jsx";
import CounterProvider from "../providers/counter.provider.jsx";
import "./Box.css";

function App() {
  return (
    <CounterProvider>
      <div className="box-tomato">
        <h3>Parent component</h3>
        <Counter/>
        <Display/>
      </div>
    </CounterProvider>
  );
}

export default App;
