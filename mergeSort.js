
function mergeSort(arr){
    if(arr.length==0) return [];
    if(arr.length==1) return arr;

    const arrMid= arr.length/2;
    const rightSide= arr.slice(0, arrMid);
    const leftSide= arr.slice(arrMid+1, arr.length-1);

    console.log(mergeSort(rightSide));
    console.log(mergeSort(leftSide));
}

mergeSort([1, 2, 3, 4, 5]);