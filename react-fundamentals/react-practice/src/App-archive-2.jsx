//NOTE: Topics covered
//- dynamic counter button
//- take input from user

import { Box2 } from "./components/Box2";
// import { Counter } from "./components/Counter";
import { useState } from "react";

const member = [
  { name: "Caroline", age: 27 },
  { name: "Lily", age: 17 },
  { name: "Mabel", age: 67 },
];

export default function App() {
  const[name, setName] = useState("");

  function handleSubmit(e)
  {
    e.preventDefault(); //* Prevents the auto reload after click the submit button
    alert(`user name is: ${name}`);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button type = "submit">Submit</button>
      </form>

      {member.map((m) => (
        <Box2 name={m.name} age={m.age} />
      ))}

      {/* <Counter></Counter> */}
    </div>
  );
}
