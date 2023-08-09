// tests to see if user input is being received

document.getElementById ('add-task').onclick = function () {
   let task = document.getElementById('task').value
   console.log(task); // check the console to see if the task in the text box is being displayed

   // refers to the container of the tasks added
   let taskSection = document.getElementById('tasks-section')

   // creates a new container for each task element

   let newContainer = document.createElement('div');
   newContainer.className = "newContainer";

   // appends the tasks container to the larger container
   taskSection.appendChild(newContainer);

// creates a task
   let newTask = document.createElement('div');
   newTask.textContent = task;
   newTask.className = "task";

// appends the task into the container
   newContainer.appendChild(newTask);

}



