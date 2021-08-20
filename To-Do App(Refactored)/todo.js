const todos = getSavedtodos();

renderTodos(todos)
 
document.querySelector('.getInput').addEventListener('submit',(e) =>{
      e.preventDefault();
    if(e.target.elements.text.value==='')
      alert("Enter Valid Text"); 
    else{
           todos.push({
           text:e.target.elements.text.value,
           completed:false
          })
        saveTodos(todos);
        renderTodos(todos);
        e.target.elements.text.value='';
  }
})