//selecteerd het ID van de button
let btn = document.querySelector('#mybutton');

//klikfuntie in een constante variabele
const btnMessage = () => {
    alert('Button Clicked');
}
//Event listener > click funtionaliteit op de gemaakte functie
btn.addEventListener('click', btnMessage); 

//---------------------------opdracht 3-------------------------------------
/* 
let btncolor = document.querySelector('#changecolorbutton');

const changeBackgrColor = () => {
    //bodyfunction
    //ga de class "red-background" toevoegen aan het body element.
    //parent element van btncolor = body.    
    let a = btncolor.parentElement;
    a.classList.add('red-background');
}
btncolor.addEventListener('click', changeBackgrColor);
//changeBackgrColor()
*/
//-------------------------opdracht 4--------------------------------------

let btncolor = document.querySelector('#changecolorbutton');

const toggleBackgrColor = () => {    
    let a = btncolor.parentElement;
    a.classList.toggle('red-background');
}
btncolor.addEventListener('click', toggleBackgrColor);
//changeBackgrColor()