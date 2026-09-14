import { useState } from "react";
import { Box2 } from "./components/Box2";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [members, setMembers] = useState([
    //* these values works as default values (not mandatory to give default values)
    { name: "Caroline", age: 27 },
    { name: "Lily", age: 17 },
    { name: "Mabel", age: 67 },
  ]);
  function submitHandler(e) {
    e.preventDefault();

    //* add new member while preserve the previous members
    // setMembers([...members,{name, age}]); 
    //* alternative react way 
    setMembers((prev) => [...prev, {name, age}])

    //* clear the input fields by set it as empty
    setName("");
    setAge("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <input type="number" onChange={(e) => setAge(e.target.value)} value = {age}/>
        <button type="submit">Submit</button>
      </form>

      {members.map((m) => (
        <Box2 name={m.name} age={m.age}></Box2>
      ))}
    </div>
  );
}
