<script>
    import { onMount} from 'svelte';
    import { loop_guard} from "svelte/internal";

    onMount (() => {
      console.log("fuck shit");
      var taskInput = document.getElementById("task-input");
      var taskList = document.getElementById("task-list");

      taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          var taskName = taskInput.value.trim();

          console.log("yup");
          console.log(taskInput);
          console.log(taskName);

          if (taskName !== "") {
            var taskItem = document.createElement("li");
            taskItem.className = "task";

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", function() {
              taskItem.classList.toggle("completed", checkbox.checked);
            });

            var taskNameSpan = document.createElement("span");
            taskNameSpan.className = "task-name";
            taskNameSpan.textContent = taskName;

            var deleteButton = document.createElement("span");
            deleteButton.className = "delete-btn";
            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", function() {
              taskItem.remove();
            });

            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskNameSpan);
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            taskInput.value = "";
          }
        }
      });
    });
</script>

<head>
  <title>ToDoList</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      padding: 20px 0;
      margin: 0;
      color: #333;
    }

    .task-form {
      padding: 0 20px;
    }

    .task-input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    #task-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-bottom: 1px solid #ccc;
      color: #333;
    }

    .task-name {
      flex-grow: 1;
      margin-left: 10px;
    }

    .delete-btn {
      color: #ff0000;
      cursor: pointer;
    }

    .task.completed .task-name {
      text-decoration: line-through;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>ToDoList</h1>

    <div class="task-form">
      <input type="text" id="task-input" class="task-input" placeholder="Enter task name">
      <ul id="task-list"></ul>
    </div>
  </div>
</body>

