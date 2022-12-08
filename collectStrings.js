//Write a function called collectStrings which accepts an object and
//returns an array of all the values in the object that have a typeof
//string

const collectStrings = (obj) => {
  let result = [];
  if (obj === null) {
    return result;
  }
  for (let val in obj) {
    if (typeof obj[val] === "object") {
      result = result.concat(collectStrings(obj[val]));
    }
    if (typeof obj[val] === "string") {
      result.push(obj[val]);
      
    }
  }
  return result;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
