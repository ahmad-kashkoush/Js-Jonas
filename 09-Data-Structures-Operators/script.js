// 'use strict'
// // Data needed for a later exercise
// // const flights =
// //     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// // Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderPasta: function (ng1, ng2, ng3) {
        console.log(
            `Here is you delicus Pasta with Ingrediets ${ng1} , ${ng2}, and ${ng3}`
        );
    },
    openingHours: {
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
    },
};

// ! ## Short Circuting && vs ||
// It will return first truthy value for **OR** 🚀, or last **falsy Value**
console.log(3 || 'Kashkoush');// 3
console.log(0 || NaN || null || undefined);// undefined because it is the last
// It will return **first falsy Value** for **AND**🚀 or last **truty Value**
console.log(0 && 'kashkoush');//0
console.log('ahmed' && 'mohamed' && 1 && 'last truty Value');// last Truthy Value































// // ! ## Rest Pattern
// // ? Destructring
// //  #### On Arrays
// // packets values into array
// const [a, b, , ...arrWithRestPattern] = [1, 2, 3, 4, 5];// arrWithRestPattern=[allElements after last variable assigned];
// console.log(a, b, ...arrWithRestPattern);

// const [pizza, , Risotto, ...allOtherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// //allOtherFood will take all values after third element of the array
// // doesn't contain **skipped** Element
// console.log(pizza, Risotto, allOtherFood);
// // #### On Objects
// // I want to take sat and all others be stored in weekDays
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);
// // ? Functions
// // [Problem] create a function that accept any number of parameters and sum all of them
// const add = function (...numbers) {// arguments will packed into array called number
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++)
//         sum += numbers[i];
//     return sum;

// }
// console.log(add(1, 2));
// console.log(add(1, 2, 3, 4));
// const arr10 = [2, 3, 4, 5, 3, 2];
// console.log(add(1, 2, 3, 4, 5, 5, 5, 242, 23, 4, ...arr10));// arr10 will be expeanded




















// // ! Spread operator
// //  Used to avoid array shallow copy
// const arr = [1, 2, 3];
// const arrCpy = arr;
// arrCpy[0] = 10;// I only need to change arrCpy[0] not arr[0]
// console.log(arr[0], arrCpy[0]);// arr[0] is changed 
// const deepCpy = [...arr];
// deepCpy[2] = 15;
// console.log(deepCpy[2], arr[2]);// only deepCpy is changing

// // Joining two arrays
// const mergedArrays = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(mergedArrays);

// // passing arguments to funcitons
// const arrIngredients = ['chicken', 'meat', 'cheese'];
// restaurant.orderPasta(...arrIngredients);
// // Deep Clone for objects and avoid shallow copy 🏆
// const newObj = {
//     p1: [1, 2, 3, 4, 5, [1, 2, 3]]
// };
// const newObjCpy = { ...newObj };
// newObjCpy.p1 = [50, 60];
// console.log(newObj.p1, newObjCpy.p1);
// // ! Array destructing
// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);
// //  to take first and third
// const [x, , y] = arr;
// console.log(x, y); //2, 4

// // Nested Destructing 🥤

// const arr1 = [1, 2, 3, [4, 5]];
// const [i, , , [j, k]] = arr1;// need first and last
// console.log(i, j, k);

// // You can set Default values before destructing
// const [h = 1, m = 1, n = 1, t = 10] = arr;
// console.log(h, m, n, t);
