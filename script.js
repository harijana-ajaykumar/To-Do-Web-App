function addTask(){

  let taskInput = document.getElementById("taskInput");
  let dateInput = document.getElementById("dateInput");
  let timeInput = document.getElementById("timeInput");

  let taskText = taskInput.value;

  if(taskText === ""){
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    <div class="task-top">
      <span>${taskText}</span>
    </div>

    <small>Date: ${dateInput.value || "Not Set"}</small>
    <small>Time: ${timeInput.value || "Not Set"}</small>

    <div class="task-buttons">

      <button class="complete-btn" onclick="completeTask(this)">
        Complete
      </button>

      <button class="edit-btn" onclick="editTask(this)">
        Edit
      </button>

      <button class="delete-btn" onclick="deleteTask(this)">
        Delete
      </button>

    </div>
  `;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
}

function completeTask(button){

  let task = button.parentElement.parentElement.querySelector("span");

  task.classList.toggle("completed");
}

function editTask(button){

  let task = button.parentElement.parentElement.querySelector("span");

  let updatedTask = prompt("Edit Task", task.innerText);

  if(updatedTask !== null && updatedTask !== ""){
    task.innerText = updatedTask;
  }
}

function deleteTask(button){

  button.parentElement.parentElement.remove();
}