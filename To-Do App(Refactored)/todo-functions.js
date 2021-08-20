//Read Existing Data from the Local Storage

const getSavedtodos = () => {
   
    const todosJSON = localStorage.getItem('todos');
   if(todosJSON !== null)
     return JSON.parse(todosJSON);
   else
     return [];

}

// Save the todos array to the Local Storage
const saveTodos = (todos) => localStorage.setItem('todos',JSON.stringify(todos ));

//Delete the todo array from the Local Storage
const removeTodos = (todos) => localStorage.removeItem('todos');

const renderTodos = (todo) => {

    ///Total Number of tasks
    document.querySelector('.footer').innerHTML=''
    const totalSummary = getTotalSummary(todo);
    document.querySelector('.footer').appendChild(totalSummary);
    
    
    // Calculating total incomplete Tasks to do
    const totalIncompleteTodos = todos.filter((todo)=> !todo.completed);
    const summary = getSummaryIncomplete(totalIncompleteTodos);
    document.querySelector('.footer').appendChild(summary);
        
        
     document.querySelector('ul').innerHTML=''
    
     todo.forEach((n) => {
        
        const todoEl = document.createElement('div');
        
        todoEl.innerHTML += `
            <li  class="listItem">
            <label class="s" onClick="change()">${n.text}</label>
              <div class="btn-flex"> 
                <i id="complete"  class="fas fa-check-square"></i>
                 <i id="delete" class="far fa-trash-alt"></i>
               </div>
            </li>`;
        document.querySelector('ul').appendChild(todoEl)
     });
    
    
    
    //Delete Todo List
    document.querySelectorAll('#delete').forEach(element => {
      
        element.addEventListener('click',(e)=>{
          todos.forEach(todo => {
            if (todo.text === (e.target.parentNode.parentNode.textContent).trim())
                todos.splice(todo, 1);
            });
        
         e.target.parentNode.parentNode.remove();
         removeTodos(todos);
         saveTodos(todos);
         renderTodos(todos);
       });
       
    });

    //Completed Check
    document.querySelectorAll('#complete').forEach(element => {
       
        element.addEventListener('click',(e) => {
           todos.forEach(todo => {
            if(todo.text === (e.target.parentNode.parentNode.textContent).trim())
              todo.completed=true;
        });
        
         removeTodos(todos);
         saveTodos(todos);
         renderTodos(todos);
       
        });

    });
    //render todo ends with below bracket
}

//Getting Total Summary Function
const getSummaryIncomplete = (incomplete) => {
    const summary = document.createElement('h2');
    summary.textContent = `You Have ${incomplete.length} Task Left.`;
    return summary;
}

//Getting Total Incomplete Summary Function 
const getTotalSummary = (totalTodos) => {
    const summary = document.createElement('h2');
    summary.textContent = `Total Number of tasks you have is ${todos.length} .`
    return summary;
}