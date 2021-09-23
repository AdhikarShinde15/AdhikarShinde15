const saveDelete = () => {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const ageTd = document.createElement('td');
    const deptTd = document.createElement('td');
    const actionTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
   
    nameTd.innerText = nameInput.value;
    ageTd.innerText = ageInput.value;
    deptTd.innerText = departmentInput.value;

   
    deleteBtn.classList.add('btn');
    deleteBtn.innerText = 'DELETE';

    deleteBtn.addEventListener('click', () => {
        tr.remove();
    })

    actionTd.appendChild(deleteBtn);

    
    tr.appendChild(nameTd); 
    tr.appendChild(ageTd);  
    tr.appendChild(deptTd);
    tr.appendChild(actionTd);
    tableBody.appendChild(tr);

   
    nameInput.value = '';
    ageInput.value  = '';
}