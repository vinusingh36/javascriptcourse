/*let js = "amazing";

//40 + 8 + 30 - 10;
console.log(40 + 8 + 30 - 10);
console.log('jonas');
console.log(23);


let firstName = "bob";
console.log(firstName);

let name = "vineet";  //not recommended
console.log(name);

//varaible name is discripted to avoid confusion

let country = "India";
let continent = "Asia";
let population = 1.4
console.log(country, continent, population);
*/
//DataTypes


//Number-> Floating point number used for decimal and number;
//String - sequence of character use for text
//single or double qoute
//Boolean - true or false
//Undefined -empty value
//null -
//Symbol - unique vlaue that cant be changed.
//BigInt - large number



// let javascriptIsFun = true;
// // console.log(javascriptIsFun);

// // console.log(typeof (true));
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "javascriptIsFun");

// javascriptIsFun = "Yes!"
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);


// console.log(typeof null);

/*
let age = 30;
age = 31;  //reassigned or mutated

const birthYear = 1991;
//birthYear = 1995;

var job = "Programmer";
job = "teacher";

lastName = 'vineet'
console.log(typeof lastName);


const now = 2023;
const ageVinu = now - 1999;
const ageRidam = now - 1998;

console.log(ageVinu * 2, ageRidam / 2, 2 ** 3);

//2**3 exponential declaration of variable
//2**3=2*2*2


const firstName = "vineet";
const lastName = "singh";
// const space = " "

console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10 //x=x+10
x *= 4
x--
x++
x++
x
console.log(x);

//comparison operator
console.log(ageRidam > ageVinu);

console.log(ageRidam >= 18);

const now = 2023
const ageVinu = now - 1999;
const ageRidam = now - 1998;

console.log(now - 1999 > now - 1998);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageRidam + ageVinu) / 2;
console.log(averageAge);


const firstName = 'vineet';
const job = 'teacher';
const birthyear = 1991;
const currYear = 2023;

const jonas = "I'm " + firstName + ',a ' + (currYear - birthyear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${currYear - birthyear} year old teacher !`;
console.log(jonasNew);




const age = 15;
//const isoldEnough = age >= 18;

if (age >= 18) {
    console.log("You can start driving 🚗");
}
else {
    const yearsLeft = 18 - age;
    console.log(`You need to wait ${yearsLeft} more years`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



//type conversion

const birthYear = '1991';
console.log(Number(birthYear));
console.log(Number(birthYear) + 18);

console.log(String(23), 23);

//type coercion

console.log('I am ' + 23 + "years old");

console.log('23' / 2);

let n = '1' + 1;
n = n - 1;
console.log(n);

//5 falsy values - 0 '' undefined NaN null

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean({}));


const money = 0;
if (money) {
    console.log("DOnt spend it at all!");
} else {
    console.log("You should get a Job!");
}

let height = 0;
if (height) {
    console.log("Yay height is defined");
} else {
    console.log("height is undefined");
}


const age = 18;
if (age === 18) {
    console.log("You are adult!");
}

const fav = Number(prompt("Please enter the number"));
console.log(typeof fav);


if (fav === 23) {
    console.log("Cool its amazing number");
}

if (fav !== 23) console.log("why not 23!");



//Boolean Logic

const hasDriverLicense = true;
const hasGoodVision = true;

// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

//const shouldDrive = hasDriverLicense && hasGoodVision;

if (hasDriverLicense && hasGoodVision) {
    console.log("He can Drive");
}
else {
    console.log("Someone else should Drive");
}

const isTired = true;

const day = 'sunday';

switch (day) {
    case 'monday':
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("preapre theory video");
        break;
    case 'wenesday':
    case 'thursday':
        console.log("write code example");
        break;
    case 'friday':
        console.log("record video");
        break;
    case "saturday":
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid year!");
        break;
}

*/

// Conditional Operator 

const age = 18;
age >= 18 ? console.log("i like to drink cold drink")
    : console.log("I like to drink water");

const drink = age >= 18 ? "Hard drink" : "Soft Drink";
console.log(drink);

console.log(`i like to drink ${age >= 18 ? "Hard drink" : "Soft Drink"}`);