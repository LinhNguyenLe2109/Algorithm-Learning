const quickSort = (arr, left = 0, right = arr.length -1 ) => {
    if(left < right){
        let pivotIndex = sort(arr, left);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


function sort (arr, start = 0){

    var pivot = arr[start];
    console.log("pivot: "  + pivot)
    var swapIdx = start;
    for(let i = start+1; i <arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            let temp = arr[i];
            arr[i] = arr[swapIdx];
            arr[swapIdx] = temp;
        }
    }
    console.log("swapIdx: "  + arr[swapIdx])
    let abc = arr[start];
    arr[start]= arr[swapIdx];
    arr[swapIdx] = abc;
    console.log(arr);
    return swapIdx;
}


console.log(quickSort([31,24,65,78,1,34,97,43,587]));
// 31,24,65,78,1,34,97,43,587
// 31, 24, 1, 34, 65, 78, 97, 43, 587
// hard to understand, need more time to think