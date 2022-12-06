// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

function areThereDuplicates(...arg) {
    let obj = {};
    for(let val of arg){
        if(!obj[val]){
            obj[val] = 1;
        }
        else{
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3));

