document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    // load data from local storage (if any)
    // JSON.parse convert back to the previous form of that object that previously converted using JSON.stringify()
    let tasks = JSON.parse(localStorage.getItem('storeTask')) || [];

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
        renderTask(newTask);
    })

    // display tasks
    function renderTask(tsk)
    {
        const li = document.createElement('li');
        if(tsk.isCompleted === true) li.classList.add('completed', 'task-text');
        li.setAttribute('data-id', tsk.id);
        li.innerHTML = `
            <span class="task-text">${tsk.text}</span>
            <button class="delete-btn">Delete</button>
        `
        todoList.appendChild(li);
        li.classList.add("todo-item");

        // mark as completed
        li.addEventListener('click', (e)=>{
            // if clicked on delete button only
            if(e.target.tagName === 'BUTTON'){
                return;        
            }
            tsk.isCompleted = !tsk.isCompleted;
            li.classList.toggle('completed')
            saveData();

        })

        // delete task from list
        li.querySelector('button').addEventListener('click', (e) => {
            // stop to propagate further
            e.stopPropagation();

            // filter out that specific task
            // filter method only returns the true values.
            // t iterates through each obj in tasks.
            tasks = tasks.filter(t => t.id !== tsk.id);
            // removes that matched li
            li.remove();
            saveData();
        })
    }

    // function to save value in browser local storage
    function saveData() {
        // 'localStorage' is the api of local storage of browser
        // 'storeTask' is an key
        // Next it only saves data as a special type of string. To make that string we use 'JSON.stringify()'
        localStorage.setItem('storeTask', JSON.stringify(tasks));
    }
})