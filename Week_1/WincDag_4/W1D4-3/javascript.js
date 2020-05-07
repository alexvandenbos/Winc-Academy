//zoekt html locatie op
const burgerImg = document.querySelector('#burgerIcon');
const burgerList = document.querySelector('#burgerList');
const bodyEL = document.querySelector('body');
//array met de kleuropties
const burgerListItems = burgerList.children;
const burgerListItemArray = Array.from(burgerListItems)
// array in losse variabelen
a = burgerListItemArray[0]
console.log(a);
b = burgerListItemArray[1]
console.log(b);
c = burgerListItemArray[2]
console.log(c);
d = burgerListItemArray[3]
console.log(d);
e = burgerListItemArray[4]
console.log(e)
//hamburger klikbaar icoontje = zichtbaar/onzichtbaar
const toggleBurgerList = () => {
    if (burgerList.style.display === "none") {
        burgerList.style.display = "inline";
        } else {
          burgerList.style.display = "none";
        }
    }
//kleur van body grijs
const addBurgerListItemColorGrey = () => {
    bodyEL.classList.toggle('grey');
}
//kleur van body groen
const addBurgerListItemColorGreen = () => {
    bodyEL.classList.toggle('green');
}
//kleur van body rood
const addBurgerListItemColorRed = () => {
    bodyEL.classList.toggle('red');
}
//kleur van body blauw
const addBurgerListItemColorBlue = () => {
    bodyEL.classList.toggle('blue');
}
//event listener/ activatie functie/ klikbased
burgerImg.addEventListener('click', toggleBurgerList);
a.addEventListener('click', toggleBurgerList);
b.addEventListener('click', addBurgerListItemColorGrey);
c.addEventListener('click', addBurgerListItemColorGreen);
d.addEventListener('click', addBurgerListItemColorRed);
e.addEventListener('click', addBurgerListItemColorBlue);
//burgerListItemArray.forEach(element => addEventListener('click', toggleBurgerList));