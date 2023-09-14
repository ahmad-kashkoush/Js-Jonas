'use strict';

// ## Coding Challenge 4
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1.✅ Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. ✅Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. ✅Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. ✅Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5.✅ Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6.✅ Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. ✅ Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8.✅ Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
// 1. 
dogs.forEach(function(dog){
  dog.recommendedFood=(dog.weight)**.75*28;
  console.log(dog);
});
// 2. 
const dogObj=dogs
.find((dog)=>dog.owners.includes('Sarah'));
console.log(dogObj?.curFood>dogObj?.recommendedFood? 'Too Much':'Too Little');
// 3. 
const isTooLittle=dog=>dog.curFood<dog.recommendedFood;
const isTooMuch=dog=>dog.curFood>dog.recommendedFood;
const ownersEatTooLittle=dogs
      .filter(isTooLittle)
      .flatMap(dog=>dog.owners);
      console.log(ownersEatTooLittle);
const ownersEatTooMuch=dogs
.filter(isTooMuch)
.flatMap(dog=>dog.owners);
console.log(ownersEatTooMuch);
//4. 
console.log(`${ownersEatTooLittle.join(' and ')} is Eating too Little`);
console.log(`${ownersEatTooMuch.join(' and ')} is Eating too Much`);
//5.
const exact=dogs.some((dog)=>dog.curFood===dog.recommendedFood);
console.log(exact);
// 6.
const okayAmount=(a, b)=>b<=a+a*.1 && b>=a-a*.1;
const withInRange=dogs.some(dog=>okayAmount(dog.recommendedFood, dog.curFood))
console.log(withInRange);
// 7.
const okayArray=dogs.filter(dog=>okayAmount(dog.recommendedFood, dog.curFood));
console.log(okayArray);
// 8.
const dogsCpy=dogs.slice().sort((a, b)=>a.recommendedFood-b.recommendedFood);
console.log(dogsCpy);
console.log(dogs);
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
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

// // Elements
// const labelWelcome = document.querySelector('.great');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance-value');
// const labelSumIn = document.querySelector('.summary-value-in');
// const labelSumOut = document.querySelector('.summary-value-out');
// const labelSumInterest = document.querySelector('.summary-value-interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');
// // ✅
// const btnLogin = document.querySelector('.login-btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');
// // ✅
// const inputLoginUsername = document.querySelector('.input-login-user');
// const inputLoginPin = document.querySelector('.input-login-pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');



// // My Code 
// // ////////////////////////
// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';
//   movements.forEach(function (mov, i) {
//     // Clear Movements container
//     const type = mov > 0 ? "withdraw" : "deposite";
//     const htmlElement = `   <div class="movement-row">
//     <div class="movement-type movement-type--${type}">${i + 1} ${type}</div>
//     <div class="movement-date">12/03/2020</div>
//     <div class="movement-value">${mov} €</div>
//   </div>`
//     containerMovements.insertAdjacentHTML('afterbegin', htmlElement);
//   });
// }
// displayMovements(account1.movements);
// // ////////////////////////////
// const createUserNames = function () {
//   accounts.forEach(function (account) {
//     account.userName = account.owner.toLocaleLowerCase().split(' ').map((word) => word[0]).join('');
//     // console.log(account.userName);
//   });
// }
// createUserNames();
// // //////////////////
// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, cur) => acc + cur);
//   labelBalance.textContent = '';
//   labelBalance.textContent = `${balance} €`
// }
// calcDisplayBalance(account1.movements);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // currencies.forEach(function (cur, key, mp) {
// //     console.log(cur, key);
// //   })
  
// //   for (const movement of movements) {
// //       console.log(`you ${movement >= 0 ? 'deposited' : 'widthdraw'} ${Math.abs(movement)}$`);
// //     }
// //     movements.forEach((mov, i, arr) => {
// //         console.log(`movement ${i + 1}: ${mov}`);
      
// //       });
//       /////////////////////////////////////////////////

// const totalDeposites=accounts
//   .flatMap((acc)=>acc.movements)
//   .filter(mv=>mv>0)
//   .reduce((acc, cur)=>acc+cur, 0)
  
  
  

// const depositesGreater=accounts
// .flatMap((acc)=>acc.movements)
// .filter(mv=>mv>=1000)
// .length

// console.log(depositesGreater);




// const objj=accounts
// .flatMap((acc)=>acc.movements)
// .reduce((sum, cur)=>{
//   cur>0?sum.depo+=cur:sum.with-=cur;
//   return sum;
// },{with:0, depo:0})
// console.log(objj.with, objj.depo);


// // 4. title case
// const convertToTitleCase=function(title){
//   const exception=['a', 'an', 
//   'but', 'or', 'the', 'on', 'in', 'with'];
//   const capitalize=(word)=>word.
//   replace(word[0], word[0].toUpperCase());
//   const converted=title
//     .toLocaleLowerCase() 
//     .split(' ')
//     .map((word)=>{
//       if(!exception.includes(word))
//       return capitalize(word);
//       return word;
//     }).join(' ');

//     return converted;
// }

// console.log(convertToTitleCase('this is what I love a piece of cake'));







//       //   const euroToUsd = 1.1;
//     //  const depositeSum = movements
//     //  .filter((mov)=>mov>0)
//     //  .map((mov)=>mov*euroToUsd)
//     //  .reduce((acc, mov)=>mov+acc);
//     //  console.log(depositeSum); 
      
//       // splice(beginIndex, numberOfElements);
//       // let arr = [1, 2, 3, 4, 5];
//       // arr = arr.concat([6, 7, 8, 9, 10]);
//       // arr.reverse();
//       // console.log(arr);
//       // console.log(arr.at(-1));
     
      


























      
      
//       // # 11-Working with Arrays
//       // ## code challenge 2
//         /* 
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1.✅ Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2.✅ Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. ✅Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4.✅ Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */
// // const calcAverageHumanAge=function(ages){
// //   const humanAges=ages.map(function(age){
// //     if(age<=2)return age*2;
// //     return 16+age*4;
// //   });
// //   const adults=humanAges.filter((age)=>age>=18);
// //   return adults.reduce(((acc, cur,i,arr)=>acc+cur/arr.length),0);


// // }
// // // console.log(calcAverageHumanAge( [5, 2, 4, 1, 15, 8, 3]));
// // console.log(calcAverageHumanAge(  [16, 6, 10, 5, 6, 1, 4]));

// // ## Coding Challege 3
 


// // const calcAverageHumanAge=function(ages){

// //     return ages
// //   .map((age)=>(age<=2?age*2:16+age*4))
// //   .filter((age)=>age>=18)
// //   .reduce(((acc, cur, i, arr)=>acc+cur/arr.length), 0)


// // }


// // console.log(calcAverageHumanAge( [5, 2, 4, 1, 15, 8, 3]));
// // console.log(calcAverageHumanAge(  [16, 6, 10, 5, 6, 1, 4]));



// // ## flat, flatmap
// // What Do I want, I need sum all array movements
// // to do so I need to collect them in one big array
// // and then sum them
// // to so I can use flat(nestingDepth)
// // flatmap=map()+flat(1); in the same order

// // const totalMovements=accounts
// //     .map(acc=>acc.movements)
// //     .flat(1)
// //     .reduce((acc, cur)=>acc+cur, 0);
// //     console.log(totalMovements);

// // ## filling arrays
//  // array.fill(value, from, to)
// // const x=new Array(7).fill(1, 3);
// // // console.log(x);
// // // array.from({length}, callback)
// // const y=Array.from({length:7}, ()=>1);
// // console.log(y);

// //  If you don't use an argument put _
// // ⭐[Very Important] querySelectorAll returns a nodeList , that's why you can's use map on it









































//       // //  ## Map, filter and reduce
      
//       // const moneyInEuros = [200, 450, -400, 3000, -650, -130, 70, 1300];
//       // // Convert movements array from euros to dollars;
      
//       // const euroToUsd = 1.1;
//       // const moneyInUsd = movements.map((item)=>Math.trunc(item*euroToUsd));
//       // console.log(moneyInEuros, moneyInUsd);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
//       // // ## coding challenge 1
//       // /* 
//       // Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
      
//       // Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
      
//       // 1.✅ Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
//       // 2. Create an array with both Julia's (corrected) and Kate's data
//       // 3. For each remaining dog, log to the console whether it's an adult
//       //  ("Dog number 1 is an adult, and is 5 years old") or a 
//       //  puppy ("Dog number 2 is still a puppy 🐶")
//       // 4. Run the function for both test datasets
      
//       // HINT: Use tools from all lectures in this section so far 😉
      
//       // TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//       // TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
      
//       // GOOD LUCK 
//       // */
      
//       // const checkDogs = function (dogsJulia, dogsKate) {
//         //   // const dogsJuliaCorrected = dogsJulia.slice(1, -2);
//         //   console.log(...dogsJuliaCorrected);
//         //   const dogs = dogsJuliaCorrected.concat(dogsJulia);
//         //   // console.log(...arr2);
//         //   dogs.forEach(function (dog, i) {
// //     console.log(
//   //       `Dog number ${i} ${dog >= 3 ? `is and adult, and is ${dog} years old`
//   //         : `is still a puppy 🐶`
//   //       }`
//   //     );
//   //   })
  
//   // }
//   // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
//   // console.log('〰️〰️〰️〰️〰️〰️Test 2 〰️〰️〰️〰️〰️〰️〰️');
//   // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
  