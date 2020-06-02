// Selectors
const todoInput = document.querySelector('.todo.input');
const todoButton = document.querySelector('.todo.button');
const todoList = document.querySelector('.todo.list');


// EventListeners
todoButton.addEventListener('click', addTodo);

// Functions

function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();
    // todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = "hey";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
}


/*

var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toogleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    /*  toogleAll: function() {
     var totalTodos = this.todos.length;
     var completedTodos = 0;
     // get number of completed todos
     /*  for (var i = 0; i < totalTodos; i++) {
          if (this.todos[i].completed === true) {
              completedTodos++;
          }
      }
     this.todos.forEach(function(todo) {
         if (todo.completed === true) {
             completedTodos++;
         }
     });
       //CASE 1: if everything's true make everything false
 if (completedTodos === totalTodos) {
   for (var i = 0; i < totalTodos; i++) {
       this.todos[i].completed = false;
   }
  this.todos.forEach(function(todo) {
      todo.completed = false;
  });
  // CASE 2: else make everything true
} else {
   for (var i = 0; i < totalTodos; i++) {
       this.todos[i].completed = true;
   }
  this.todos.forEach(function(todo) {
      todo.completed = true;
  });
 }


     this.todos.forEach(function(todo) {
         //CASE 1: if everything's true make everything false
         if (completedTodos === totalTodos) {
             todo.completed = false;
             // CASE 2: else make everything true
         } else {
             todo.completed = true;
         }
     }
     );
 }
};

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = " ";
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById(
            "changeTodoPositionInput"
        );
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(
            changeTodoPositionInput.valueAsNumber,
            changeTodoTextInput.value
        );
        changeTodoPositionInput.value = " ";
        changeTodoTextInput.value = " ";
        view.displayTodos();
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toogleCompleted: function() {
        var toogleCompletedPositionInput = document.getElementById(
            "toogleCompletedPositionInput"
        );
        todoList.toogleCompleted(toogleCompletedPositionInput.valueAsNumber);
        toogleCompletedPositionInput.value = " ";
        view.displayTodos();
    },
    toogleAll: function() {
        todoList.toogleAll();
        view.displayTodos();
    },
};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector(" ul");
        todosUl.innerHTML = " ";
          for (var i = 0; i < todoList.todos.length; i++) {
         var todoLi = document.createElement("li");
         var todo = todoList.todos[i];
         var todoTextWithCompletion = "";

         if (todo.completed === true) {
             todoTextWithCompletion = "(x)" + todo.todoText;
         } else {
             todoTextWithCompletion = "( )" + todo.todoText;
         }

         todoLi.id = i;
         todoLi.textContent = todoTextWithCompletion;
         todoLi.appendChild(this.createDeleteButton());
         todosUl.appendChild(todoLi);
     }
*/


/*    todoList.todos.forEach(function(todo, position) {
               var todoLi = document.createElement("li");
               var todoTextWithCompletion = "";

               if (todo.completed === true) {
                   todoTextWithCompletion = "(x)" + todo.todoText;
               } else {
                   todoTextWithCompletion = "( )" + todo.todoText;
               }
               todoLi.id = position;
               todoLi.textContent = todoTextWithCompletion;
               todoLi.appendChild(this.createDeleteButton());
               todosUl.appendChild(todoLi);
           }, this);
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },

    setUpEventListeners: function() {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(event) {
            // get the element that was clicked on
            var elementClicked = event.target;
            // check if elementClicked is delete button
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};
view.setUpEventListeners(); */