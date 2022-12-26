
// BMI = mass / height ** 2 = mass / (height * height)


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark ** 2);
console.log(bmiMark);

const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);



const firstName = 'Tommy';
const lastName = ' Solvang';
const job = 'Elektro';
const byear = 1987;
const year = 2037;

const tommy = "I'm " + firstName + ', a ' + (year - byear) + ' ' + 'years old ' + job + '!';

console.log(tommy)

const tommyNew = `I'm ${firstName}, a ${year - byear} year old ${job}`;
console.log(tommyNew)

console.log(`edve \n\
multiple \n\
lines`);

// IF ELSE Statement

const age = 14;

if (age >= 18) {
    console.log('YES')
} else {
    const yearsleft = 18 - age;
    console.log(`Nope, wait another ${yearsleft} years :)`)
}

const birthYear = 2001;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)

if(bmiJohn > bmiMark) {
    console.log(`John's BMI is higher than Mark's`)
} else {
    console.log(`Mark's BMI is higher than John's`)
}


let firstName1;
let firstName2;

if(bmiJohn > bmiMark) {
    firstName1 = `John`;
    firstName2 = `Mark`;
    console.log(`${firstName1}'s BMI ${bmiJohn} is higher than ${firstName2}'s ${bmiMark}`);
} else {
    firstName1 = `John`;
    firstName2 = `Mark`;
    console.log(`${firstName2}'s BMI is higher than John's`)
}