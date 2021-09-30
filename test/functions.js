const renderNextQuestion = () => {
    index+=1;
    queNo.innerText=index+1;
    question.innerText=questions[index].que;
    op1.innerText=questions[index].op1; 
    op2.innerText=questions[index].op2; 
    op3.innerText=questions[index].op3; 
    op4.innerText=questions[index].op4; 
}
const initialRender = () => {
    question.innerText=questions[0].que;
    op1.innerText=questions[0].op1; 
    op2.innerText=questions[0].op2; 
    op3.innerText=questions[0].op3; 
    op4.innerText=questions[0].op4; 
}

const  message = () => {
    return(`<div class="relode">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<p class="score">Your Total Score : ${score}</p>
<p>Please Wait Reloading in 3 Seconds</p> <span class="none">${setTimeout(function(){ window.location.reload()}, 3000)}</span></div>`) 
}