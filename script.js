var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });

    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
};

var handlers = {

    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        if (addTodoTextInput.value == "") {
            alert("Please add todo input.");
        } else {
            todoList.addTodo(addTodoTextInput.value);
            addTodoTextInput.value = '';
            view.displayTodos();
        }
    },

    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach(function(todo, position) {
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = todo.todoText;
            } else {
                todoTextWithCompletion = todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);

    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
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

view.setUpEventListeners();