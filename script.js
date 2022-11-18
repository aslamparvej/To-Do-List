var formElement = document.getElementById("form");
var inputElement = document.getElementById("todo-text");
var ListElement = document.getElementById("add-todo");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputElement.value.trim().length == 0) {
    alert("Please add To-DO");
  } 
  else {
    ListElement.innerHTML += 
    `<li>
        <span class="list">${inputElement.value}</span>
        <button class="delete">Delete</button>
    </li>`;

    inputElement.value = "";

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    var current_list = document.querySelectorAll(".list");
    for (var i = 0; i < current_list.length; i++) {
      current_list[i].onclick = function () {
        this.style.textDecoration = "line-through";
      };
    }
  }
});
