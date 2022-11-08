// Lecture 1 Values and Variables

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