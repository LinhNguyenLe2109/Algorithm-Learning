// Write a recursive function called isPalindrome which returns true
//if the string passed to it is a palindrome (reads the same forward
//and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    let start = str[0];
    let end = str[str.length - 1];
    if(str.length === 0){
        return true;
    }
    if(start !== end){
        return false;
    }
    return isPalindrome(str.slice(1, -1))
  // add whatever parameters you deem necessary - good luck!
}


console.log(isPalindrome('amanaplanacanalpandemonium'))