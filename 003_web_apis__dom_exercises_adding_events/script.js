// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

const addItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

console.log(addItemBtn, alertBtn, consoleBtn);

//Adding Event Listeners to buttons

///addItemBtn.addEventListener('click', (e) => {
///  addLiItem(tasks[Math.floor(Math.random() * tasks.length)]);
///});

///function addLiItem(task) {
///  const ul = document.getElementById('item-list');
///  const li = document.createElement('li');
///  li.textContent = task;
///  ul.appendChild(li);
///}

addItemBtn.addEventListener('click', (e) => {
  const newItem = document.createElement('li');
  newItem.textContent = tasks[Math.floor(Math.random() * tasks.length)];
  itemList.appendChild(newItem);
  itemList.scrollTop = itemList.scrollHeight;
});

alertBtn.addEventListener('click', (e) => {
  alert('This is an alert message!');
});

consoleBtn.addEventListener('click', (e) => {
  console.log('Button clicked!');
});




