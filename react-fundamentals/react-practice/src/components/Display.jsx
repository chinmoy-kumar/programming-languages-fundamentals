import "./Box.css"
import NestedDisplay  from "./NestedDisplay";

function Display() {
  return (
    <div className="box-orange">
        <h3>Child component</h3>
        <div>
          <NestedDisplay></NestedDisplay>
        </div>
    </div>
  )
}

export default Display