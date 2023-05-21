"use strict;"



function logger() {
    console.log("My name is Can");
}

// calling / running / invoking functions 

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges. ` ; 
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


function describeCountry(country, population, capitalCity) {
    const Deu = `${country} has ${population} people and its capital city is ${capitalCity}` ;
    return Deu;
}

const descDeutschland = describeCountry ("Deutschland","80 Million" , "Berlin");
const descPortugal = describeCountry ("Portugal", "10Million", "Lisbon" );
const descFinland = describeCountry("Finland" , "6 Million", "Helsinki" );
console.log(descDeutschland, descFinland, descPortugal);



