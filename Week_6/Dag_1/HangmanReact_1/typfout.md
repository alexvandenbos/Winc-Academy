#geeft niet aan dat je gewonnen hebt.

You lost gaat af na 5 keer,
Het geraden woord wordt weergegven.

waarom geeft hij you lost aan na 5 keer proberen?
{gameOver}
zet functie in app

import GameOver from "../GameOver/GameOver";
//deze geeft {chosenWord: "vis", wordGuesed: true}
//deze geeft {chosenWord: "vis", wordGuesed: false}

const gameOver =
    gameIsOver ? (
      < GameOver chosenWord={game.chosenWord} wordGuesed={wordWasGuessed} />
    ) : null;

spellingfout van wordGuesed naar wordGuessed in GameOver