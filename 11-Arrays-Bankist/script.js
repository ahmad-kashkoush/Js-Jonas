'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Ahmed Kashkoush',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Khalid Tawfeek',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Ahmed Khalid Atya',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Mohammed Shehab',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.great');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance-value');
const labelSumIn = document.querySelector('.summary-value-in');
const labelSumOut = document.querySelector('.summary-value-out');
const labelSumInterest = document.querySelector('.summary-value-interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
// ✅
const btnLogin = document.querySelector('.login-btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
// ✅
const inputLoginUsername = document.querySelector('.input-login-user');
const inputLoginPin = document.querySelector('.input-login-pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// My Code 
// ////////////////////////
const isDeposite = mov => mov > 0;
// All functions first
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort() : movements;
  movs.forEach(function (mov, i) {
    // Clear Movements container
    const type = mov > 0 ? "deposite" : "withdraw";
    const htmlElement = `   <div class="movement-row">
    <div class="movement-type movement-type--${type}">${i + 1} ${type}</div>
    <div class="movement-date">12/03/2020</div>
    <div class="movement-value">${mov} €</div>
  </div>`
    containerMovements.insertAdjacentHTML('afterbegin', htmlElement);
  });
}
displayMovements(account1.movements);
// ////////////////////////////
const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner.toLocaleLowerCase().split(' ').map((word) => word[0]).join('');
    console.log(account.userName);
  });
}
createUserNames(accounts);
// //////////////////
const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = '';
  labelBalance.textContent = `${balance} €`;
  account.balance = balance;
}

// calcDisplayBalance(account1);
// Events and buttons
// const func = function () { console.log(checkLogin()[0]); }
// btnLogin.addEventListener('click', login);


///////////////////////////////😢
const calcSummary = function (acc) {
  const income = acc.movements
    .filter(isDeposite)
    .reduce(((acc, mov) => mov + acc), 0);

  labelSumIn.textContent = `${income}€`;
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce(((acc, mov) => mov + acc), 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  const interestRate = acc.interestRate;
  const interest = acc.movements
    .filter(isDeposite)
    .map((mov) => mov * interestRate / 100)
    .filter((mov) => mov >= 1)
    .reduce(((acc, mov, i, arr) => acc + mov), 0);

  labelSumInterest.textContent = `${interest}€`;

}

// Update User Interface
const UpdateUI = function (acc) {
  if (acc) {
    displayMovements(acc.movements);
    calcSummary(acc);
    calcDisplayBalance(acc);
  }
}
const logOut = function () {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = `Let's Get Started`;

}


// Events
let currAccount;// so that I can Use it for all events
btnLogin.addEventListener('click', function (e) {
  // prevent page reload+ adding enter keydown
  e.preventDefault();
  // get data from fields
  const inputUserName = inputLoginUsername.value;
  const inputPin = Number(inputLoginPin.value);
  // check login Name;
  const account = accounts.find((acc) => acc.userName === inputUserName);
  // if (account && account.pin === inputPin) { My way
  if (account?.pin === inputPin) { // optional chaining way
    currAccount = account;
    UpdateUI(account);
    labelWelcome.textContent = `Hello,  ${account.owner}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

// Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const val = Number(inputTransferAmount.value);
  const acc = accounts.find((acc) => acc.userName === inputTransferTo.value);
  if (acc !== undefined && acc !== currAccount && val > 0 && currAccount.balance >= val) {
    acc.movements.push(val);
    currAccount.movements.push(-val);
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
    UpdateUI(currAccount);

  }
})

// Closing an account **Just Deleting it**
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const userName = inputCloseUsername.value;
  const pin = inputClosePin.value;
  let i = accounts.findIndex((acc) => (acc.userName === userName && acc.pin === Number(pin)));
  // console.log(i);
  if (i != -1) {
    if (currAccount === accounts[i]) logOut(currAccount);
    accounts.splice(i, 1);
    inputClosePin.value = inputCloseUsername.value = '';
    inputClosePin.blur();
    UpdateUI(currAccount);
    // accounts.forEach((acc) => { console.log(acc.userName); })
  }

})


// Requesting A Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const request = Number(inputLoanAmount.value);
  const yes = currAccount.movements.some((deposite) => deposite > request * .10);
  if (yes && request > 0) {
    currAccount.movements.push(request);
    UpdateUI(currAccount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }

})
// sorting Arrays
let toSort = 1;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currAccount.movements, toSort);
  toSort = 1 - toSort;

})

// filter
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposites = movements.filter(mov=>mov>0);
// const withdrawl = movements.filter(mov => mov < 0);
// console.log(deposites, withdrawl);
// // reduce 
// const depositesSum = deposites.reduce((acc, cur) => acc + cur);
// const withdrawlSum = withdrawl.reduce((acc = 0, cur) => acc + cur);

// const MaximumValueInMovements = movements.reduce(((acc, mov) => Math.max(acc, mov)), movements[0]);
// console.log(depositesSum, withdrawlSum, MaximumValueInMovements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (cur, key, mp) {
//   console.log(cur, key);
// })

// for (const movement of movements) {
//   console.log(`you ${movement >= 0 ? 'deposited' : 'widthdraw'} ${Math.abs(movement)}$`);
// }
// movements.forEach((mov, i, arr) => {
//   console.log(`movement ${i + 1}: ${mov}`);

// });
/////////////////////////////////////////////////


// splice(beginIndex, numberOfElements); ✅
// let arr = [1, 2, 3, 4, 5];
// arr = arr.concat([6, 7, 8, 9, 10]);
// arr.reverse();
// console.log(arr);
// console.log(arr.at(-1));
