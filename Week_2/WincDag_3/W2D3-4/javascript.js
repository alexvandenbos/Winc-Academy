//A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Hier komt jouw functie
    const findSpiderMan = (element) => {
        return element.find(function(superhero) {
            return superhero.name ==="Spiderman";
        });
    }
    
    console.log(findSpiderMan(superheroes)) 
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B
const doubleArrayValues = (x) => {
    let newArray = [];
    x.forEach(nummer => {
      newArray.push(nummer * 2);
    });
    return newArray;
  };
  console.log(doubleArrayValues([1, 2, 3]))
//C
const containsNumberBiggerThan10 = (x) => {
    return x.some(y => y > 10);
}
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])) 
// result should be true
//D
const isItalyInTheGreat7 = (x) => {
    return x.includes('Italy');
}
console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])); 
// result should be true
//E
const tenfold = (x) => {
    let newarray1 = [];
    x.forEach(y => newarray1.push(y * 10));
    return newarray1;
}
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]
//F
const isBelow100 = (x) => {
    return x.every(y => y < 100);
}
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false
//G
const bigSum = (x) => {
    return x.reduce((acc, cur) => acc + cur);
}
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))