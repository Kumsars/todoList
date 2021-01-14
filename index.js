//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//TODO array
let todosArr = [];

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//Functions
function addTodo(event){

    event.preventDefault(); //Prevent browser refreshing
    //Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    todosArr.push(newTodo.innerText);
    console.log(todosArr);
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Add todo to local storage
    // saveLocalTodos(todoInput.value);

    //Check BTN
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<span>&#10003;</span>';
    doneButton.classList.add("complete-btn");
    todoDiv.appendChild(doneButton);

    //Delete BTN
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<span>&#215;</span>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    todoList.append(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    const todo = item.parentElement;
  
    if(item.classList[0] === "delete-btn"){
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
            
        });
        }
    
    if(item.classList[0]  === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                todo.style.display = "flex";
                }else{
                    todo.style.display = "none"; 
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                    }else{
                        todo.style.display = "none"; 
                    }
           
            }
    });
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    div = ul.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        a = div[i].getElementsByTagName("li")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}

//Stores todos
// function saveLocalTodos(todo){
//     let todos;
//     if(localStorage.getItem('todos') === null){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(todo);
//     localStorage.setItem('todos',JSON.stringify(todos));
// }

// function getTodos(){
//     let todos;
//     if(localStorage.getItem('todos') === null){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.forEach(function)
// }