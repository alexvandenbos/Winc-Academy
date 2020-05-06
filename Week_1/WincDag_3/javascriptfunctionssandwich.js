/*
Deel A

makeTurkeySandwich
    Get one slice of Bread.
    Add cheese.
    Add cucumber slices.
    Add ketchup.
    Put a slice of bread on top.
*/

const makeTurkeySandwich = () => {
 //function body
 console.log("Get one slice of Bread. Add cheese.Add cucumber slices.Add ketchup.Put a slice of bread on top.")
}

makeTurkeySandwich()

//Deel B
const makeSandwich = (topping) => {
    //function body
    console.log(["There you go, a sandwich with " + topping])
   }
   
makeSandwich("kaas")

//Deel C
const calculateDiscoutedPrice = (totalAmount, discount) => {
    let newPrice = totalAmount - discount;
    console.log(Math.round(newPrice))
    return;
}
calculateDiscoutedPrice(20, 0.2)

//Deel D
const calculateDiscoutedPriceFinal = (totalAmount, discount) => {
    let newPrice = Math.round(totalAmount - discount);
    if (totalAmount > 25) {
        console.log(newPrice)
        return;
    } else {
        console.log(totalAmount)
        return;
    }
}
calculateDiscoutedPriceFinal(19.8, 0.4)