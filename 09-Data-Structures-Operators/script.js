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

