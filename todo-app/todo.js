
// // removing Elements from DOM
// const p = document.querySelectorAll('li');
// p.forEach(element => {
//     let value = element.textContent;

// let result=value.search("the")

//  if(result>=0)
//  element.remove();

// });
/** Local Storage  Start*/

//  localStorage.setItem('location','Kopergaon');
 
//  console.log(localStorage.getItem('location'));
//  localStorage.removeItem('location');


// const user = [{
//     name:"Adhikar",
//     age:22
// }];

// const userJson=JSON.stringify(user);
// console.log(userJson);
// localStorage.setItem('user',userJson);
// const userJson = localStorage.getItem('user');
// const user = JSON.parse(userJson);
// console.log(`The User is ${user[0].name} and age is ${user[0].age}`);


// /**Local Storage End */

let todos = [];


const todosJSON = localStorage.getItem('todos');

if(todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

//render todos
const renderTodos = (todo) => {

///Total Number of tasks
document.querySelector('.footer').innerHTML=''
const summary2 = document.createElement('h2')
summary2.textContent = `Total Number of tasks you have is ${todos.length} .`
document.querySelector('.footer').appendChild(summary2);


// Calculating total incomplete Tasks to do
const totalIncompleteTodos = todos.filter((todo)=> !todo.completed);
const summary = document.createElement('h2')
summary.textContent = `You Have ${totalIncompleteTodos.length} Task Left.`

 
document.querySelector('.footer').appendChild(summary);
    
        document.querySelector('ul').innerHTML=''

       todo.forEach((n) => {
        const todoEl = document.createElement('div');
        // todoEl.textContent=n.text;
        todoEl.innerHTML += `
        <li  class="listItem">
          <div class="btn-flex"> 
             <input type="checkbox" name="check">
             <label class="strikethrough">${n.text}</label>
             <i  class="far fa-trash-alt"></i>
           </div>
        </li>`;
    document.querySelector('ul').appendChild(todoEl)
})

//Delete Todo List
document.querySelectorAll('i').forEach(element => {
    element.addEventListener('click',(e)=>{
      todos.forEach(todo => {
        if (todo.text === (e.target.parentNode.parentNode.textContent).trim())
            todos.splice(todo, 1);
        });
    
     e.target.parentNode.parentNode.remove();
     localStorage.removeItem('todos');
     localStorage.setItem('todos',JSON.stringify(todos ))
     renderTodos(todos);
   });
   
});

    document.querySelectorAll('input[name="check"]:checked').forEach(element =>{
        element.addEventListener('click',(e)=>{
            todos.forEach(todo => {
                if (todo.text === (e.target.parentNode.parentNode.textContent).trim())
                 todo.completed=true;
            })
            console.log(todos);
            renderTodos(todos)
        })
    })
   

}

renderTodos(todos)
 
//Deleting the list item Element


//adding new task to todo list

// todos.forEach( (todo) => {
//     const li =document.createElement('li');
//     li.textContent = todo.text;
//     document.querySelector('ul').appendChild(li);
// })


//--------------------------------------------------------------------
// const newListItem = document.createElement('li');
// document.querySelector('#getIn').addEventListener('input',(e)=>{
//     newListItem.textContent=e.target.value;
//     document.querySelector('ul').appendChild(newListItem);
// })
//-------------------------------------------------------------------
document.querySelector('.getInput').addEventListener('submit',(e) =>{
      e.preventDefault();
    if(e.target.elements.text.value==='')
    {}
    else{
     todos.push({
         text:e.target.elements.text.value,
         completed:false
     })
     localStorage.setItem('todos',JSON.stringify(todos ))
   renderTodos(todos);
   e.target.elements.text.value='';}
})