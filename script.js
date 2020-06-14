var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
    },
};

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(position) {
        todoList.todos.splice(position, 1);
        view.displayTodos();
    },
};


var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        todoList.todos.forEach(function(todo) {
            var todoLi = document.createElement('li');
            var todoTextWithCompleted = ''
            if (todo.completed === true) {
                todoTextWithCompleted = todo.todoText;
            } else {
                todoTextWithCompleted = todo.todoText;
            }

            todoLi.textContent = todoTextWithCompleted;
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