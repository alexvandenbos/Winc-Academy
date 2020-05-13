// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
ikRockArrowFunctions();
// A
const ikRockArrowFunctions1 = () => {
    console.log("Joe, ik rock de arrow functions!")
};
ikRockArrowFunctions();
// B
const fivePlusSeven = () => 5 + 7;
fivePlusSeven();
// C
() => a + b; 
// D
const myFunction = (a, b) => a + b;
console.log(myFunction(2,1));
// E
const addFive = a => a + 5;
console.log(addFive(2));
// F 
const createObject = () => ({greeting: "hoi"});
createObject();
