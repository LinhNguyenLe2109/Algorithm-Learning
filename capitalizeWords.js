//Write a recursive function called capitalizeWords. Given an array
//of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  if(arr.length === 0){
    return result;
  }
  let word = arr[0].toUpperCase();
  result.push(word);
  return result.concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)) ; // ['I', 'AM', 'LEARNING', 'RECURSION']
