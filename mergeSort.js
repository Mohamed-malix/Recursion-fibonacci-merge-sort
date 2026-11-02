
function mergeSort(arr){
    if(arr.length==0) return [];
    if(arr.length==1) return arr;

    const arrMid= Math.floor(arr.length/2);
    const rightSide= arr.slice(0, arrMid);
    const leftSide= arr.slice(arrMid, arr.length);

    mergeFun(arr, mergeSort(rightSide), mergeSort(leftSide));
}

function mergeFun(arr, left, right){
    let i=0;
    while(left.length <i && right.length <i){
        if(left[i]<right[i]){
            arr[i]==left[i];
        }else{
            arr[i]==right[i];
        }

        i++;
    }

    return arr;
}

mergeSort([1, 2, 3, 4, 5, 6]);