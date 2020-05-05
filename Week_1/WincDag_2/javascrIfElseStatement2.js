const age = 18;
const isFemal = true;
const driverStatus = "bob";
const name = "Alex";
const totalAmount = 50;

if (age >= 18) {
    console.log("Je mag naar binnen, je bent 18 of ouder");
} else {
    console.log("je mag niet naar binnen, je bent jonger dan 18");
}
if (isFemal === true) {
    console.log("Voor jou is het eerste drankje gratis");
} else {
    console.log("Voor jou is niet het eerste drankje gratis");
}
if (driverStatus === "bob") {
    console.log("Jij mag de naar huis rijden, je bent bob");
} else {
    console.log("Jij mag niet naar huis rijden, je bent onder invloed");  
}
if (age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!");
}
if (name === "Sarah" || name === "Bram") {
    console.log("Je mag een gratis biertje, we betaan 50 jaar!");
}
if (totalAmount >= 25 && totalAmount < 50) {
    console.log("gratis bitterballen!");
}
if (totalAmount >= 50 && totalAmount < 100) {
    console.log("gratis nachos!");
}
if (totalAmount >= 100) {
    console.log("gratis champagne!");
}