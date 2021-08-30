const primes  = [2,3,5,7,11,13,17]
let primeSquare = []

const myMAP = (primes,operation) =>{
   
   primes.forEach(element => {
    primeSquare.push(operation(element))
   });
   return primeSquare;
}

const cubes = myMAP(primes,p=> p**3)
console.log(cubes)