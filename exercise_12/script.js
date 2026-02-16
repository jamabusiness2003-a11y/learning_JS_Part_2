const textInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const listTasks = document.getElementById("listTasks");
const categories = document.getElementById("categories");
const filter = document.getElementById("filter");

let tasks = JSON.parse(localStorage.getItem("tasksV2")) || [];
let currentFilter = "all";

renderTasks();

addBtn.addEventListener("click", addTask);

function addTask() {
    const text = textInput.value.trim();
    const categoriesValue = categories.value;
    let task = {};

    if (text === "") return;

    task = {
        text,
        category: categoriesValue,
        completed: false
    };

    tasks.push(task);
    textInput.value = "";
    saveAndRender();
}

function renderTasks() {
    listTasks.innerHTML = "";

    tasks.forEach((task, index) => {

        if (currentFilter !== "all" && task.category !== currentFilter){
            return;
        }

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.category}">${capitalize(task.category)}</span>
            <p class="${task.completed ? "completed" : ""}">${task.text}</p>
            <button class="detele-btn">x</button>
        `;

        toggleCompleted(li, index);

        deleteTask(li, index);

        listTasks.appendChild(li);
    });

}


filter.addEventListener("change", (e) => {
    currentFilter = e.target.value;
    renderTasks();
});


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function toggleCompleted(element, index) {
    const p = element.querySelector("p");

    p.addEventListener("click", () => {
        tasks[index].completed = !tasks[index].completed;
        saveAndRender();
    });

}

function deleteTask(element, index) {
    const deleteBtn = element.querySelector("button");

    deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        saveAndRender();
    });
}

function saveAndRender() {
    localStorage.setItem("tasksV2", JSON.stringify(tasks));
    renderTasks();
}