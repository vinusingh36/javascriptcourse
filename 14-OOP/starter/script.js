'use strict';
/*

const Person = function (firstName, birthYear) {
    //instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this create for the performance
    this.calcAge = function () {
        console.log(2024 - this.birthYear);
    };
}

const vineet = new Person('vineet', 1999);
//console.log(vineet);

//New {} is created.
// fun is called . this ={}
//Linked to a prototype/
//fun automatically return {}

const matilda = new Person("Matilda", 2000);
const jack = new Person("Jack", 2001)
// console.log(matilda, jack);

console.log(Person.prototype);

//Prototype
Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
};

vineet.calcAge();

// console.log(vineet.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(vineet));

Person.prototype.species = "Homo Sapiens";

// console.log(vineet.species, matilda.species);

// console.log(vineet.hasOwnProperty('firstName'));
// console.log(vineet.hasOwnProperty('species'));

// console.log(vineet.__proto__.__proto__);

console.dir(Person.prototype.constructor);
const arr = [3, 4, 5, 6, 8, 3, 4, 8];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);


Array.prototype.unique = function () {
    return [...new Set(this)];
}

// console.log(arr.unique());

const h1 = document.querySelector('h1')
// console.dir(h1);
// console.dir(x => x + 1);

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const vinuCar = new Car("Tata", 230)

Car.prototype.accelerate = function () {
    // return this.speed + 10;
    this.speed += 10;
    console.log(this.speed);

}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
}

//console.log(vinuCar);
vinuCar.accelerate();
vinuCar.brake();

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95)

// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// Mercedes.brake();
// Mercedes.brake();
// Mercedes.brake();


/////////////////////classes expression

// const PersonClL = class {

// }
Person.hey = function () {
    console.log(`Hey there 🎆`)
    //console.log(this);
}

Person.hey();


//Class Declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2024 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    static hey() {
        console.log(`Hey there!!!!!!!!!`);
        // console.log(this);
    }
}

const jessica = new PersonCl("Jessica", 1999);
jessica.calcAge();
console.log(jessica);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet();



//classes are not hoisted 
//classes are executed in strict mode

//getter and setter

const account = {
    owner: "Vneet",
    movement: [200, 530, 120, 300],

    get latest() {
        return this.movement.slice(-1).pop();
    },
    set latest(mov) {
        this.movement.push(mov);
    },


}
//


console.log(account.latest);
account.latest = 500;
console.log(account.movement);
PersonCl.hey();


///Object.create

const PersonProto = {
    calcAge() {
        console.log(2024 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = "Steven";
steven.birthYear = 1999;
steven.calcAge();


console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1997);
sarah.calcAge();



const Person = function (firstName, birthYear) {
    //instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

}

Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear)
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}.`);
}

const mike = new Student('Mike', 2010, 'Computor Science');
console.log(mike);
mike.introduce();
mike.calcAge();





const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

// const vinuCar = new Car("Tata", 230)

Car.prototype.accelerate = function () {
    // return this.speed + 10;
    this.speed += 10;
    console.log(this.speed);

}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
}


const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

//Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}.`);
}

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);

tesla.brake();
tesla.accelerate();
/////////////////

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2024 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    static hey() {
        console.log(`Hey there!!!!!!!!!`);
        // console.log(this);
    }
}


class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
        super(firstName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.firstName} and i study ${this.course}.`);
    }


    calcAge() {
        console.log(`I'm ${2024 - this.birthYear} year old , but as a student  i feel more like ${2024 - this.birthYear + 10}`);
    }
}


const Mike = new StudentCl("Mike", 1999, "CS")

Mike.introduce();
console.dir(Mike.introduce);
Mike.calcAge();



const PersonProto = {
    calcAge() {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
}

let steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}.`);
}

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "CS");
jay.introduce();
jay.calcAge();


//Public Field
//Private field
//Public Method
//Private method



class Account {

    //public field(instances)
    locale = navigator.language;

    //Private Field 
    #movements = [];
    #pin;

    private

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        //protected property
        // this._movements = [];
        // this.locale = navigator.language;
    }

    deposit(val) {
        this.#movements.push(val)
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }



    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan ${val} is deposited to the Account`);
        }
        return this;
    }

    getMovements() {
        return this.#movements;
        // return this;
    }

    //private method
    #approveLoan(val) {
        return true;
    }
}

const act1 = new Account("Jonas", 'EUR', 1111);
console.log(act1);
act1.deposit(240);
act1.withdraw(100);
act1.requestLoan(1000);
//act1.#approveLoan(1000);

console.log(act1.getMovements());
//console.log(act1.#pin);

//console.log(act1.#movements);




// act1.#movements.push(250);
// act1._movements.push(-300);
// act1._movements.push(100);
// act1.deposit(240);
// act1.withdraw(100);
// act1.requestLoan(1000);
// // act1.approveLoan(1000);

// console.log(act1);
// console.log(act1.getMovements());

// console.log(act1._pin);

//chaining
//console.log(typeof (act1.deposit(300)));
act1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(act1.getMovements());

*/



// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }


class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;

    }


    accelerate() {
        this.speed += 10;
        console.log(this.speed);
    }

    brake() {
        this.speed -= 5;
        console.log(this.speed);
        return this;
    }

}
// const vinuCar = new Car("Tata", 230)

// Car.prototype.accelerate = function () {
//     // return this.speed + 10;
//     this.speed += 10;
//     console.log(this.speed);

// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(this.speed);
// }


class EV extends Car {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;

    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}.`);
        return this;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

}

// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

//Link the prototype
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}.`);
// }

const rivian = new EV("Rivian", 120, 23);
rivian.chargeBattery(90);
console.log(rivian);

// rivian.brake();
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

