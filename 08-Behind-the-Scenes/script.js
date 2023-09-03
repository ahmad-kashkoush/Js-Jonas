'use strict';


// // function calcAge(birthYear) {
// //     // global scope canbe called inside function scope
// //     // console.log(myName);
// //     const hello = false;
// //     if (hello === false) {
// //         function printAge() { console.log('Declaration'); }
// //         const printAgeExpression = function () { console.log('Expression'); }
// //     }
// //     // printAge(); // Declaration is block scoped so it must be wrong
// //     // printAgeExpression();// same
// //     return birthYear;
// // }
// // function changeName() { myName = 'ahmed'; }
// // let myName = 'ali';
// // changeName();
// // console.log(myName);

// // ! arrow funciton and this keyword
// // var firstName = 'ahmed';
// // var firstName = 'ahmed';
// const parent = {
//     firstName: "parent",
//     great: function () {
//         console.log(this);
//         const greatArrow = () => {
//             console.log(this);
//             // console.log(`Hello ${this.firstName}`);
//         }
//         greatArrow();
//     },


// }
// parent.great();
// // parent.greatArrow();
// // parent.great();
// // parent.child.greatArrow();
function cpy(source, target) {
    const arrOfKeys = Object.keys(source);
    for (let i = 0; i < arrOfKeys.length; i++)
        target[`${arrOfKeys[0]}`] = source[`${arrOfKeys[i]}`];
}

const jessica = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 27
}
const marriedJessica = {};
