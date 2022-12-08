//Write a recursive function called capitalizeFirst. Given an
//array of strings, capitalize the first letter of each string in
//the array.

function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  let cap;
  if(arr.length === 0){
    return result;
  }
  cap = arr[0][0].toUpperCase() + arr[0].slice(1);
  result.push(cap);
  return result.concat(capitalizeFirst(arr.slice(1)))
}


console.log(capitalizeFirst(['car','taco','banana']));

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
