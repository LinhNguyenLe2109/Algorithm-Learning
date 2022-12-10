// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence 
//of the characters in the second string. In other words, the function
// should check whether the characters in the first string appear 
//somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

function isSubsequence(str1, str2) {
  let idx = 0;
  for(let char of str2){
    if(str1[idx] === char){
        idx++;
    }
  }
  return idx === str1.length;
}

console.log(isSubsequence('hello', 'hello world'))
