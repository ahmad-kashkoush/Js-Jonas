'use strict'
// // // Data needed for a later exercise
// // // const flights =
// // //     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// // // Data needed for first part of the section
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

//  ## String 🧠🧠
const airline = 'Tap Air Egypt';
// Extract firstWord
const tap = airline.slice(0, airline.indexOf(' '));
// slice gives chars [startIndex, endIndex)
const air = airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' '));
const egypt = airline.slice(airline.lastIndexOf(' ') + 1);
console.log(tap, air, egypt);

// Negative index mean start from end
console.log(airline.slice(-1));

/*  Boxing
    * convert primitive string to object string with same content
    * it is used to make us use string with methods
    * after executing the method it returns primitve string back
 */

const capitalize = function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

let a = capitalize('AHmed');
// Compare Names without🌟 caseSensitive
const fullName = '  aHmedKashkoush \n';
const fullName2 = 'Ahmed          Kashkoush    ';
// console.log(fullName.toLowerCase().trim === fullName2.toLowerCase().trim);

console.log(fullName.toLowerCase().trim(), fullName2.toLowerCase().trimEnd());






















// // Coding Challenge #3

// /* 
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. ✅Create an array 'events' of the different game events that happened (no duplicates)
// 2. ✅After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. ✅Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. ✅Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
//     [true, 'First Half'],
//     [false, 'Second Half']
// ]);

// // Solution ⭐⭐⭐⭐⭐
// // 1.
// const eventsUnique = new Set([...gameEvents.values()]);
// console.log(eventsUnique);
// // 2
// gameEvents.delete(64)
// // console.log(gameEvents.entries());
// // 3.
// const events = [...gameEvents.keys()];
// let mx = 0;
// for (const item of events) {
//     mx = Math.max(mx, item);

// }
// console.log(`on Average an event happend every ${mx / gameEvents.size}`);

// // 4. 
// for (const [key, value] of gameEvents) {
//     if (typeof key === 'number') {
//         console.log(
//             `[${gameEvents.get(key < 45)}] ${key}: ${value} `
//         );
//     }
// }







// //  ## maps
// //  map is like set but 
// const rest = new Map();
// rest.set('ali', 'sameer');
// // console.log(rest.get('ali'));// 
// //  different from cpp, you can set map as key to other map
// rest
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'we are open')
//     .set(false, 'we are close');

// const check = function (time) {
//     console.log(rest.get((rest.get('open') <= time && rest.get('close') >= time)));
// }
// // If you add an object as map key, make sure to use the same reference
// // because objects return the address of value stored in the heap
// rest.set([1, 2], 'ahmed');
// console.log(rest.has([1, 2]));//  false
// // if same objects with same values doesn't mean same address
// // solution ⭐⭐
// const obj = [1, 2];
// rest.set(obj, 'ahmed');
// // console.log(rest.has(obj));
// //  You can also Enter values in map as entries🤯🤯
// const Emojie = new Map([
//     ['done', '✅'],
//     ['laugh', '😂'],
//     ['ball', '🎱']
// ]);

// // console.log(Emojie);
// // you can convert object to entre and put it inside map
// // const restaurantMap = new Map([Object.entries(restaurant)])

// const question = new Map([
//     ['question', 'what is the best Programming Language?'],
//     [1, 'Java'],
//     [2, 'cpp'],
//     [3, 'javascript'],
//     ['correct', 3],
//     [true, 'correct 🏆'],
//     [false, 'Wrong ❌']
// ]);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof key === 'number') {
//         console.log(`Answer ${key}: ${value} `);
//     }
// }
// // const answer = Number(prompt('your Answer'))

// // console.log(question.get(answer === question.get('correct')));
// // Convert Map to array
// console.log([...question]);
















// const mySet = new Set([5, 1, 2, 3, 4, 2, 1]);
// // console.log(mySet);

// //  #### Methods + properties
// mySet.add(20);
// mySet.delete(5);
// console.log(mySet.has(20));//  true
// console.log(mySet.size);
// console.log(...mySet);

// //  Get An array of unique values

// const arr = [1, 2, 1, 2, 3, 5, 1, 2, 5];
// const arrUnique = [...new Set(arr)];
// console.log(arrUnique);




























// // object value, key and entries
// console.log(Object.values(restaurant.openingHours));
// console.log(Object.keys(restaurant.openingHours));
// for (let [day, { open, close }] of Object.entries(restaurant.openingHours))
//     console.log(day, open, close);
// ## Optinal chaining ?.
// #### If you have multiple nested objects
// and you want to avoid error of [undefined.object];
// Optional chaning Works by checking the prev expression undefined or not
// a.b.c?.-->checking if a.b.c is undefined
// const a = {
//     b: { c: { d: { f: 'hello' } } },
//     meThod(yourName) { console.log(`Hello, ${yourName}`); }
// };
// console.log(a.b.c.d.e.f);// error because of e is not there
// console.log(a.b.c.d.e?.f);// undefined
// a.meThod('ahemd');
// console.log(a.notDefinedMethod?.('ahmed'));// will stop evaulating at ?.




// const days = ["sat", 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
// for (let day of days) {
//     // console.log(day);
//     const open = restaurant.openingHours[day]?.open ?? "closed";
//     console.log(
//         `on ${day} open at ${open}`
//     );
// }








// // ! Coding Challenge 2

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

/* *
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀 */
// Solution ⭐⭐⭐⭐⭐⭐
// // 1. 
// for (let [goalNumber, playerName] of game.scored.entries()) {
//     console.log(`Goal ${goalNumber + 1}: ${playerName}`);
// }
// // 2. 
// let sum = 0;
// console.log(sum / Object.keys(game.odds).length);

// // 3.
// for (const [oddKey, oddValue] of Object.entries(game.odds)) {
//     // console.log(oddKey, oddValue);
//     let printedKey = game[oddKey] ?? 'Draw';
//     if (printedKey != 'Draw') printedKey = 'Victory ' + printedKey;
//     // console.log(printedKey);
//     console.log(`Odds of ${printedKey}: ${oddValue}`);
// }
// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1.[✅] Create one player array for each team (variables 'players1' and 'players2')
// 2.[✅] The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3.[✅] Create an array 'allPlayers' containing all players of both teams (22 players)
// 4.[✅]During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5.[✅] Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6.[✅]Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */

// const [players1, players2] = game.players;
// // console.log(players1, players2);
// const [gk, ...fieldPlayer] = players1;
// // console.log(gk, fieldPlayer);
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...playerNames) {// Rest Pattern
//     console.log(...playerNames, playerNames.length);// spread Pattern
// }
// const team1Winning = team1 < team2 && game.team1;
// const team2Winning = team2 < team1 && game.team2;
// console.log(team1Winning || team2Winning);
// // printGoals('ahmed', 'ismail', 'khalid');

// // // ! Nullish Values
// // const value = 0;
// // // ! I want to get the value if it is defined
// // let guess = value || 10; // 10 which is wrong
// // console.log(guess);
// // guess = value ?? 10; // 0 which is true
// // console.log(guess);





























// // // ! ## Short Circuting && vs ||
// // // It will return first truthy value for **OR** 🚀, or last **falsy Value**
// // console.log(3 || 'Kashkoush');// 3
// // console.log(0 || NaN || null || undefined);// undefined because it is the last
// // // It will return **first falsy Value** for **AND**🚀 or last **truty Value**
// // console.log(0 && 'kashkoush');//0
// // console.log('ahmed' && 'mohamed' && 1 && 'last truty Value');// last Truthy Value































// // // ! ## Rest Pattern
// // // ? Destructring
// // //  #### On Arrays
// // // packets values into array
// // const [a, b, , ...arrWithRestPattern] = [1, 2, 3, 4, 5];// arrWithRestPattern=[allElements after last variable assigned];
// // console.log(a, b, ...arrWithRestPattern);

// // const [pizza, , Risotto, ...allOtherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // //allOtherFood will take all values after third element of the array
// // // doesn't contain **skipped** Element
// // console.log(pizza, Risotto, allOtherFood);
// // // #### On Objects
// // // I want to take sat and all others be stored in weekDays
// // const { sat, ...weekDays } = restaurant.openingHours;
// // console.log(weekDays);
// // // ? Functions
// // // [Problem] create a function that accept any number of parameters and sum all of them
// // const add = function (...numbers) {// arguments will packed into array called number
// //     let sum = 0;
// //     for (let i = 0; i < numbers.length; i++)
// //         sum += numbers[i];
// //     return sum;

// // }
// // console.log(add(1, 2));
// // console.log(add(1, 2, 3, 4));
// // const arr10 = [2, 3, 4, 5, 3, 2];
// // console.log(add(1, 2, 3, 4, 5, 5, 5, 242, 23, 4, ...arr10));// arr10 will be expeanded




















// // // ! Spread operator
// // //  Used to avoid array shallow copy
// // const arr = [1, 2, 3];
// // const arrCpy = arr;
// // arrCpy[0] = 10;// I only need to change arrCpy[0] not arr[0]
// // console.log(arr[0], arrCpy[0]);// arr[0] is changed 
// // const deepCpy = [...arr];
// // deepCpy[2] = 15;
// // console.log(deepCpy[2], arr[2]);// only deepCpy is changing

// // // Joining two arrays
// // const mergedArrays = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(mergedArrays);

// // // passing arguments to funcitons
// // const arrIngredients = ['chicken', 'meat', 'cheese'];
// // restaurant.orderPasta(...arrIngredients);
// // // Deep Clone for objects and avoid shallow copy 🏆
// // const newObj = {
// //     p1: [1, 2, 3, 4, 5, [1, 2, 3]]
// // };
// // const newObjCpy = { ...newObj };
// // newObjCpy.p1 = [50, 60];
// // console.log(newObj.p1, newObjCpy.p1);
// // // ! Array destructing
// // const arr = [2, 3, 4];
// // const [a, b, c] = arr;
// // console.log(a, b, c);
// // //  to take first and third
// // const [x, , y] = arr;
// // console.log(x, y); //2, 4

// // // Nested Destructing 🥤

// // const arr1 = [1, 2, 3, [4, 5]];
// // const [i, , , [j, k]] = arr1;// need first and last
// // console.log(i, j, k);

// // // You can set Default values before destructing
// // const [h = 1, m = 1, n = 1, t = 10] = arr;
// // console.log(h, m, n, t);
