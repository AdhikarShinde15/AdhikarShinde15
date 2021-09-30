const event1 = () => {
 if(parseInt(op1.innerText,10) === parseInt(questions[index].ans,10))
   score+=10;
   else
   score-=4;
    totalScore.innerText=score;
    totalScore.innerText=score;
    if(index === questions.length-1)
       document.querySelector('html').innerHTML = message();
    else
       renderNextQuestion();
};

const event2 = () =>{
    if(parseInt(op2.innerText,10) === parseInt(questions[index].ans,10))
    score+=10;
    else
    score-=4;
     totalScore.innerText=score;
     totalScore.innerText=score;
     if(index === questions.length-1)
        document.querySelector('html').innerHTML = message();
     else
        renderNextQuestion();
}

const event3 = () =>{
    if(parseInt(op3.innerText,10) === parseInt(questions[index].ans,10))
   score+=10;
   else
   score-=4;
    totalScore.innerText=score;
    totalScore.innerText=score;
     if(index === questions.length-1)
        document.querySelector('html').innerHTML = message();
     else
        renderNextQuestion();
}

const event4 = () =>{
   
    if(parseInt(op4.innerText,10) === parseInt(questions[index].ans,10))
    score+=10;
    else
    score-=4;
     totalScore.innerText=score;
     if(index === questions.length-1)
        document.querySelector('html').innerHTML = message();
     else
        renderNextQuestion();
}