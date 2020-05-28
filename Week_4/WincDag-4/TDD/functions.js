// const addOne = (numbersArray) => {
// 	let numbersArrayPlusOne = numbersArray.map(number => number + 1);
// 	console.log(numbersArrayPlusOne)
// 	return numbersArrayPlusOne;
// }

// module.exports = addOne;

const functions = {
  addOne: function (numbersArray) {
    let numbersArrayPlusOne = numbersArray.map((number) => number + 1);
    return numbersArrayPlusOne;
  },
  getWordLengths: function (someWords) {
    let wordsLength = someWords.map((word) => word.length);
    return wordsLength;
  },
  findNeedle: function (someWords, filterword) {
    let needleLocationIterativeVariable = someWords.indexOf(filterword);
    return needleLocationIterativeVariable;
  },
  // createUser: function() {
  //   const user = {
  //     firstName: 'Brad'
  //   };
  //   user['lastName'] = 'Traversy';
  //   return user;
  // }
};
module.exports = functions;
// const myArray = [31, 57, 12, 5];
// console.log(functions.addOne(myArray))
