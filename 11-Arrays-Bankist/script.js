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
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    // Clear Movements container
    const type = mov > 0 ? "withdraw" : "deposite";
    const htmlElement = `   <div class="movement-row">
    <div class="movement-type movement-type--${type}">${i + 1} ${type}</div>
    <div class="movement-date">12/03/2020</div>
    <div class="movement-value">${mov} €</div>
  </div>`
    containerMovements.insertAdjacentHTML('afterbegin', htmlElement);
  });
}

/*
for each account
1. check first character of each word in lower case
2. check  pin
3. if false just do nothing 
4.  if true
  4.1 clear inputs
  4.2 display
  4.3 change great message

*/
// functions
// 

const login = function () {
  // let obj;
  // let ok = false;
  const userName = inputLoginUsername.value.toLowerCase();
  const pin = Number(inputLoginPin.value);
  accounts.forEach(function (account) {
    let usr = '';
    account.owner
      .split(' ')
      .forEach(function (word) {
        usr += word[0].toLowerCase();
      });
    if (usr === userName && account.pin === pin) {
      inputLoginUsername.value = '';
      inputLoginPin.value = '';
      displayMovements(account.movements);
      labelWelcome.textContent = `Good Afternoon, ${account.owner.slice(0, account.owner.indexOf(' '))}`;
      containerApp.style.opacity = 100;
    }

  });
}

// Events and buttons
// const func = function () { console.log(checkLogin()[0]); }
// btnLogin.addEventListener('click', login);
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  login();
});





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
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   console.log(`you ${movement >= 0 ? 'deposited' : 'widthdraw'} ${Math.abs(movement)}$`);
// }
// movements.forEach((mov, i, arr) => {
//   console.log(`movement ${i + 1}: ${mov}`);

// });
/////////////////////////////////////////////////


// splice(beginIndex, numberOfElements);
// let arr = [1, 2, 3, 4, 5];
// arr = arr.concat([6, 7, 8, 9, 10]);
// arr.reverse();
// console.log(arr);
// console.log(arr.at(-1));
