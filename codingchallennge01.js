
// BMI = mass / height ** 2 = mass / (height * height)

/*
const massMark = 150;
const heightMark = 1.69;
const massJohn = 85;
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


const firstName1 = 'John';
const firstName2 = 'Mark';

if(bmiJohn > bmiMark) {
    console.log(
    `${firstName1}'s BMI (${bmiJohn}) is higher \n\
    than ${firstName2}'s ${bmiMark}`);
} else {
    console.log(
    `${firstName2}'s BMI ${bmiMark} is higher \n\
    than ${firstName1}'s ${bmiJohn}`);
}


// Type Conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coerciom

console.log(`I'am ` + 23 + ` years old`);
console.log(`I'am ` + '23' + ` years old`);

console.log(`23` - '10' - 3);
console.log(`23` * `2`);


let n = '1' + 1;
n = n - 1;
console.log(n);





// FALSE value: 0, undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log('You should get a job');
}

const height = (String(0))
if (height) {
    console.log(`Høyde er definert`);
    console.log(height);
} else {
    console.log('Høyde er ikke definert');
    console.log(height);
}

*/


// STRICT and LOOSE. === STRICT: No Conversion. == LOOSE: Conversion
// ALWAYS use STRICT!!!

const age = 18;
if(age == `18`) console.log(`LOGged`);

const favorite = Number(prompt(`Whats a number?`));

if (favorite === 23) {
    console.log(`It works`);
    console.log(favorite);
    console.log(typeof favorite);
} else if(favorite === 7) {
    console.log(`The number is 7`)
} else {
    console.log(`Number is not 23 or 7`)
}

