'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Ahmed Kashkoush',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Khalid Tawfeek',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Ahmed Khalid Atya',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Mohammed Shehab',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];


// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-09-18T21:31:17.178Z',
    '2023-09-23T07:42:02.383Z',
    '2023-09-28T09:15:04.904Z',
    '2023-09-14T10:17:24.185Z',
    '2023-09-08T14:11:59.604Z',
    '2023-09-27T17:01:17.194Z',
    '2023-09-11T23:36:17.929Z',
    '2023-09-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Ahmed Kashkoush',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-06-25T18:49:59.371Z',
    '2023-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
// in minutes
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
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? acc.movements.slice().sort() : acc.movements;
  movs.forEach(function (mov, i) {
    // Clear Movements container

    const dte = displayDate(new Date(acc.movementsDates[i]), acc.locale);

    const movFormated = formatCurrency(mov, acc.locale, acc.currency);
    const type = mov > 0 ? "deposite" : "withdraw";
    const htmlElement = `   <div class="movement-row">
    <div class="movement-type movement-type--${type}">${i + 1} ${type}</div>
    <div class="movement-date">${dte}</div>
    <div class="movement-value">${movFormated} </div>
  </div>`
    containerMovements.insertAdjacentHTML('afterbegin', htmlElement);
  });
}
// displayMovements(account1.movements);
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
  const formattedBalance = formatCurrency(balance, account.locale, account.currency);
  labelBalance.textContent = '';
  labelBalance.textContent = `${formattedBalance} `;
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

  labelSumIn.textContent = `${formatCurrency(income, acc.locale, acc.currency)}`;
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce(((acc, mov) => mov + acc), 0);
  labelSumOut.textContent = `${formatCurrency(Math.abs(out), acc.locale, acc.currency)}`;
  const interestRate = acc.interestRate;
  const interest = acc.movements
    .filter(isDeposite)
    .map((mov) => mov * interestRate / 100)
    .filter((mov) => mov >= 1)
    .reduce(((acc, mov, i, arr) => acc + mov), 0);

  labelSumInterest.textContent = `${formatCurrency(interest, acc.locale, acc.currency)}`;

}

// Update User Interface
const UpdateUI = function (acc) {
  if (acc) {
    displayMovements(acc);
    calcSummary(acc);
    calcDisplayBalance(acc);
  }
}
const logOut = function () {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = `Let's Get Started`;

}
//  Some Date Functions ⭐⭐⭐⭐⭐
const dateFormat = function (dte, locale, displayTime = false) {

  // const day = `${dte.getDate()}`.padStart(2, '0');
  // const month = `${dte.getMonth()}`.padStart(2, '0');
  // const year = `${dte.getFullYear()}`.padStart(2, '0');
  // const hours = `${dte.getHours()}`.padStart(2, '0');
  // const minutes = `${dte.getMinutes()}`.padStart(2, '0');
  // const format = `${[day, month, year].join('/')}`;
  // if (displayTime) return [format, `${hours}:${minutes}`].join(', ');

  const formatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    // weekday: 'short',
  }
  if (displayTime) {
    formatOptions.hour = 'numeric'
    formatOptions.minute = 'numeric'
  }
  return new Intl.DateTimeFormat(locale, formatOptions).format(dte);
}
// Add Function return number of days between to days
const calcDaysPassed = (date1, date2) => {
  return Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
}
const displayDate = function (date1, locale) {
  const numberOfDays = calcDaysPassed(Date.now(), date1);
  if (numberOfDays === 0) return 'Today';
  else if (numberOfDays === 1) return "Yesterday";
  else if (numberOfDays < 7) return `${numberOfDays} days ago`;
  return dateFormat(date1, locale);
}
// console.log(calcDaysPassed(
//   new Date(2023, 10, 5)
//   , new Date(2023, 10, 9)));

// Format Currencies Function 💸💸💸💸
const formatCurrency = (num, locale, curr) => {// locale and currency
  const options = {
    style: 'currency',
    currency: curr
  }
  return new Intl.NumberFormat(locale, options).format(num);
}
// Events
let currAccount;// so that I can Use it for all events

// Fake User
// currAccount = account1;
// containerApp.style.opacity = 100;
// UpdateUI(currAccount);


// Update Date of currenct Balance
// const now = new Date();
// labelDate.textContent = dateFormat(now, currAccount.locale, true);

// ! Configure Date using internationlization 📅
// You specify the language
// and format options e.g. sun, Sunday

//  Create a Timer 🏆🏆🏆🏆🏆🏆
const sessionTime = 10 * 60;
let timerInterval;
const timer = function () {// value in minutes
  const tick = function () {
    value = Math.max(value, 0);
    if (value === 0) {
      clearInterval(timer);
      logOut();
    }
    const mins = Math.trunc(value / 60);
    const secs = Math.trunc(value % 60);
    labelTimer.textContent =
      `${`${mins}`.padStart(2, 0)}:${`${secs}`.padStart(2, 0)}`;
    value--;
  }
  let value = sessionTime;
  if (timerInterval) clearInterval(timerInterval);
  tick();
  timerInterval = setInterval(tick, 1000);


}
// timer(.05);
// setTimeout(() => { timer(30) }, 5000);






















// timer();
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

    timer();
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
    timer();
    setTimeout(() => {
      acc.movements.push(val);
      currAccount.movements.push(-val);
      // 
      currAccount.movementsDates.push(new Date().toISOString());
      acc.movementsDates.push(new Date().toISOString());
      UpdateUI(currAccount);
    }, 2500)
    // 
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();


  }
})

// Closing an account **Just Deleting it**
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const userName = inputCloseUsername.value;
  const pin = inputClosePin.value;
  let i = accounts.findIndex((acc) => (acc.userName === userName && acc.pin === Number(pin)));
  // console.log(i);
  timer();
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
    timer();
    currAccount.movements.push(request);
    currAccount.movementsDates.push(new Date().toISOString());
    setTimeout(() => {
      UpdateUI(currAccount);
    }, 2500);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }

})
// sorting Arrays
let toSort = 1;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currAccount, toSort);
  toSort = 1 - toSort;

});