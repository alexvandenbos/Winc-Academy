//A
const addWord = (myArray) => {
    myArray.push("Cool");
    console.log(myArray);
    return myArray;
} 
addWord(["boom","fiets","balkon","peuk"]);
//B
const aantalElementenCount = (myArray) => {
    console.log(myArray.length);
    return myArray.length;    
}
aantalElementenCount(["boom","fiets","balkon","peuk"]);
//C
const selectFirstElement = (myArray) => {
    console.log(myArray[0]);
    return myArray[0];
}
selectFirstElement(["boom","fiets","balkon","peuk"]);
//D
const selectLastElement = (myArray) => {
    console.log(myArray[myArray.length -1]);
    return myArray[myArray.length -1]
}
selectLastElement(["boom","fiets","balkon","peuk"]);
//E
const selectFromSecondElement = (myArray) => {
    console.log(myArray.slice(1));
}
selectFromSecondElement(["boom","fiets","balkon","peuk"]);
//splice returnt het verwijderde item
//F
const joinArrayToString = (myArray) => {
    console.log(myArray.join());
    return myArray.join();
}
joinArrayToString(["boom","fiets","balkon","peuk"]);
//G
const combineArrays = (first, second) => {
    console.log(first.concat(second));
    return first.concat(second);
}
combineArrays([1,2,3], [4,5,6]) 