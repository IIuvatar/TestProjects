// Lecture 1 Values and Variables

/*

const country       = 'Norge';
const continent     = 'Europa';
let population      = 5500000;


console.log(country);
console.log(continent);
console.log(population);

// Lecture 2 Data Types

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);

language = 'Norsk';

console.log(typeof language);

console.log(language);

// Lecture 3 Basic Operation

let halfPopulation = (population / 2);

console.log(halfPopulation);

++ population;

console.log(population);

const finlandPopulation = 6000000;
let comparePopulation = population > finlandPopulation;

console.log(comparePopulation);

const avgPopulation = 33000000;

let compareAverage = avgPopulation > population;

console.log(compareAverage);

let description = country + ' is in ' + continent + ' and its ' + (population / 1000000) + ' million people speak ' + language;

console.log(description)



// Basic Operators
// Mattematiske


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Dust';
console.log(firstName + ' ' + lastName);

// Assignment operator

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x *4 = 100
x++; // Increase x by 1
x--; // Decrease x by 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageJonas >= ageSarah); 
console.log(ageJonas <= ageSarah);
console.log(ageJonas < ageSarah);

const isFullAge = ageSarah >= 18;
*/

// Operator preceedense
// () [] 

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);


