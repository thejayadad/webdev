const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const taskItem = createTaskItem(taskText);
  taskList.appendChild(taskItem);

  taskInput.value = "";
});

function createTaskItem(taskText) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      taskTextElement.classList.add("completed");
    } else {
      taskTextElement.classList.remove("completed");
    }
  });

  const taskTextElement = document.createElement("span");
  taskTextElement.classList.add("task-text");
  taskTextElement.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(checkBox);
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(deleteButton);

  return taskItem;
}
