const selectionSort = arr =>{
    
    for(let i = 0; i < arr.length - 1; i++){
        let lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        if(lowest != i){
                let temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest]= temp;
        }
       
    }
    return arr;
}

console.log(selectionSort([31,24,65,78,1,34,97,43,587]))