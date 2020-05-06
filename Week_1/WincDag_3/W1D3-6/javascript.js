//Score variabelen.
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;
// boolean end
let end = false;
//Naam van de speler.
naam = prompt("hey wat is je naam?");
//Computer pakt een getal van 0 t/m 25.
let min = 1;
let max = 25;
const cNumber = () => {
    return Math.round(Math.random() * (max - min) + min);
};
//Het spelletje zelf
const guessMyNumberGame = () => {
    if (naam != null && naam.length > 0) {
        alert("hey " + naam + " Ik heb een getal opgeschreven, kan jij het getal raden?");
        gekozenNummer = prompt("Kies een nummer van " + min + " t/m " + max);
        if (gekozenNummer > max ) {
            alert(naam + ", Je hebt een groter getal gekozen dan " + max + ", kies een lager getal");
        } else if (gekozenNummer < min) {
            alert(naam + ", Je hebt een negatief getal gekozen, kies een getal vanaf " + min + " of hoger");
        } else {
            if (gekozenNummer === cNumber()) {
                console.log("Je hebt het juiste nummer geraden " + naam + "! Ik had ook " + gekozenNummer + " gekozen!");
                humanScore += 1;
                currentRoundNumber += 1;            
            } else {
                alert(gekozenNummer + " is fout " +naam+ ", ik heb " + cNumber() + " gekozen.");
                computerScore += 1;
                currentRoundNumber += 1;                
            };
        }
    } else {
        alert("Het is onbeleefd om je niet voor te stellen, mijn ip adres staat toch ook vermeld?");
    };
};
//Weergave van score in log
const printScore = () => {
    console.log("Ronde " + currentRoundNumber);
    console.log("Score van mij " + computerScore);
    console.log("Score van "+ naam + " " + humanScore);
    console.log("Nog " + (5-currentRoundNumber) + " pogingen over!") 
};
//Ronde controle en game opnieuw herhalen
const doGame = () => {
    while (!end && currentRoundNumber < 5) {
        guessMyNumberGame();
        printScore();
        if (currentRoundNumber == 5) {
            alert("Je hebt geen pogingen meer over! Het spel is af");
        } else {
            askEndGame();
        };
    };    
    alert("Bedankt voor het spelen.");
};
//Geef je al op functie
const askEndGame = () => {
    einde = prompt("Geef je al op? Ja of nee. Nog " + (5-currentRoundNumber) + " pogingen over!");
    if(einde != null && (einde === "Ja" || einde === "ja")){
        end = true;
    }
}
//Activatie spelletje
doGame()


