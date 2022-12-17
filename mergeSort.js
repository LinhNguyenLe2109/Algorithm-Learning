const mergeSort = (arr) =>{
    if(arr.length <= 1){
        return arr;
    }
    let returnArr = [];
    let i = 0, j = 0;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    while (i < left.length && j < right.length){
        
        if(left[i] < right[j]){
            returnArr.push(left[i++]);
            
        }
        else{
            returnArr.push(right[j++]);
        }      
    }
    while (i < left.length){
        returnArr.push(left[i++]);     
    }
    while (j < right.length){
        returnArr.push(right[j++]);     
    }
    return returnArr;
}

console.log(mergeSort([31,24,65,78,1,34,97,43,587]));
//the complexity is O(nlogn) because at the end, there are n arrays with 
//the length of 1 that need to be sorted and logn happens because 
// of the recursion.