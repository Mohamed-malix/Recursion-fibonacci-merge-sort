
function fibs(n) {

    const result=[0,1];
    let nextNum=0;

    for(let i=1; i<n-1; i++) {
        nextNum=result[i]+result[(i-1)];
        result.push(nextNum);
    }

    return result;
}


console.log(fibs(8));