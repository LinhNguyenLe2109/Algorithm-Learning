//Write a recursive function called flatten which accepts an array of
//arrays and returns a new array with all values flattened.

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  if(arr.length === 0){
    return result;
  }
  if(Array.isArray(arr[0])){
    return result.concat(flatten(arr[0])).concat(flatten(arr.slice(1)));
  }
  return result.concat(arr[0]).concat(flatten(arr.slice(1)));
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
