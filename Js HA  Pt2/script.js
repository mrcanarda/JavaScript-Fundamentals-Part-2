let Deutschland = "53 million"
let Hannover = "4 million"

console.log (Deutschland);
console.log (Hannover);

let isIsland = true;
console.log (typeof isIsland);

Isisland = "Deutschland"
console.log (typeof Isisland);

let language;
console.log (language);
console.log (typeof language);

const massMarks = 78;
const heightMarks = 1.69;
const massJohn = 92;
const heightJohn = 1.95; 

const BMIMark = massMarks / heightMarks ** 2; 
const BMIJohn = massJohn / heightJohn ** 2; 
const markHigherBMI = BMIMark > BMIJohn; 

console.log(BMIMark , BMIJohn, markHigherBMI);



const massMark = 95;
const heightMark = 1.88; 
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2; 
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn; 

console.log(BMIMark, BMIJohn, markHigherBMI);




// in Deutschland Wohnen Leute :
const DeutschlandEinwohnerZahl = 84000000;

//Falls halb Personen verlassen Deutschland: 
const ifDeutschlandhalf = DeutschlandEinwohnerZahl / 2; 

//in Finland Wohnen Leute:
const FinlandEinwohnerZahl = 6000000;

//Deutschland oder Finland WohnerZahlen: 
const DeutschlandEinwohnerZahloderFinlandEinwohnerZahl = DeutschlandEinwohnerZahl > FinlandEinwohnerZahl;

//durschnittlichLand in die Welt 
const durchschnittlichLand = 33000000; 

//durschnittlichLand oder Deutschland
const deutschlandDurschnittlichLandoder = durchschnittlichLand > DeutschlandEinwohnerZahl; 

console.log(ifDeutschlandhalf, DeutschlandEinwohnerZahloderFinlandEinwohnerZahl, deutschlandDurschnittlichLandoder);



const massCem = 102;
const heightCem = 1.98;
const massCan = 78; 
const heightCan = 1.78;

const CemBMI = massCem / heightCem ** 2;
const CanBMI = massCan / heightCan ** 2; 

const CemBMIhigher = CemBMI > CanBMI; 

console.log(CemBMI, CanBMI, CemBMIhigher);


const markBMI = 26.87; 
const johnBMI = 27.44;

if (markBMI > johnBMI) {
    console.log ("Mark's BMI is higher than John's!");
} else {
    const higher = johnBMI > markBMI; 
    console.log ("John's BMI is higher than Mark's!");
}

const massCan = 78;
const heightCan = 1.69;
const massCem = 92;
const heightCem = 1.95;

const BMICan = massCan / heightCan ** 2; 
const BMICem = massCem / heightCem ** 2;
console.log(BMICem, BMICan);

if (BMICem > BMICan) {
    console.log(`Cem's BMI (${BMICem}) is higher than Can's (${BMICan})!`);
} else {
    console.log(`Can's BMI (${BMICan}) is higher than Cem's (${BMICem}) !`)
}

const averagepopulation = 33000000000; 
const DeutschlandEinwohner = 80000000000;

if (DeutschlandEinwohner > averagepopulation) {
    console.log("Deutschland's population is avobe average");
} else {
    console.log("Deutschland's population is below average");
}


const age = 15; 

if (age >= 18) {
    console.log ('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age; 
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
} 

const average = 140; 
const deutschland = 83;

if (average < deutschland) {
    console.log (`Deutschland's population is avobe average`);
}   else {
    const populationLeft = average - deutschland;
    console.log (`Deutschland's population is below average. Deutschland need ${populationLeft} people`);
}

const money = 0;
if (money) {
    console.log("Don't spend it all 😃");
} else {
    console.log("You should get a job!");
}


let n = "9" - "5";
console.log(n);

let m = "19" - "13" + "17";
console.log(m);

let x = "19" - "13" + 17;
console.log(x);

let y = "123" < 57;
console.log(y);

let a = 5 + 6 + "4" + 9 - 4 - 2;
console.log(a);

   //22. 

   const age = "18";
   if (age === 18) console.log("You just became an adult :D (scrict");
   if (age == 18) console.log("You just became an adult :D (loose)");
   
   const favorite = Number(prompt("What's your favorite number"));
   console.log(favorite);
   console.log(typeof favorite);
   
   if (favorite === 23) { // 22 === 23 -> FALSE
   console.log("Cool! 23 is an amazing number")
   } else if (favorite === 7) {
       console.log("7 is also a cool number")
   } else if (favorite === 9) {
       console.log("9 is also a cool number")
   } else {
       console.log("Number is not 23 or 7 or 9")
   }
   
   if (favorite !== 23) console.log("Why not 23?");
   
   
   
   //23
   
   //24
   
   const hasDriverLicense = true; // A
   const hasGoodVision = false; // B 
   
   console.log(hasDriverLicense && hasGoodVision);
   console.log(hasDriverLicense || hasGoodVision);
   console.log(!hasDriverLicense)
   
   const isTired = false; // C 
   console.log(hasDriverLicense && hasGoodVision && !isTired);
   
   if (hasDriverLicense && hasGoodVision && isTired) {
       console.log("Sarah is able to drive!");
   } else {
       console.log("Someone else should drive...");
   }
   
   
   
   
   //Chalenge 3 
   
   const dolphinAverage = (96 + 108 + 89) / 3;
   console.log(dolphinAverage);
   
   const koalasAverage = (88+91+110) / 3;
   console.log(koalasAverage);
   
   if (dolphinAverage > koalasAverage) {
       console.log("Dolphins are wins")
   } else {
       console.log("Koalas are wins")
   }
   
   // BONUS 1 
   const scoreDolphins = (97 + 112 + 80) / 3;
   const scoreKoalas = (109 + 95 + 50) / 3;
   console.log(scoreDolphins, scoreKoalas);
   
   if (scoreDolphins > scoreKoalas && scoreDolphins >= 100 ) {
       console.log("Dolphins win the trophy");
   } else if   (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
      console.log("Koalas win the tropy");
   } else if (scoreDolphins === scoreKoalas >= 100) {
       console.log("Both win the tropy!");
   } else {
       console.log("No one wins the trophy");
   }
   
   
   //22 HA
   //const age = "18";
   //if (age === 18) console.log("You just became an adult :D (scrict");
   //if (age == 18) console.log("You just became an adult :D (loose)");
   
   //const favorite = Number(prompt("What's your favorite number"));
   //console.log(favorite);
   //console.log(typeof favorite);
   
   
   const numNeigbours = Number(prompt("How many neighbour countries does your country have ?"));
   
   if (numNeigbours == 3) console.log ("More than 1 border");
   
   const hasDriverLicense = true; // A
   const hasGoodVision = false; // B 
   
   console.log(hasDriverLicense && hasGoodVision);
   console.log(hasDriverLicense || hasGoodVision);
   console.log(!hasDriverLicense)
   
   const isTired = false; // C 
   console.log(hasDriverLicense && hasGoodVision && !isTired);
   
   if (hasDriverLicense && hasGoodVision && isTired) {
       console.log("Sarah is able to drive!");
   } else {
       console.log("Someone else should drive...");
   }
   
   
   const speakEnglish = false // A 
   const fünfzig = true // B 
   
   if (speakEnglish && fünfzig) {
       console.log("You should live n Deutschland");
   } else {
       console.log("Deutschland does not meet your criteria");
   }
   
   //The Switch Statement HA

   const language = "engilsh"

   switch (language) {
       case "chinese":
       case "mandarin":
           console.log("MOST number of native speakers");
           break;
       case "spanish":
           console.log("2nd place in number of native speakers");
           break;
       case "engilsh":
           console.log("3rd place");
           break;
       case "hindi":
           console.log("Number 4");
           break;
       case "arabic":
           console.log("5th most spoken language");
           break;
       default:
       console.log("Great language too :D")
       
   }


   //Challenge #4 

const bill = 275; 
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);

const bill = 40; 
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);

const bill = 430; 
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);

//LECTURE: Function Declarations vs. Expressions 


//Function declaration 
function calcAge1(birhtYear) {
    return 2037 - birhtYear;
}
const age1 = calcAge1(1991);

//Function expression 
const calcAge2 = function (birhtYear) {
    return 2037 - birhtYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;

};

//Hausaufgabe

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);


//Arrow function 
const calcAge3 = birhtYear => 2037 - birhtYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birhtYear, firstName) =>  
{
    const age = 2037 - birhtYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years` ;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

// Hausaufgabe

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3, percChina3, percUSA3);

function cutFruitPieces (fruit) {
    return fruit *4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of 
    apple and ${orangePieces} pieces of orange. `;
    return juice;
}
console.log(fruitProcessor (2, 3));

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${percentage}% of the world. `;
    console.log(description);
};

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);

const yearsUntilRetirement = function (birhtYear, 
    firstName) {
    const age = calcAge(birhtYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log( `${firstName} retires in ${retirement} years` );
        return retirement;
    }  else {
        console.log( `${firstName} has already retired` );
        return -1;
    }
}

*/

const calcAverage = (a, b, c) => (a + b +c) /3 ;  
//console.log(calcAverage(3, 4, 5));

//Test 1 

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) 
{
    if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphons wins (${avgDolphins} vs ${avgKoalas})`);
}
    else if (avgKoalas >= 2 * avgDolphins) 
    {
    console.log(`Koalas wins (${avgKoalas} vs  ${avgDolphins})`);
    }
    else 
    { 
        console.log("No teams wins...");
    }
}

checkWinner(scoreDolphins, scoreKoalas);

//Test 2 
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas );


//Introductions to Arrays 

const friend1 = "Micheal"; 
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter" ];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

//[]

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends [2] = "Jay";
console.log(friends[2]);

const firstName = "Can";
const can = [firstName, "Arda", 2023 - 1995, "teacher", friends ];
console.log(can);
console.log(can.length);

//Exercise 

const calcAge = function (birhtYear) {
return 2037 - birhtYear;
}

const years = [1991, 1970, 1960, 2022, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);

console.log(age1, age2, age3, age4 );

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length - 1])];

console.log(ages);

const population = [10, 1441, 332, 83];
console.log(population.length === 4 );
const percentages = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3])
];
console.log(percentages);


 const friends = ["Micheal", "Steven", "Peter" ];

 //Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements

friends.pop(); // Last 
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First 
console.log(friends);

console.log(friends.indexOf ("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); //Find a veriable
console.log(friends.includes("Bob"));
console.log(friends.includes(23)); 

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven")
} 

//HA 

const neighbours = ["Norway", "Sweden", "Russia"];

neighbours.push("Utopa");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Italy")) {
    console.log("Proably not a central European country :D")
}

neighbours[neighbours.indexOf("Sweden")] = "Rebublic of sweden"
console.log(neighbours);

[]



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log( bills, tips);

//Dot vs. Bracket notation 

const jonasArray = [
    "Jonas", 
    "Schmedtmann", 
    2037 - 1991, 
    "teacher",
    ["Micheal", "Peter", "Steven"]
];

const jonas = {
    firstName: "Jonas", 
    lastName: "Schmedtmann", 
    age: 2037 - 1991, 
    job: "teacher", 
    friends: ["Micheal", "Peter", "Steven"]
};

const myCountry = {
    country: "Finland",
    country: "Helsinki",
    language: "finnish", 
    population: 6,
    neighbours: ["Norway", "Sweden", "Russia"]
};

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt("What do you wnat to know about Toprak? Choose between firstName, lastNanme, age, job, and friends");

if (jonas[interestedIn]) {
    console.log(jonas [interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, jastName, age, job, and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Chalenge 
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



const myCountry = {
    country: "Finland",
    country: "Helsinki",
    language: "finnish", 
    population: 6,
    neighbours: ["Norway", "Sweden", "Russia"]
};


console.log(
    `${myCountry} has ${myCountry.population} million 
    ${myCountry.language}-speaking people, 
    ${myCountry.neighbours.length} neigbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2; 
console.log(myCountry.population);

myCountry ["population"] -=2;
console.log{myCountry.population};

//Test 2 
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas );



//Introductions to Arrays 

const friend1 = "Micheal"; 
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter" ];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);



//Object Methods 

const jonas ={
    firstName: "Jonas", 
    lastName: "Schmedtmann", 
    birthYear: 1991, 
    job: "teacher", 
    friends: ["Micheal", "Peter", "Steven"], 
    hasDriversLicense: true, 

   // calcAge: function (birthYear) {
     //  return 2037 - birthYear;
   // }

  //  calcAge: function() { 
    //    console.log(this); 
      //  return 2037 - this.birthYear;
 //   }

    calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old 
        ${jonas.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`}
}; 

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());





const mark = {
    fullName: "Mark Miller", 
    mass: 78, 
    height: 1.69, 
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi; 
    }
}; 

const john = {
    fullName: "John Smith", 
    mass: 92, 
    height: 1.95, 
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi
    }
};

mark.calcBMI(); 
john.calcBMI(); 

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi})
    is higher than ${john.fullName}'s BMI (${john.bmi})`) 
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) 
    is higher than ${mark.fullName}'s BMI (${mark.bmmi}`)
}