'use strict';

// // # 10-Functions

//  ## Closures

// A function has access to variables, in which 
// it's execution context was created
// Closure has higher priority than scope chain for the same variable

// ## Coding Challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red'
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  })
})();

















// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer(str) {
//         const displayQuestion = [str, this.question, this.options.join('\n')].join('\n');
//         // console.log(displayQuestion);
//         const input = Number(prompt(displayQuestion));
//         this.checkAnswer(input);
//         this.answers[input]++;
//         this.displayResults('string');
//     },
//     checkAnswer(input) {
//         if (input >= 0 && input < this.answers.length)
//             return input;
//         return this.registerNewAnswer('InValid Number');
//     },
//     displayResults(type = 'array') {
//         if (type === 'array')
//             console.log(this.answers);
//         else console.log(`Poll results are ${this.answers.join(', ')}`);
//     }

// }



// document.querySelector('.poll')
//     .addEventListener('click', poll.registerNewAnswer.bind(poll))

// const displayArr = poll.displayResults;

// displayArr.call({ answers: [5, 2, 3] });
// displayArr.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');









































// //  ## Apply and call and bindMethod 🛩️
// const person1 = {
//     firstName: 'Ahmed',
//     secondName: 'Kashkoush',
//     printFullName(str, age) {
//         console.log(`${this.firstName} ${this.secondName} age:${age}, str:${str}`);
//     }
// }
// person1.printFullName();
// const person2 = {
//     firstName: 'Khalid',
//     secondName: 'Rabee'
// }
// // I want to use printFullName on person2 without coping it to person 2
// // How 🤔
// // Solution ⭐⭐⭐
// person1.printFullName.call(person2, 'hi', 27);// Khalid Rabee age:27, str:hi
// person1.printFullName.apply(person2, ['hi', 27]);// apply accept array arguments 
// // only works if with same property names
// // 🔴🔴 I've manipulated this keyword 😎😎

// // bind
// const print = person1.printFullName.bind(person2);// this arguments will never change
// print('hello', 50);// will use the preset arguments

// //  bind is important for setting this without calling the function
// // [Explanation]🌃
// const cairoAirPort = {};
// cairoAirPort.planes = 50;// planes in the airport;
// // I want to make function that buy new Plan 
// cairoAirPort.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }

// // I want to call function when click on the button
// document.querySelector('.buy')
//     .addEventListener("click", cairoAirPort.buyPlane.bind(cairoAirPort));

// // without using the bind method ==> will use the button this, not object this
// // why didn't use call,  or apply
// // --> will call the function and I need callback
// // ⭐⭐⭐ use bind method to set this keyword and without calling the funciton











////////////////////

// const addTaxRate = (rate) => (value) => value + value * rate;
// const addVat = addTaxRate(.23);
// console.log(addVat(100));









// ## Function return function 🙃
// const great = function (greating) {
//     return function (name) { console.log(`${greating}, ${name}`); }
// }
// // ! This is important for function programming paradigm
// great('Hey')('khalid');
// // great('Hey') is the returned function
// // you can pass to the returned funciton the name
// // As an arrow
// const greatArrow = (greating) => (name) => console.log(`${greating}, ${name}`);






















// // ## Accepting a callback function

// const oneWord = function (str) {
// //     return str.replaceAll(' ', '').toLowerCase();
// // }
// // const firstUpper = function (str) {
// //     const [first, ...other] = str.split(' ');
// //     return [first.toUpperCase(), ...other].join(' ');
// // }

// // Notice that transform is a generic function [interface]
// // [reflect] on factory Design Pattern 🤔

// const transform = function (str, func) {// higher Order Function
//     console.log(func(str));
//     console.log(func.name);
// }
// transform('ahmed Kashkoush', oneWord);
// transform('ahmed Kashkoush', firstUpper);

// ## First Class vs Higher order function 
// #### Just a theory video return to slides
// Higher Order function is a function which:
//1.   I can pass function as an argument in as a callback
//2.   I can return function From
// 3. Care More about what not the how 
// 4. Allow us to create interfaces























//  ## passing Reference vs value type
//  If you pass primitive then value is copied to different variable
// If you pass object then reference to the value is copied 
// const myName = 'Ahmed';
// const person = {
//     myName: 'khalid',
//     myArr: [1, 2, 3, 5, 16]
// }
// const changeNames = function (val, ref) {
//     val = 'Ismail';
//     ref.myName = 'ali';
//     ref.myArr = [20, 40];
// }
// console.log(myName, person.myName, ...person.myArr);// Ahmed Khalid
// // changeNames(myName, person);
// // console.log(myName, person.myName);// Ahmed Ali
// // object value changed
// // To avoid object value changing ⭐⭐
// changeNames(myName, { ...person })
// console.log(myName, person.myName, ...person.myArr);


// //  ## Default Parameters

// //  If You put default value it will override undefined type

// const defaultParam = function (a = 20, b = 15, c = 2 * b) {
//     console.log(a, b, c);
// }
// defaultParam(5, undefined, 15)// 5, 15
// defaultParam(undefined, undefined, undefined)
// defaultParam(5, 15, undefined)// 5, 15, 2*b=30