import { use } from "react"
import { CounterContext } from "../providers/counter.provider"


function NestedDisplay() {
    const {count} = use(CounterContext); //* reads the current value from your CounterContext

  return (
    <div className='box-brown'>
        <h3>Grand Child Component</h3>
        <h1>{count}</h1>
    </div>
  )
}

export default NestedDisplay    