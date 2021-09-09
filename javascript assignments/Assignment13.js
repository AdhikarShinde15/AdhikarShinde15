//Book Cricket Game
let totalScore = 0 
let wickets = 0
const newBall = () => {
    const randomNum = Math.floor(Math.random() * 100)
    if(randomNum%10 === 0)
    return 1
    if(randomNum%10 === 2)
    totalScore += 2
    if(randomNum%10 === 4)
    totalScore += 4
    if(randomNum%10 === 6)
    totalScore += 6
    if(randomNum%10 === 8)
    totalScore += 1
}
for(;wickets < 10;){
    const gone  = newBall()
 if(gone === 1)
  wickets++
}
