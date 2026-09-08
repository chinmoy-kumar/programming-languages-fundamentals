//* Rules to Create React Component
//? 1) File extension must be .jsx
//? 2) First letter of component must be capital letter
//? 3) There must be a export
//? 4) There must be a single root returned

//* using arrow function
/* 
const TestComponent = () =>
{
    return <h1>Hello World Component</h1>
}

export default TestComponent; 
*/

//* using general function
/* 
export default function TestComponent() {
    return <h1>Hello world component</h1>;  // single root returned
    // return <h1>Hello world component</h1> <p>chinmoy</p>;  //! throws error because not a single root returned
} 
*/

//* return multiple jsx tags
/* 
export default function TestComponent(){
    return (<div>
        <h1>Introduction</h1>
        <p>My name is Chinmoy</p>
        <span>I am from Bangladesh</span>
    </div>);
}
 */

//* return multiple jsx tags using React Fragment <>...code... </>
/* 
export default function TestComponent() {
  return (
    <> 
      <div>
        <h1>Introduction</h1>
        <p>My name is Chinmoy</p>
        <span>I am from Bangladesh</span>
      </div>
      <div>
        <h2>This is my another div</h2>
      </div>
    </>
    
  );
} 
*/

//* using variable in jsx
const userName = "Robert";
const country = "England";

export default function TestComponent() {
  return (
    <> 
      <div>
        <h1>Introduction</h1>
        <p>My name is {userName}</p>
        <span>I am from {country}</span>
      </div>
      <div>
        <h2>This is my another div</h2>
      </div>
    </>
    
  );
}