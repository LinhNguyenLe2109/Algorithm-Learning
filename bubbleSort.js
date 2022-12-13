const bubbleSort = arr =>{
    for(let i = 0; i < arr.length -1 ; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([31,24,65,78,1,34,97,43,587]))