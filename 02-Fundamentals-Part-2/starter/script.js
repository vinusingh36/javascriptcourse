"use strict";
/*
//visible error
let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) {
    console.log("Person can  Drive!");
}


function logger() {
    console.log("My name is Vineet");
}

logger();


function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and
    ${oranges} oranges`;
    return juice;
}


const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);

const appleOranageJuice = fruitProcessor(4, 6);
console.log(appleOranageJuice);


//function declaration-
console.log(calcAge(1999));

function calcAge(birthYear) {
    return 2023 - birthYear;
    //return age;
}




//function expression
const calcAge1 = function (birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge1(1999));



//Arrow function

const calcAge2 = birthYear => 2023 - birthYear;

console.log(calcAge2(1999));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years.`;
}

let years = yearsUntilRetirement(1999, "vineet");
console.log(years);

//Function calling other Function -

function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} applesPieces and
    ${orangePieces} orangesPieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;

    }
    else {
        console.log(`${firstName} is already retired!`);
        return -1;
    }
    //return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1999, "vineet"));
console.log(yearsUntilRetirement(1950, "Papa"));


const friend1 = "Michael";
const friend2 = 'Steven';

const friends = ['Vineet', "Michael", "Steven"]
console.log(friends);

const years = new Array(1999, 1998, 1997, 1996, 1995);
console.log(years);

console.log(years[2], years[3]);

console.log(years[years.length - 1]); //expression years.length-1

friends[2] = "jay"
console.log(friends);

const jonas = ["Jonas", "Verma", 2024 - 1999, friends];
console.log(jonas);

//Excercise -

const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const year = [1999, 1998, 1997, 1996, 1995]

const age1 = (calcAge(year[0]));
const age2 = (calcAge(year[1]));
console.log(age1);

const ages = [age1, age2]
console.log(ages);



const friends = ['Vineet', "Michael", "Steven"];
const newLength = friends.push("jay");
//friends.unshift("Rohan");
const popped = friends.pop();
console.log(popped);
friends.shift();

console.log(friends);
//console.log(newLength);

console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));


//Intro to Objects :-
const jonas = {
    firstName: "Jonas",
    lastName: 'Verma',
    age: 2024 - 1999,
    job: 'IT',
    friends: ['Vineet', 'Mukul', 'Varun'],
}

console.log(jonas);
console.log(jonas['lastName']);


let nameKey = "Name";
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt("Please enter firstName,lastName,age,job and Friends");
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }
// else {
//     console.log('Wrong Query');
// }

jonas.location = "India";
jonas["India"] = "@Vineet";
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



const jonas = {
    firstName: "Jonas",
    lastName: 'Verma',
    birthYear: 1999,
    job: 'IT',
    friends: ['Vineet', 'Mukul', 'Varun'],
    hasDriverLicense: false,

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} -year old ${jonas.job} worker, and he has ${this.hasDriverLicense ? "Driver's License" : "no Driver's License"}`
    }
}
jonas.calcAge();

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());
// console.log(jonas["calcAge"](1999));



//Loops

const jonasArray = [
    'joans',
    'verma',
    2024 - 1999,
    'teacher',
    ['vineet', 'Peter', 'Jacob'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    //  types[i] = typeof jonasArray[i];

    types.push(typeof jonasArray[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020, 1999];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}
console.log(ages);


for (let i = 0; i < jonasArray.length; i++) {
    // console.log(jonasArray[i], typeof jonasArray[i]);
    if (typeof jonasArray[i] !== 'string') continue;


    console.log(jonasArray[i], typeof jonasArray[i]);
}



const jonas = [
    'joans',
    'verma',
    2024 - 1999,
    'teacher',
    ['vineet', 'Peter', 'Jacob']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------------starting exercise ${exercise}`);
}

*/

let rep = 1;
while (rep <= 10) {
    // console.log(`Lifiting weights repetition ${rep} (●'◡'●)`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}