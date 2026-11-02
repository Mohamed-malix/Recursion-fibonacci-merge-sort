
function fibsRec(n) {
  
    if(n<2) return [n];
    if(n==2) return [0, 1];

    let result= fibsRec(n-1);
    let nextNum= result[result.length-1] + result[result.length-2];
    result.push(nextNum);
    return result;
}

console.log(fibsRec(7));
