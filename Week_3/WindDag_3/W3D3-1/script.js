// function addSum (...args) {
//     let Sum = args.reduce((start, addvalue) => {return start + addvalue})
//     console.log(Sum)
// }
// addSum(2,3,4,6,7,8);

// function addSumManual (x,y,z) {
//     return x+y+z;
// }

// let numberArray = [1,2,3]
// console.log(addSumManual(...numberArray))
// addSumManual(numberArray)
const sum = (...args) => {
    ///const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }
//console.log(sum(0,1,2))
//console.log(sum(1,2,3,4))
//console.log(sum(5))
console.log(sum())