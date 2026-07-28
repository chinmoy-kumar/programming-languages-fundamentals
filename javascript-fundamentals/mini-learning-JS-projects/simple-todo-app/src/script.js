document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    // load data from local storage (if any)
    // JSON.parse convert back to the previous form of that object that previously converted using JSON.stringify()
    const tasks = JSON.parse(localStorage.getItem('storeTask')) || [];

    tasks.forEach(tsk => renderTask(tsk));

    addTaskBtn.addEventListener("click", () => {
        const taskText = todoInput.value.trim();

        // check if the input field is empty
        if (taskText === "") return;

        // create object for each task
        const newTask = {
            id: Date.now(),
            text: taskText,
            isCompleted: false,
        }
        // push newTask to that tasks array
        tasks.push(newTask);
        // save data in local storage
        saveData();
        // clear input field
        todoInput.value = "";
        console.log(tasks);
    })

    // display tasks
    function renderTask(tsk)
    {
        console.log(tsk);
    }

    // function to save value in browser local storage
    function saveData() {
        // 'localStorage' is the api of local storage of browser
        // 'storeTask' is an key
        // Next it only saves data as a special type of string. To make that string we use 'JSON.stringify()'
        localStorage.setItem('storeTask', JSON.stringify(tasks));
    }
})