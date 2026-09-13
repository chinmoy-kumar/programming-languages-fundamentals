import { useState } from "react";
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
// NOTE: Rule of using React hooks
//- Must use in component top level
//- Must use inside react component, not in any another function or tag

export function Box2({ name, age })
{
    //* useState returns an array. which we have destructured.
    //* useState returns 2 things in an array form. First one is a variable and second one is a function.
    //* Use base of differnt data types as parameters of useState() like for string "", for number 0 etc
    const [member, setMember] = useState("");

    function clickHandeler(name)
    {
        setMember(name);
    }
    // console.log(member)

    return(
        <div onClick={() => clickHandeler(name)} className="box">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {member && <p>Hey, {member}!</p>}
        </div>
    )
}