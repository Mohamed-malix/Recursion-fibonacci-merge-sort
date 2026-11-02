
function mergeSort(arr){
    if(arr.length==0) return [];
    if(arr.length==1) return arr;

    const arrMid= Math.floor(arr.length/2);
    const left= arr.slice(0, arrMid);
    const right= arr.slice(arrMid, arr.length);

   return mergeFun(mergeSort(left), mergeSort(right));
}

function mergeFun(left, right){
    let arr=[];

    while(left.length && right.length){
        if(left[0]<right[0]){
            arr.push(left[0]);
            left.shift();  
        }else{
            arr.push(right[0]);
            right.shift();  
        }
    }

    return [...arr, ...left, ...right];
}

console.log(mergeSort([4,1,3,5,2]));
console.log(mergeSort([5,1,8,5,6,2]));