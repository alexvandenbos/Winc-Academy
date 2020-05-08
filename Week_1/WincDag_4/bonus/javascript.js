//zoekt html locatie op
const burgerImg = document.querySelector('#burgerIcon');
const burgerList = document.querySelector('#burgerList');
const bodyEL = document.querySelector('body');
//haalt buttons op
const liGreyChoice = document.querySelector('#greyChoice');
const liGreenChoice = document.querySelector('#greenChoice');
const liRedChoice = document.querySelector('#redChoice');
const liBlueChoice = document.querySelector('#blueChoice');
//array met de kleuropties
const burgerListItems = burgerList.children;
let burgerListItemArray = Array.from(burgerListItems);
//hamburger klikbaar icoontje = zichtbaar/onzichtbaar
const toggleBurgerList = () => {
    if (burgerList.style.display === "none") {
        burgerList.style.display = "inline";
        } else {
          burgerList.style.display = "none";
        }
    }
//kleur van body grijs
const addBurgerListItemColor = () => {
    let currentcolor = bodyEL.classList;
    if (liGreyChoice.checked && currentcolor != 'grey') {
        currentcolor.remove('green', 'red', 'blue')
        currentcolor.add('grey')
        toggleBurgerList()
        console.log("grey is checked")
    } else if (liGreenChoice.checked && currentcolor != 'green') {
        currentcolor.remove('grey', 'red', 'blue')
        currentcolor.add('green')
        toggleBurgerList()
        console.log("green is checked")
    } else if (liRedChoice.checked && currentcolor != 'red') {
        currentcolor.remove('green', 'grey', 'blue')
        currentcolor.add('red')
        toggleBurgerList()
        console.log("red is checked")
    } else if (liBlueChoice.checked && currentcolor != 'blue') {
        currentcolor.remove('green', 'red', 'grey')
        currentcolor.add('blue')
        toggleBurgerList()
        console.log("blue is checked")
    } else {
        console.log("Deze kleur is al geselecteerd, of je hebt niet op de radiobutton geklikt");
    }
}
//event listener/ activatie functie/ klikbased
burgerImg.addEventListener('click', toggleBurgerList);
burgerListItemArray[0].addEventListener('click', toggleBurgerList);
burgerListItemArray.shift()
// console.log(burgerListItemArray[1].burgerListItemArray[2])
burgerListItemArray.forEach(element => console.log(element))
burgerListItemArray.forEach(element => element.addEventListener('click', addBurgerListItemColor))
