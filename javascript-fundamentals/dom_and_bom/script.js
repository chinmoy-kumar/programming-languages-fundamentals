// Example-01
// -----------
/* document.getElementById("changeTextButton").addEventListener("click", function () {
    // General function points the current context that is calling it.
    console.log(this); 
})

// same thing with arrow function 
document.getElementById("changeTextButton").addEventListener("click", () => {
    // Arrow function points to the global. In this case which is Window.
    console.log(this);
})  */

document.getElementById("changeTextButton").addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    // check if it points that paragraph correctly
    // console.log(paragraph)

    // change the content of that paragraph
    paragraph.textContent = "Paragraph content has changed";
})

// Example-02
// -----------
document.getElementById('highlightFirstCity').addEventListener('click', function(){
    let list = document.getElementById('citiesList')
    list.firstElementChild.classList.add('highlight');
})

// Example-03
// -----------
document.getElementById('changeOrder').addEventListener('click', function () {
    let coffee = document.getElementById('coffeeType');
    // change content
    coffee.textContent = "Expresso";
    // change style with CSS
    coffee.style.backgroundColor = "#3a3a3a";
    coffee.style.fontWeight = "Bold";
    coffee.style.padding = "10px";

})

// Example-04
// -----------
document.getElementById('addNewItem').addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.textContent = "Banana";
    document.getElementById('shoppingList').appendChild(newItem);
})

// Example-05
// -----------
document.getElementById('removeLastTask').addEventListener('click', function () {
    let taskList = document.getElementById('taskList');

    // removes whole task list
    // taskList.remove();

    // removes the last element
    taskList.lastElementChild.remove();
})