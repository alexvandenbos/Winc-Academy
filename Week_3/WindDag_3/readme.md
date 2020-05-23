## **Deel 1: GET verschillende endpoints**

1. Maak een lijstje van alle beschikbare genres en hun corresponderende IDs van TheMovieDB ✅

2. Haal 1 film op, op basis van de film ID met Postman (dus niet het genre ID) 
⇒ (hoe kun je de ID achterhalen?). 
Gebruik het [/find endpoint](https://developers.themoviedb.org/3/find/find-by-id) en lees het goed.
    - Gelukt om 1 film op te halen met Postman? 
    Haal dan de volgende films op met Postman, 1 voor 1:
        - The Lion King (2019)
        - The Joker (2019)
        - Toy Story 4 (2019)
    - Je hebt nu geleerd hoe je 1 specifieke film kunt ophalen. 
    Tenslotte, voeg een 1 **<h1>** toe aan je html en laat daar de titel van jouw favoriete film aller tijden zien.
3. Maak een nieuwe lijst met 10 **Top Rated** movies 
    - De context mag je zelf kiezen: aller tijden (standaard), van de maand (extra params?), van 2019 (extra params?).

4. Maak een nieuwe lijst met de beste films (**top rated**) binnen het genre **action.** 
[Gebruik de **Discover** query.](https://developers.themoviedb.org/3/discover/movie-discover) 
5. Maak een nieuwe lijst met films uit het jaar **1975**

    [Gebruik de **Discover** query.](https://developers.themoviedb.org/3/discover/movie-discover) 

## **Deel 2: Post request (alleen met Postman)**

1. Je gaan een POST request maken, die jouw **rating** post naar een film van jouw keuze. 
2. Let op: *"A valid session or guest session ID is required. You can read more about how this works"* (lees de documentatie dus goed door)
3. Je rating verschijnt daadwerkelijk in de database, en is terug te traceren naar jouw API key en dus jouw emailadres. Dus je wilt wel iets "echts" opsturen.
4. Check de code generation functie in de documentatie. Ze gebruiken niet de fetch() methode, maar je kunt er wel inspiratie uit halen hoe de settings moeten zijn. 
5. Check of het is gelukt. Zie je rating staan op [https://www.themoviedb.org/](https://www.themoviedb.org/) ? Of kun je misschien een GET request doen van de ratings van de movie, om te zien of die van jou ertussen staat? Kan allebei. 

## **Deel 3: Delete request (alleen met Postman)**

1. Delete je bovenstaande rating 
2. Ook voor deze geldt weer dat er een *"valid session or guest session ID is required." is.* Lees de documentatie goed door hoe je een DELETE request doet van jouw rating