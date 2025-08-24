const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskActions);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

function handleTaskActions(e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("completed");
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}
