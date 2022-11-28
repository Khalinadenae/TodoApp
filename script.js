// S E L E C T O R S 
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//  E V E N T  L I S T E N E R S 
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener("click", addTodo)
todoList.addEventListener('click', deleteCheck)

// F U N C T I O N S 

function addTodo(event){
  // prevent default behavior 
  event.preventDefault()
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo");
  // create LI 
  const newTodo = document.createElement('li')
  // add todo to local storage 
  saveLocalTodos(todoInput.value)
  // get user input
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)
  // mark as complete button 
  const completedButton = document.createElement("button")
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
  completedButton.classList.add("complete-btn")
  todoDiv.appendChild(completedButton)
  // delete todo button  
   const deleteButton = document.createElement("button")
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
  deleteButton.classList.add("delete-btn")
  todoDiv.appendChild(deleteButton)
  
  // append to list 
  todoList.appendChild(todoDiv)
  
  // clear input value 
  todoInput.value = ""; 

}


function deleteCheck(event){
  const item = event.target;
  // Delete todo
  if(item.classList[0] === 'delete-btn'){
    const todo = item.parentElement;
    // remove from local storage 
    removeLocalTodos(todo)
    // remove from UI 
    todo.remove()
  }
  
  if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle("completed")
  }
}


function saveLocalTodos(todo){
  let todos;
  if (localStorage.getItem('todos') === null){
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'))
    }
  
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos));
}


console.log(localStorage)


function getTodos(){
    let todos;
  if (localStorage.getItem('todos') === null){
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'))
    }
  
  todos.forEach(function(todo){
     const todoDiv = document.createElement("div")
     todoDiv.classList.add("todo");
  // create LI 
  const newTodo = document.createElement('li')
  // get user input
  newTodo.innerText = todo
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)
  // mark as complete button 
  const completedButton = document.createElement("button")
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
  completedButton.classList.add("complete-btn")
  todoDiv.appendChild(completedButton)
  // delete todo button  
   const deleteButton = document.createElement("button")
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
  deleteButton.classList.add("delete-btn")
  todoDiv.appendChild(deleteButton)
  
  // append to list 
  todoList.appendChild(todoDiv)
  
  })
}
        
function removeLocalTodos(todo){
    let todos;
  if (localStorage.getItem('todos') === null){
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'))
    }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1)
  
  localStorage.setItem('todos', JSON.stringify(todos))
}