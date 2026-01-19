// You can work here or download the template
/* const input = document.getElementById('userInput');
const form = document.querySelector('form');
const errorP = document.createElement('p');




form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim() === "") {
        errorP.textContent = "Please enter a task";
        errorP.classList.add("text-red-500");
        form.appendChild(errorP);
        return;
    }

    const taskList = document.querySelector("ul");
    const task = document.createElement("li");
    task.innerText = input.value.trim();
    task.dataset.id = input.value.uuid();
    task.classList.add("border", "p-2", "my-2", "rounded", "bg-gray-100");
    taskList.appendChild(task);

    const id = crypto.randomUUID();
    const taskInput = { 'id: ': id, 'content: ': input.value.trim() };

    const tasksObject = JSON.parse(localStorage.getItem("tasks")) || {};
    tasksObject[id] = taskInput;
    localStorage.setItem("tasks", JSON.stringify(tasksObject));

    form.reset();
});
 */

//Correction:


const form = document.querySelector('form');
const ul = document.querySelector("ul");
const reloadBtn = document.querySelector("reload");

//create the li item for the display
const createLiItem = (newItem) => {
    const li = document.createElement("li");
    li.setAttribute("id", newItem.id);
    li.textContent = newItem.content;
    li.classList.add('flex', 'items-center', 'justify-between', 'border', 'p-2', 'my-2', 'rounded', 'bg-gray-100');

    const deleteBtn = document.createElement ("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        localStorage.setItem("tasks", JSON.stringify(tasks.filter((task) => task.id !== newItem.if)))
    })

    li.appendChild(deleteBtn);
}

//submission of the form

form.addEventListener("submit", (e) => {
    (e).preventDefault();
    const userInput = document.getElementById('userInput').value.trim();

    if(!userInput) return alert ("Please, fille the empty fields");

    const newTask = {
        id: `task-${crypto.randomUUID().replaceAll("-", "")}`, 
        content: userInput
    };

    const newLi = createLiItem(newTask);
    ul.insertBefore(newLi, ul.firstElementChild);
    
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
   
    tasks.unshift(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    form.reset();
})

//reload button

reloadBtn.addEventListener("click", () => {
    window.location.reload();

})

//each time we reload, anything stored in local Storage is creating a new Li
window.addEventListener("load", () =>  {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
        const newLi = createLiElement(task);
        ul.appendChild(newLi);
    })

})