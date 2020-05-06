/*Loops kun je voor meer gebruiken dan itereren over een lijst van dingen. Maar we hebben het nu wel over die manier van loops gebruiken.

**While loop:**

- Maak een nieuwe map en nieuwe javascript file.
- Maak een array genaamd `colors` met de kleuren: yellow, blue, red, orange.
- Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.

**For loop:**

- Gebruik dezelfde array als startpunt.
- Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
- Gebruik de lengte van de array in je for loop: `array.length`

Het schrijven van een for of while loop kan best veel ruimte in beslag nemen. Daarnaast is het ook makkelijk om een foutje te maken. 
}*/

/*let colors = ["yellow","blue", "red", "orange"];
let y = 0;
let i = 0;
while (y < colors.length) {
    console.log(colors[i])
    y++;
    i++;
}
*/

/***For loop:**

- Gebruik dezelfde array als startpunt.
- Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
- Gebruik de lengte van de array in je for loop: `array.length`

Het schrijven van een for of while loop kan best veel ruimte in beslag nemen. Daarnaast is het ook makkelijk om een foutje te maken.*/

let colors = ["yellow","blue", "red", "orange"];

let index = 0;
while (index < colors.length) {
    for (let y = 0; y < colors.length; y++) {
        console.log(colors[y])    
        index++;
    }
}

/***forEach:**

- Gebruik dezelfde kleuren-array als startpunt
- Gebruik de **`forEach`** array method, om alle items in je array te loggen naar de console.

Dit waren simpele oefeningen. 
De kern van deze oefening zit in het begrijpen van een for loop/ while loop ten opzichte van een array method. 
Beantwoord de volgende vragen en zet dit als comment onderin je file.

1. Hoeveel regels neemt mijn for loop in beslag? 
2. Hoeveel regels neemt mijn `forEach` method in beslag? 
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? 
4. Stel je hebt een `object` met 45 properties. 
Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en zonder elke property handmatig te `console.log` en. 
Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*? */

colors.forEach(element => console.log(element));

//maar 1 regel tegenover 8 & 7 regels, dit is veel leesbaarder

let person = {
    name: 'Alex',
    lastname: 'van den Bos',
    age: 26,
    evalutations: [7, 10, 9],
    job: 'programmer'
};

console.log(Object.getOwnPropertyNames(person));
console.log(person.name);
console.log(person);
