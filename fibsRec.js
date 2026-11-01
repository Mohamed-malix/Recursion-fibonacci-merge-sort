
function fibsRec(n) {
    const result=[];
    let num;

    if(n<2) {
        return n;
    }else{
        num=fibsRec(n-1)+fibsRec(n-2);
        result.push(num);
    }

    return result;
}

console.log(fibsRec(8));