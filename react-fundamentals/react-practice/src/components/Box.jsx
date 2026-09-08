import "./Box.css"; // connect a css file

//* using if
/* 
export default function Box({name, age})
{
    if(age < 18)
    {
        return <div className = "warning">you are not allowed.</div>
    }
    return (
        <div className = "box">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
} 
*/

//* using alternative way: short-circuit evaluation
/* export default function Box({ name, age }) {
  return (
    //NOTE: if the left slide condition of && operator is truthy, only then it will run the right slide of && operator.
    <>
      {age > 18 && (
        <div className="box">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      )}
      {age < 18 && (
        <div className="warning">
          <p>You are not allowed</p>
        </div>
      )}
    </>
  );
} */

//* using ternary operator
export default function Box({ name, age }) {
  return (
    <>
      {age > 18 ? (
        <div className="box">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      ) : (
        <div className="warning">
          <p>You are not allowed</p>
        </div>
      )}
    </>
  );
}
