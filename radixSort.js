
//return one digit in a specified index in a number
const getDigit = (number, idx) => {
    let digit = Math.floor(Math.abs(number) / Math.pow(10, idx)) % 10;
    return digit;   
}

//return the number of digits in a number
const digitCount = (number) =>{
    if(number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

//return the index of the number with the most digit
const mostDigitCount = (arr) =>{
    let mostDigit = digitCount(arr[0]);
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        let count = digitCount(arr[i]);
        if(mostDigit < count){
            mostDigit = count;
            index = i;
        }
    }
    return index;
}
//assume all the values in an array are >= 0 and they are integer
const radixSort = (arr) =>{
    //find the number with the most digits
    let mostDigitIndex = mostDigitCount(arr);
    //get the number of digit for the for loop
    let mostDigit = digitCount(arr[mostDigitIndex]);
    for(let i = 0; i < mostDigit; i++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let j = 0; j < arr.length; j++){
            digitBuckets[getDigit(arr[j], i)].push(arr[j])
        }
        arr = [].concat(... digitBuckets)
    }
    
    return arr;

}

//although it has 2 for loop, the first for loop is based on the number 
//of digits of the largest value only. That's why the time complexity is
// nlogn. The worst condition is when there is a number with infinite
// digit which rarely happen in real life. I guest this is why this
//algorithm is popular.
console.log(radixSort([31,24,65,78,1,34,97,43,587]));