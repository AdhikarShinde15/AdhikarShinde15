const btn = document.getElementById('submit');
const nxt = document.getElementById('nxt');
const name1 = document.getElementById('name');
const role = document.getElementById('role');
const age = document.getElementById('age');
const salary = document.getElementById('salary');
const tableBody = document.getElementById('tbody');
const dataStorage = [];
let page = 1;
let prevPage = 0;
let nxtPage = 2;

const storeData = () => {
    dataStorage.push({
        srno:dataStorage.length+1,
        name:name1.value,
        role:role.value,
        age:age.value,
        salary:salary.value
    })
}

const renderData = () => {

    const tr = document.createElement('tr');
    const srnoTd = document.createElement('td');
    const nameTd = document.createElement('td');
    const roleTd = document.createElement('td');
    const ageTd = document.createElement('td');
    const salaryTd = document.createElement('td');
    if(dataStorage.length <=10)
    for(let item=0;item<10;item++) {
    srnoTd.innerText = dataStorage[item].srno;
    nameTd.innerText = dataStorage[item].name;
    roleTd.innerText = dataStorage[item].role;
    ageTd.innerText =   dataStorage[item].age;
    salaryTd.innerText = dataStorage[item].salary;

    tr.appendChild(srnoTd); 
    tr.appendChild(nameTd); 
    tr.appendChild(roleTd);  
    tr.appendChild(ageTd);
    tr.appendChild(salaryTd);
    tableBody.appendChild(tr);
}
   
  
}

btn.addEventListener('click',(e) => {
    e.preventDefault();

    storeData();
    renderData();
    console.log(dataStorage)
  
})

const renderpage = (start,end) => {
    console.log(end)
    const tr = document.createElement('tr');
    const srnoTd = document.createElement('td');
    const nameTd = document.createElement('td');
    const roleTd = document.createElement('td');
    const ageTd = document.createElement('td');
    const salaryTd = document.createElement('td');
    for(let item=start;item<end;item++) {
        console.log(item)
        srnoTd.innerText = dataStorage[item].srno;
        nameTd.innerText = dataStorage[item].name;
        roleTd.innerText = dataStorage[item].role;
        ageTd.innerText =   dataStorage[item].age;
        salaryTd.innerText = dataStorage[item].salary;
    
        tr.appendChild(srnoTd); 
        tr.appendChild(nameTd); 
        tr.appendChild(roleTd);  
        tr.appendChild(ageTd);
        tr.appendChild(salaryTd);
        tableBody.appendChild(tr);
    }
}

nxt.addEventListener('click',() => {
   const end = (nxtPage*10);
   const start = (nxtPage*10 - 9);
   tableBody.innerHTML="";
   renderpage(start,end);
})