// You can work here or download the template
const todoList = document.getElementById('todo-list');

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

