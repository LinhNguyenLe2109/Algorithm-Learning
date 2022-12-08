// function test(iterNum){
//     if(iterNum !== 0){
//         console.log(iterNum);
//         iterNum--;
//         test(iterNum);
//     }
//     else{
//         return true;
//     }
// }
// test(4);

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };
  
  var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  };


  for(let char in obj1){
    console.log(char);
  }
