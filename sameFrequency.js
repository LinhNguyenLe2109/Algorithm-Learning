// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


function sameFrequency(int1, int2){
    let string1 = int1.toString();
    let string2 = int2.toString();
    let obj1 = {}, obj2 = {};
    if(string1.length !== string2.length){
        return false;
    }
    for (let num of string1){
        !obj1[num] ? obj1[num] = 1 : obj1[num]+=1;
    }
    for (let num of string2){
        !obj2[num] ? obj2[num] = 1 : obj2[num]+=1;
    }
    for(let num in obj1){
        if(!obj2[num] || obj1[num] !== obj2[num]){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(3589578, 5879385));

