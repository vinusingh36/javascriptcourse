'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

let openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (address, mainIndex = 1, time = "23:10", starterIndex) {
    console.log(address, mainIndex, time, starterIndex);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },


};
/*
//maps

const rest = new Map();
rest.set('name', "Classic Italiano");
rest.set(1, 'Italy');
rest.set(2, 'india')
// rest.set('open', 10);
// rest.set('close', 23);


rest.set("categories", ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set("open", 11).set("close", 23).set(true, "We are open :D").set(false, "We are closed :D");
console.log(rest);
console.log(rest.get("name"));
console.log(rest.get(1));



const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has(1));

const que = new Map([
  ["question", "what is the best programming language"
  ],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Python'],
  [true, "Correct"],
  [false, "Try again"]
]);

console.log(que);
//covert object to the map
console.log(Object.entries(openingHours));
const hrMap = new Map(Object.entries(openingHours));
console.log(hrMap);

for (const [key, value] of que) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
  else {
    console.log(`Not number ${key} : ${value}`);
  }
}


//Convert map to the Array
console.log([...que]);
console.log([...que.entries()]);
console.log([...que.keys()]);
console.log([...que.values()]);



//sets
const orderSet = new Set(['pasta', 'pizza', 'risotto', 'pasta', 'pizza']);

console.log(orderSet.size);
console.log(new Set("vineet"));

orderSet.delete("risotto");
orderSet.add("Bread")
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}


const staff = ['waiter', 'chef', "Manager", 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);







const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) {
  //console.log(item);
}

for (const [i, el] of menu.entries()) {
  //console.log(`${i + 1} : ${el}`);
}
if (restaurant.openingHours && restaurant.openingHours.mon) {
  //console.log(restaurant.openingHours.mon.open);
}


//optional chaining
//console.log(restaurant.openingHours.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  // console.log(`${day}: ${open}`);
}


// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");


// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// let properties = Object.keys(openingHours);
// console.log(properties);

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// const entry = Object.entries(openingHours)
// console.log(entry);

// for (let [key, { open, close }] of entry) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }


//restaurant.orderPizza("mashroom", "onion", 'olive', "spinach");

//restaurant.orderPizza("mushroom")

//restaurant.orderPasta("Pasta1", "Pasta2", "Pasta3")
restaurant.orderDelivery({
  time: '23.30',
  address: "Val de sole 21",
  mainIndex: 2,
  starterIndex: 3
})
 
restaurant.orderDelivery({
  address: "New Area",
  starterIndex: 2
})
 
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[3];
 
const [x, y, z] = arr;
//console.log(x, y, z);
 
//console.log(arr);
 
 
let [main, , secondary] = restaurant.categories;
//console.log(main, secondary);
 
//switching the variable
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
 
[main, secondary] = [secondary, main];
//console.log(main, secondary);
 
//console.log(restaurant.order(2, 0));
let [starter, mainC] = restaurant.order(2, 0);
//console.log(starter, mainC);
 
 
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
 
//nested destructuring 
const [i, , [j, k]] = nested;
//console.log(i, j, k);
 
 
// Default Values
const [p, q, r = 1] = [8, 9];
//console.log(p, q, r);
 
// object destructuring 
const {
  name,
  openingHours,
  categories
} = restaurant;
 
//console.log(name, openingHours, categories);
 
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
 
console.log(restaurantName, hours, tags);
 
const {
  menu = [],
  starterMenu: starters = []
} = restaurant
 
console.log(menu, starters);
 
//Mutating Variable 
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
 
({ a, b } = obj);
 
console.log(a, b);
 
// nested object
 
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);
 
//Spread Operator
 
const arrNew = [7, 8, 9];
const badNewArr = [1, 2, arrNew[0], arrNew[1], arrNew[2]]
console.log(badNewArr);
 
 
const newArr = [1, 2, ...arrNew]
console.log(newArr);
 
console.log(...newArr);
 
const newMenu = [...restaurant.mainMenu, "Gnocci"]
 
console.log(...newMenu);
 
// Copy Array
 
const mainMenuCopy = [...restaurant.mainMenu]
 
//Join Two array
const menuC = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuC);
 
const str = "jonas";
const letters = [...str, '', 'S.']
console.log(letters);
 
 
// const ing = [
//   prompt('Let\'s make pasta! ingrediant 1?'),
//   prompt('ingredaint 2?'),
//   prompt('ingredaint 3?'),
// ]
 
// console.log(ing);
 
// restaurant.orderPasta(...ing);
 
//Object
const newRestaurant = {
  founded: 1980,
  ...restaurant,
  founder: "vineet"
}
 
const restaurantCopy = { ...restaurant }
restaurantCopy.name = "New Name";
console.log(restaurantCopy.name);
console.log(restaurant.name);
 
console.log(newRestaurant);
 
//Rest Pattern and Parameter
 
 
 
const arr = [1, 2, ...[3, 4]];
 
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);
 
const [pizaa, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizaa, risotto, otherFood);
 
//Object 
 
const { sat, ...weekdays } = restaurant.openingHours;
 
console.log(weekdays);
 
//Function
 
const add = function (...numbers) {
  //console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
 
add(2, 3);
add(2, 5, 9)
add(3, 4, 5, 7)
 
const x = [23, 5, 7];
add(...x);
 
 
 
// console.log(3 || 'Jonas');
// console.log(true || 0);
// console.log('' || 'Jonas');
 
// console.log(null || false);
 
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
 
//restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
 
 
// restaurant.numGuest = 10;
 
const guests = restaurant.numGuest || 10;
// console.log(guests);
 
const guestCorrect = restaurant.numGuest ?? 8;
console.log(guestCorrect);
 
const rest1 = {
  name: 'Capri',
  numGuests: 0
}
 
const rest2 = {
  name: 'Macd',
  // numGuest: 30,
  owner: "varun"
}
 
// rest1.numGuests = rest1.numGuests || 20;
// rest2.numGuest = rest2.numGuests || 10;
 
//OR assignment Operator
// rest1.numGuests ||= 30;
// rest2.numGuests ||= 15;
 
//nullish assignment operator
rest1.numGuests ??= 30;
rest2.numGuests ??= 15;
 
console.log(rest1);
console.log(rest2);
 



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);

//3
const allPlayers = [...players1, ...players2]
console.log(allPlayers);


//4
const playersFinal = ['Thiago', 'Coutinho', "Perisic", ...players1];
console.log(playersFinal);

//5
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);


//6
const printGoals = function (...playersName) {
  console.log(playersName);
}

printGoals("vineet", "varun", "sudhanshu", "Martinez");
printGoals("Davis", 'Muller', "Vam")

printGoals(...game.scored)

//7
team1 < team2 && console.log("Team1 is more likely to win");
team1 > team2 && console.log("Team2 is more likely to win");


// const gameScore = Object.entries(game.scored)
// console.log(gameScore);

for (let [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${name}`);
}

let avg = 0;
let odds = Object.values(game.odds)
for (const odd of odds) {

  avg += odd;

  avg /= odds.length;

}
console.log(avg);

for (const [team, odd] of Object.entries(game.odds)) {
  let teamStr = team === 'x' ? "draw" : `victory ${game[team]}`
  console.log(`odd of ${teamStr}: ${odd}`);
}



const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, 'Goal'],
  [61, "Yellow Card"],
  [64, 'Yellow Card'],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, 'Substitution'],
  [76, 'Goal'],
  [80, 'Goal'],
  [92, "Yellow Card"]
]);


//console.log([...gameEvents.values()]);
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
const gameTime = [...gameEvents.keys()].pop();
console.log(`An event happened, on avg , every ${gameTime / gameEvents.size} minute`);


for (const [min, event] of gameEvents) {
  if (min <= 45) {
    console.log(`[First Half] ${min}: ${event}`);
  }
  else {
    console.log(`[Second Half] ${min}: ${event}`);
  }
}

*/


const airLine = 'Tap Air India';
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airLine.length);
console.log("vineet".length);

console.log(airLine.indexOf("A"));
console.log(airLine.lastIndexOf("I"));

console.log(airLine.slice(4, 7));

const checkMiddleSeat = function (seat) {
  //B and E are the middle seat
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the Middle Seat!");
  }
  else {
    console.log("You got the Window Or Aisle Seat");
  }

}

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Vineet"));
console.log(typeof new String("Vineet"));


console.log(airLine.toLowerCase());
console.log("new String ".toUpperCase());

//Fix captilization in Passenger name 

const passenger = "ViNeEt";

const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase()
  + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email;

const email = "hello@gmail.com";

const loginEmail = "Hello@Gmail.com";

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
const normalizEmail = loginEmail.toLowerCase().trim();

console.log(normalizEmail);
if (email === normalizEmail) {
  console.log("true");
}

const priceGB = "188,98€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All the passenger come to boarding door at 23, boarding door 23!";

console.log(announcement.replace(/door/g, "Gate"));

const newPlane = "A320neo";

console.log(newPlane.includes("A320"));
console.log(newPlane.includes("Boeing"));
console.log(newPlane.startsWith("A3"));

//split and join

console.log("a+very+nice+string".split("+"));
console.log("Vineet Singh".split(" "));

const [firstName, lastName] = "Vineet Singh".split(" ");

console.log(firstName, lastName);
const newName =
  ['Mr.', firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizName = function (name) {
  let names = name.split(" ");
  const nameUpper = [];

  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpper.join(" "));
}


capitalizName("my name is vineet singh")


// Padding 
const message = "Go to gate 23";
console.log(message.padStart(25, '+').padEnd(35, '+'));

console.log("vineet".padStart(23, "+").padEnd(36, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}


console.log(maskCreditCard(8428742));
console.log(maskCreditCard(4353637328823992));

//repeat
const message2 = "Bad Weathwer.... All the departures are delayed!!!\n"


console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in the line ${"✈".repeat(n)}`);
}

planesInLine(5);
planesInLine(6);


//Coding Challenge

const camelCase = function (text) {

}


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }

})

