// Note: 
//- Props and children 
//- Every component by default contains props


//* using props object
/* export default function Card(props) {
  console.log(props); 
  return <>
    <p>First Name: {props.firstName}</p>
    <p>Last Name: {props.lastName}</p>
    <p>Age: {props.age}</p>
  </>;
} */

  
//* using props object destructing
export default function Card({firstName, lastName, age})
{
    return <>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
    </>
}
