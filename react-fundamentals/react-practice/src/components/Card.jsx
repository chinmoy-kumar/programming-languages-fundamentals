// Note:
// Props and children
// Every component by default contains props
// children is a special, built-in prop that allows you to pass components, HTML elements, or plain text as nested content between the opening and closing tags of another component

//> using props object
/* export default function Card(props) {
  // console.log(props); // check in console in browser 
  return <>
    {props.children}
    <p>First Name: {props.firstName}</p>
    <p>Last Name: {props.lastName}</p>
    <p>Age: {props.age}</p>
  </>;
} */

//> using props object destructing
/* 
export default function Card({ firstName, lastName, age }) {
  return (
    <>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
    </>
  );
}
*/

//> uisng children and props object destructing
export default function Card({ children, firstName, lastName, age }) {
  return (
    <>
      {children}
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
    </>
  );
}
