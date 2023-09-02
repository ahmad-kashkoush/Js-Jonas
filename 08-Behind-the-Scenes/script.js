'use strict';


// function calcAge(birthYear) {
//     // global scope canbe called inside function scope
//     // console.log(myName);
//     const hello = false;
//     if (hello === false) {
//         function printAge() { console.log('Declaration'); }
//         const printAgeExpression = function () { console.log('Expression'); }
//     }
//     // printAge(); // Declaration is block scoped so it must be wrong
//     // printAgeExpression();// same
//     return birthYear;
// }
function changeName() { myName = 'ahmed'; }
let myName = 'ali';
changeName();
console.log(myName);
