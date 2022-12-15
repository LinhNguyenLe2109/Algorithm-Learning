const insertionSort = (arr) =>{
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        let j = 0
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([31,24,65,78,1,34,97,43,587]));