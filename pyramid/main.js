

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  if (taskInput.value.trim() !== '') {
    const taskText = taskInput.value;
    taskInput.value = '';

    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <button>Delete</button>
    `;

    taskList.appendChild(li);

    li.querySelector('button').addEventListener('click', () => {
      taskList.removeChild(li);
    });
  }
});
