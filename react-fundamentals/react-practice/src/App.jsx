import "./App.css";
import Box from "./components/Box";
// import Card from "./components/Card";
// import TestComponent from "./TestComponent";

function App() {
  /* //* for Card.jsx
return <Card firstName={"chinmoy"} lastName={"kumar"} age={67}> 
    <h1>Welcome</h1>
    <h2>Mr.</h2> 
</Card>
*/

  return (
    <>
      <Box name="Mark" age={21} />
      <Box name="Austin" age={12} />
    </>
  );
}

export default App;
