'use strict';

/*
function calcAge(birthYear) {
    const age = 2024 - birthYear;
    // console.log(lastName);

    function printAge() {
        let output = `${firstName} is ${age} born in ${birthYear}`;
        // console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //creating new variable with same name as outer scope's variable
            const firstName = "Ajay"
            //Reassigning outer scope's variable
            output = 'New Output';
            const str = `Oh you are a millenial, ${firstName}`;
            // console.log(str);

            function add(a, b) {
                return a + b;

            }
            // console.log(add(2, 3));
        }

        // console.log(millenial);
        // console.log(output);

    }
    printAge();
    return age;
}


const firstName = "vineet";
calcAge(1995);
//console.log(age);   //can not access out of the scope it has only function scope;

//Hoisting 
// console.log(me);
// console.log(job);
// console.log(year);


var me = "vineet";
let job = 'teacher';
const year = 1996;

//Function 

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 5));
// console.log(addArrow(3, 6));

function addDecl(a, b) {
    return a + b;

}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// console.log(!undefined);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;


function deleteShoppingCart() {
    // console.log('All products are deleted!');
}

var x = 1;
let y = 2;

const z = 3;

// this keyword - 

const calcNewAge = function (birthYear) {
    // console.log(2024 - birthYear);
    // console.log(this);
}

calcNewAge(1999);

const calcNewAgeArrow = birthYear => {
    // console.log(2024 - birthYear);
    //console.log(this);
}

calcNewAgeArrow(1994);

const jonas = {
    year: 1995,
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);
    }
}

jonas.calcAge();

const matNew = {
    year: 1999,
}

matNew.calcAge = jonas.calcAge;

matNew.calcAge();

const f = jonas.calcAge;


const jonas = {
    year: 1995,
    firstName: "vineet",
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);
        //solution 1
        //     const self = this;  // can be called that 

        //     const isMillenial = function () {
        //         console.log(self);
        //         console.log(self.year >= 1981 && self.year <= 1986);
        //     };
        //     isMillenial();
        // },

        // solution 2 

        //const self = this;  // can be called that 

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1986);
        };
        isMillenial();
    },

    greet: function () {
        console.log(this.firstName)
    }
}

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(2, 5);
addExpr(2, 4, 4, 5)

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};


addArrow(2, 5, 6)

*/

//Primitive Type

let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';

///console.log(lastName, oldLastName);

// Reference Type

const jessica = {
    firstName: "jessica",
    lastName: "williams",
    age: 27,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

// console.log("Brfore Jessica", jessica);
// console.log("After marriage", marriedJessica);

// Copying Objects

const jessica2 = {
    firstName: "jessica",
    lastName: "williams",
    age: 27,
    family: ['alice', 'bob']
}

const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Brfore Jessica", jessica2);
console.log("After marriage", jessicaCopy);