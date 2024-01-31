let input = document.getElementById("input")
let todolist = document.querySelector(".box")
let btn =  document.querySelector(".add")

window.onload =  ()=>
{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo => {
        addtodo(todo )        
    });
}

let todos = [];

btn.addEventListener("click",()=>
{
    todos.push(input.value)
    addtodo(input.value)
    input.value = " "
    console.log(todos);
})

function addtodo(todo)
{
    let para = document.createElement('p')
    para.innerText = todo
    todolist.appendChild(para) 
    localStorage.setItem("todos",JSON.stringify(todos))
    para.addEventListener('click',()=>{
        para.style.textDecoration = "line-through"
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        remove(todo)

    })
}

function remove(todo)
{
    let index = todos.indexOf(todo);
    if(index>-1)
    {
        todos.splice(index,1)
    }
    localStorage.setItem("todos",JSON.stringify(todos))
}