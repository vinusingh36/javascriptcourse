'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



//console.log(account1);
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
     <div class="movements__row">
     <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
     
     <div class="movements__value">${mov} €</div>
   </div>
     `
    containerMovements.insertAdjacentHTML('afterbegin', html)

  })
}




const createUsernames = (accs) => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => { return name[0] })
      .join("");
  })

}
createUsernames(accounts);

const calcPrintBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  labelBalance.textContent = ` ${acc.balance} €`
}




const calcDisplaySummary = (acc) => {
  const incomes = acc.movements.filter((mov) => {
    return mov > 0;
  }).reduce((acc, mov) => {
    return acc + mov;
  }, 0)
  labelSumIn.textContent = ` ${incomes} € `;

  const out = acc.movements.filter((mov) => {
    return mov < 0;
  }).reduce((acc, mov) => {
    return acc + mov;
  }, 0)
  labelSumOut.textContent = `${Math.abs(out)} €`

  const interest = acc.movements.filter((mov) => {
    return mov > 0;
  }).map((deposit) => {
    return (deposit * acc.interestRate) / 100;
  }).filter((int, i, arr) => {
    console.log(arr);
    return int >= 1;
  })
    .reduce((acc, int) => {
      return Math.trunc(acc + int);
    }, 0)

  console.log(interest);
  labelSumInterest.textContent = `${interest} €`

}



//console.log(calcPrintBalance(accounts.movements));
//console.log(accounts);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter((mov, i) => {
  return mov > 0;
})
//console.log(deposit);

const withdrwal = movements.filter((mov, i) => {
  return mov < 0;
})
//console.log(withdrwal);


//Reduce
//console.log(movements);
const balance = movements.reduce((acc, cur, i, arr) => {
  // console.log(`iteration ${i} is ${acc} , ${cur}`);
  return acc + cur;
}, 0)

//console.log(balance);



let sum = 0;
for (let mov of movements) {
  sum += mov;
}
//console.log(sum);

const eurTOUSD = 1.1;

const totalDepositsUSD = movements.filter((mov) => {
  return mov > 0;
}).map((mov, i, arr) => {
  //console.log(arr);
  return mov * eurTOUSD;
}).reduce((acc, mov) => {
  return Math.trunc(acc + mov);
}, 0)
//console.log(totalDepositsUSD);

const updateUI = (acc) => {
  //Display Movements
  displayMovements(acc.movements);
  //Display balance
  calcPrintBalance(acc)
  //Display summary
  calcDisplaySummary(acc);
}

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  //Prevent form, from submitting
  e.preventDefault();

  currentAccount = accounts.find((acc) => {
    return acc.username === inputLoginUsername.value;
  })
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome Message
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(" ")[0]}`



    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);

  }
})


btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find((acc) => {
    return acc.username === inputTransferTo.value
  })

  inputTransferAmount.value = inputTransferTo.value = "";

  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);

  }

})

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some((mov) => {
    return mov >= amount * 0.1;
  })) {
    //add the movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();


  if (inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex((acc) => {
      return acc.username === currentAccount.username;
    })
    console.log("........inside here");
    console.log(index);
    accounts.splice(index, 1)
    console.log(accounts);
    // let main = document.getElementsByTagName("main");
    // document.main.innerHTML = '<div style="margin: auto;text-align: center;width:50%;padding :10px ; border: 3px solid green;font-size: 2rem;">Your Account has been Deleted Successfully!!</div>'
    containerApp.style.opacity = 0;
    //updateUI(currentAccount)

  }
  else {
    alert("Wrong Credentials!")
  }
  inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted
})

// let deposits = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     deposits.push(mov);
//   }
// }
// console.log(deposits);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
 
//slice method
arr.slice(2);
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
 
console.log(arr.slice());
 
Splice
console.log(arr.splice(2));
 
 
console.log(arr.splice(-1));
console.log(arr);
 
reverse
 
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
 
//concat
 
const letters = arr.concat(arr2);
 
console.log(letters);
//console.log([...arr, ...arr2]);
 
console.log(letters.join(' - '));
 
const arr1 = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(1));
 
//old method
console.log(arr1[arr1.length - 1]);
console.log(arr1.slice(-1)[0]);
 
//new Method
console.log(arr1.at(-1));
 
 
 
//For Each Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}. Amount is deposited ${Math.abs(movement)}`);
  }
  else {
    console.log(`${i + 1}. Amount is Withdrwan ${Math.abs(movement)}`);
  }
}
 
console.log(`------forEach----------`);
 
 
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
 
    console.log(`${index + 1} : Amount is deposited ${Math.abs(movement)}`);
  }
  else {
    console.log(`${index + 1} : Amount is Withdrwan ${Math.abs(movement)} `);
  }
})
 
 
 
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
 
currencies.forEach(function (value, key, map) {
  console.log(`${value} : ${key}`);
})
 
const currenciesUnique = new Set(
  ['EUR', 'GBP', 'USD', 'EUR']
)
 
currenciesUnique.forEach(function (value, key, set) {
  console.log(`${value} : ${key}`);
  
})
 
// console.log(currenciesUnique);
 
 
 
 
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
 
 
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
 
  //"Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶"
  dogs.forEach(function (ele, i) {
    if (ele >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${ele} years old`);
    }
    else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  })
 
}
 
//checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
 


const eurToUsd = 1.1;



// const movementsUSD = movements.map(function (mov) {
//return Math.trunc(mov * eurToUsd) 

// })
const movementsUSD = movements.map(mov => {
  return Math.trunc(mov * eurToUsd);
})

//const movementsUSD = movements.map(mov => Math.trunc(mov * eurToUsd));
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(Math.trunc(mov * eurToUsd))
// }
// console.log(movementsUSDfor);
//console.log(movementsUSD);

let movementsDescriptions = movements.map((mov, i) => {


  return `${i + 1}. Amount is ${mov > 0 ? "Deposited" : "Withdrwan"} ${Math.abs(mov)}`

  // if (mov > 0) {
  //   //console.log(`${i + 1}. Amount is deposited ${Math.abs(mov)}`);
  //   return `${i + 1}. Amount is deposited ${Math.abs(mov)}`
  // }
  // else {
  //   //console.log(`${i + 1}. Amount is Withdrwan ${Math.abs(mov)}`);
  //   return `${i + 1}. Amount is Withdrwan ${Math.abs(mov)}`
  // }
})

//console.log(movementsDescriptions);

//Get max vlaue of array
const max = movements.reduce((acc, cur) => {

  if (acc > cur) {
    return acc;
  }
  else {
    return cur;
  }
}, movements[0])

console.log(max);




const calcAverageHumanAge1 = (ages) => {
  const humanAges = ages.map((age) => {
    return age <= 2 ? age * 2 : 16 + age * 4
  })
  const adults = humanAges.filter((age) => {
    return age >= 18
  })
  console.log(humanAges);
  console.log(adults);
  const avg = adults.reduce((acc, age) => {
    return acc + age / adults.length
  }, 0)
  console.log(avg);
}

calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4])



const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((age) => {
    return age <= 2 ? age * 2 : 16 + age * 4
  })

    .filter((age) => {

      return age >= 18
    })
    .reduce((acc, age, i, arr) => {
      return acc + (age / arr.length)
    }, 0)

  console.log(humanAges);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])



const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

const findMethod = movement.find((mov) => {
  return mov < 0;
})

console.log(findMethod);

console.log(accounts);
const account = accounts.find((acc) => {
  return acc.owner === "Jessica Davis";
})

console.log(account);




const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movement.includes(200));

let anyDeposits = movement.some((mov) => {
  return mov >= 1500;
})

console.log(anyDeposits);
console.log(account4.movements.every(mov => mov > 0));



const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[1, [2, 3], 3], [4, [1, 2, 3]], 5, 6, 7, 9];

console.log(arrDeep.flat(2));

// const accountMovement = accounts.map(acc => acc.movements);
// let allMovement = accountMovement.flat();
// console.log(accountMovement.flat(1));

// const overallBalance = allMovement.reduce((acc, cur) => {
//   return acc + cur;
// }, 0)

const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, cur) => {
  return acc + cur;
}, 0);

const overallBalance1 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => {
  return acc + mov;
})


console.log(overallBalance1);

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //Mutate original Array also

console.log(movements);
//console.log(movements.sort());

// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// })

movements.sort((a, b) => a - b)
console.log(movements);


let arr = [1, 2, 3, 4, 5, 6, 7]
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Araay.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => {
  return i + 1;
})

console.log(z);



labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(document.querySelectorAll(".movements__value"));

  console.log(movementUI.map(ele => Number(ele.textContent.replace('€', ''))));
})



const bankDepositSum = accounts.flatMap((acc) => {
  return acc.movements;
})
  .filter(mov => mov > 0)
// .reduce((acc, cur) => {
//   return acc + cur;
// }, 0)

//console.log(bankDepositSum);

const numDeposits1000 = accounts.flatMap(acc => acc.movements)
  .reduce((count, cur) => {
    return cur >= 1000 ? count + 1 : count;
  }, 0)

console.log(numDeposits1000);


const { deposits, withdrwals } = accounts.flatMap((acc) => {
  return acc.movements;
}).reduce((sums, cur) => {
  sums[cur > 0 ? "deposits" : "withdrwals"] += cur;
  return sums;
}, { deposits: 0, withdrwals: 0 })

console.log(deposits, withdrwals);

let convertTitleCase = (title) => {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
  return titleCase;
}

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title"));
console.log(convertTitleCase("this is another title with long example"));


*/


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

//#1

dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  // console.log(dog);
})

console.log(dogs);


// const sarahDog = dogs.filter((sDog) => {
//   return sDog.owners;
// })

// console.log(sarahDog);
// let dogEatTooMuch = [];
// let dogEatTooLittle = [];

// let eatArray = (dogs) => {
//   dogs.forEach((dog) => {
//     //console.log(dog.owners);
//     // console.log(dog.curFood, dog.recommendedFood);
//     if (dog.curFood > dog.recommendedFood) {

//       dogEatTooMuch.push(dog.owners)
//     }
//     else {

//       dogEatTooLittle.push(dog.owners)
//     }
//   })
// }

// eatArray(dogs);


const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

console.log(ownersEatTooLittle);

// let ownersEatTooMuch = dogEatTooMuch.flat();
// let ownersEatTooLittle = dogEatTooLittle.flat();
//console.log(ownersEatTooMuch, ownersEatTooLittle);

console.log(`${ownersEatTooMuch[0]}'s and ${ownersEatTooMuch[1]}'s and ${ownersEatTooMuch[2]}'s dogs eat too much!`);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat to much!`);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat to little!`);

console.log(`${ownersEatTooLittle[0]}'s and ${ownersEatTooLittle[1]}'s and ${ownersEatTooLittle[2]}'s dogs eat to Little!`);



let sarahDog = (dogs) => {
  dogs.forEach((dog) => {
    //console.log(dog.owners);
    if (dog.owners.includes("Sarah")) {
      if (dog.curFood > dog.recommendedFood) {
        console.log(`Eating to Much!!! `);
      }
      else {
        console.log("Eating too little!");
      }
    }
  })
}

sarahDog(dogs);
// let ans5 = false;

// dogs.forEach((dog) => {
//   if (dog.curFood === dog.recommendedFood) {
//     ans5 = true;
//   }
// })
// console.log(ans5);

//5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const checkEatingOkay = dog => dog.curFood > dog.recommendedFood * .9 && dog.curFood < dog.recommendedFood * 1.1

//6

console.log(dogs.some(checkEatingOkay));

//7.
console.log(dogs.filter(checkEatingOkay));


//8
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSorted);


