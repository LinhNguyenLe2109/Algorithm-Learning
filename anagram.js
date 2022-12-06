// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1, str2){
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    // console.log(arr1, arr2);
    let obj1 = {}, obj2 = {};
    if(str1.length !== str2.length){
        return false;
    }
    for (let char of arr1){
        obj1[char] = char in obj1 ? obj1[char] + 1 : 1;
    }
    for (let char of arr2){
        obj2[char] = char in obj2 ? obj2[char] + 1 : 1;
    }
    for(let char in obj1){
        if(!(char in obj2 && obj1[char] === obj2[char])){
            return false
        }
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))