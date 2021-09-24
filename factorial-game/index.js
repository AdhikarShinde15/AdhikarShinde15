const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');
const eleven = document.getElementById('eleven');
const twelve = document.getElementById('twelve');

const mainN = Math.floor(Math.random() * 100)
console.log(mainN)
const mainNumber = document.getElementById('main-number');
let random;
mainNumber.innerText = mainN;
let isPrime = true
let arrayof12 = [] ;

for(let i=2 ; ; i++)
{
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        i++ ;
    } else {
        if(mainN%i === 0 )
        arrayof12.push(i)
    }
   if(arrayof12.length === 3)
   break;
}
const arr3 = [...arrayof12]
console.log(arr3);
for(let i=0 ;i < 9;i++)
arrayof12.push(Math.floor(Math.random() * 100))

 

 function shuffle(arrayof12) {
    let currentIndex = arrayof12.length,  randomIndex;
  
   
    while (currentIndex != 0) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      
      [arrayof12[currentIndex], arrayof12[randomIndex]] = [
        arrayof12[randomIndex], arrayof12[currentIndex]];
    }
  
    return arrayof12;
  }
  
  
  
  arrayof12 = shuffle(arrayof12);
  
  one.innerText=arrayof12[0];
  two.innerText=arrayof12[1];
  three.innerText=arrayof12[2];
  four.innerText=arrayof12[3];
  five.innerText=arrayof12[4];
  six.innerText=arrayof12[5];
  seven.innerText=arrayof12[6];
  eight.innerText=arrayof12[7];
  nine.innerText=arrayof12[8];
  ten.innerText=arrayof12[9];
  eleven.innerText=arrayof12[10];
  twelve.innerText=arrayof12[11];

  const check = (e) => {
    const clickedon = parseInt(e.innerText,10)
    console.log(clickedon)
    if(arr3.indexOf(clickedon) !== -1)
    document.body.style.backgroundColor = "green";
    else
    document.body.style.backgroundColor = "red";
  }