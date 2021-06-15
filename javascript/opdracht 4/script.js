const driverStatus = 'bob';
const isFemale = true;
const age = 36;
const naam = 'Sarah'
const totalAmount = 51;


if (age >= 18) {
    console.log('Welcome');
} else {
    console.log('Sorry je bent nog geen 18 jaar dus je mag nog niet naar binnen.');
}


if (isFemale) {
    console.log('Je bent een vrouw, dus kaartjes mogen verkocht worden');
} else {
    console.log('Sorry ladiesnight is alleen voor de dames');
}


if (driverStatus == 'bob') {
    console.log('Jij bent vanavond de bob!');
} else {
    console.log('Sorry om thuis te komen heb je een bob nodig!');
}

if (naam === "Sarah" || naam === "Bram") {
    console.log("Je naam is Sarah of Bram, HOERA!! gratis biertje!");
} else {
    console.log("Je doet niet mee aan onze ludieke 50 jarig jubileum");
}

if (totalAmount >= 100) {
    console.log("gratis fles Champagne.");
} else if (totalAmount >= 50) {
    console.log("gratis portie nachos");
} else if (totalAmount >= 25) {
    console.log("gratis bitterballen");
} else {
    console.log("Helaas geen korting, maar leuk je te zien hier.");
}