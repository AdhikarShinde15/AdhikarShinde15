const first = [1,2,3];
const second = [4,5,6];

const mergeTwoArrays = (first,second) => [...first, ...second];
    
console.log(mergeTwoArrays(first,second));