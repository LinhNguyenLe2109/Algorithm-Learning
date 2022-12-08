//Write a function called stringifyNumbers which takes in an object
// and finds all of the values which are numbers and converts them to
//strings. Recursion would be a great way to solve this!

const stringifyNumbers = (obj) => {
    let result = {};
  if (obj === null) {
    return;
  }
  for (let val in obj) {
    if (typeof obj[val] === "object" && !Array.isArray(obj[val])) {
        result[val] = stringifyNumbers(obj[val]);
    }
    else if (typeof obj[val] === "number") {
        result[val] = obj[val].toString();
    }
    else{
        result[val] = obj[val];
    }
  }
  return result;
};
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
