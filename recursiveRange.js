// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

//recursive
function recursiveRange(num){
    if(num === 0){
        return 0;
    }
    return num + recursiveRange(--num);
}
//for loop
function recursiveRange1(num){
    let sum = 0;
    for (let i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
 }


 //sum calculation
function recursiveRange2(num){
    return (num) * (num + 1) /2;
 }
 

console.log(recursiveRange(10))