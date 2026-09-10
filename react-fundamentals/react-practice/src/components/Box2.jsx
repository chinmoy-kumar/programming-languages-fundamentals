import "./Box.css";

/* //> Event handelers
export function Box2({ name, age }) {
    function clickHandeler(name)
    {
        console.log(`Hello, ${name}`);
    }
    function anotherClickHandeler()
    {
        console.log("Welcome to this place");
    }
    function greetings(name) {
        clickHandeler(name);
        anotherClickHandeler();
    }

  return (<div onClick={() => greetings(name)} className="box">
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>);
}
 */


//> React hooks - useState
export function Box2({ name, age })
{
    function clickHandeler(name)
    {
        console.log(`Hello, {name}`)
    }
    return(
        <div onClick={clickHandeler} className="box">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}