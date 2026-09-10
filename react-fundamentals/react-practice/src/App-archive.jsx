import "./App.css";
import Box from "./components/Box";
// import Card from "./components/Card";
// import TestComponent from "./TestComponent";
// import Box2 from "./components/Box2";

  const member = [
    { name: "Caroline", age: 27 },
    { name: "Lily", age: 17 },
    { name: "Mabel", age: 67 },
  ];

function App() {
  /* //> for Card.jsx
return <Card firstName={"chinmoy"} lastName={"kumar"} age={67}> 
    <h1>Welcome</h1>
    <h2>Mr.</h2> 
</Card>
*/

  /* //> for Box.jsx 
  return (
    <>
      <Box name="Mark" age={21} />
      <Box name="Austin" age={12} />
    </>
  ); */

  //> dynamic rendering from array (Box.jsx)
  return (
    <>
      {/* //* manual way */}
      {/* 
      <Box name={member[0].name} age={member[0].age} />
      <Box name={member[1].name} age={member[1].age} />
      <Box name={member[2].name} age={member[2].age} />
     */} 
      
      {/* //* dynamic way */}
      {/* {member.map((m) => (
        <Box name={m.name} age={m.age}/>
      ))} */}

      {/* //* dynamic way with chaining */}
      {
        member.sort((a, b) => a.age - b.age).map((m) => (
          <Box name={m.name} age={m.age}/>
        ))
      }
    </>
  );
}
export default App;
