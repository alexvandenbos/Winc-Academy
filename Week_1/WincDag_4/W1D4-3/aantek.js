// is array test > Array gemaakt > array test
console.log(burgerListItems[1])
console.log(Array.isArray(burgerListItems))
let burgerListItemArray = Array.from(burgerListItems)
console.log(Array.isArray(burgerListItemArray))
console.log(burgerListItemArray)
// backgroundcolor functie
const toggleBackgroundColorGrey = () => {    
    let a = burgerListItemArray[1];
    console.log(a)
    a.classList.toggle('grey-background');
}
// backgroundcolor functie
const toggleBackgroundColorGreen = () => {    
    let a = burgerListItemArray[2];
    console.log(a)
    a.classList.toggle('green-background');
}
// backgroundcolor functie
const toggleBackgroundColorRed = () => {    
    let a = burgerListItemArray[3];
    console.log(a)
    a.classList.toggle('red-background');
}
// backgroundcolor functie
const toggleBackgroundColorBlue = () => {    
    let a = burgerListItemArray[4];
    console.log(a)
    a.classList.toggle('blue-background');
}
//burgerListItemArray[0].addEventListener('click', togglehome);
burgerListItemArray[1].addEventListener('click', toggleBackgroundColorGrey);
burgerListItemArray[2].addEventListener('click', toggleBackgroundColorGreen);
burgerListItemArray[3].addEventListener('click', toggleBackgroundColorRed);
burgerListItemArray[4].addEventListener('click', toggleBackgroundColorBlue);



const toggleBurgerList = () => {
    if (burgerList.style.display === "none") {
        burgerList.style.display = "block";
    } else {
        burgerList.style.display = "none";
    }
}

if (burgerList.style.display = "none") {
    burgerList.style.display = "inline";
} else {
    burgerList.style.display = "none";        
}
}