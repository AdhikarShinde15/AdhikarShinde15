//Assignment 10
const ob1 = {
     name:"Adhikar",
    age:22
 }

 const ob2 = {
     age:20
 }

 const checkName = (ob) => ob.hasOwnProperty('name')

 console.log(checkName(ob1))
 console.log(checkName(ob2))

//Assignment 11
 const ronaldo = {
      goals  : 2,
      assists : 2,
      offsides : 1
 }
 const messi = {
     goals : 3,
     assists : 1,
     offsides : 1
 }
 const calculateScore = (player) => (player.goals * 5)+(player.assists * 3)-(player.offsides * 3)


 console.log(calculateScore(ronaldo))
 console.log(calculateScore(messi))

//Assignment 12
const calculateMultiples = (base,limit) => {
    let arr = []
     for(let i=1 ;  ; i++)
        if(base*i <= limit)
          arr.push(base*i)
        else
         break
     return arr
}

console.log(calculateMultiples(3,9))
console.log(calculateMultiples(2,6))
