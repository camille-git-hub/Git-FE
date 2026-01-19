// You can work here or download the template
const todoList = document.getElementById('todo-list');

//Display to-dos

function displayTodos(todos) {
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.title;
    todoItem.classList.add("mb-2");

    if (todo.completed) {
      todoItem.classList.add("line-through", "text-green-500");
    } else {
      todoItem.classList.add("text-red-500");
    }
    todoList.appendChild(todoItem);
  })
}

//Function async await to fetch the todos

async function fetchTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    displayTodos(data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};


fetchTodos();

// Alternative solution using only Promises

const path = 'https://jsonplaceholder.typicode.com/todos';

let taskId = 0;

fetch(path)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Task ${task.id}: ${task.title}`;
      listItem.textContent += task.completed ? ' (Completed)' : ' (Pending)';
      listItem.style.color = task.completed ? 'green' : 'red';
      listItem.style.marginBottom = '8px';
      todoList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

