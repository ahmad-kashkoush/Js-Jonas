#### Table Of Content📕

- [Array Destructing](#Array%20Destructing)
- [Object Destructing 🫣](#Object%20Destructing%20🫣)
- [... spread operator😶‍🌫️](#...%20spread%20operator😶‍🌫️)
- [Rest Pattern 💬](#Rest%20Pattern%20💬)
- [Short Circuting && vs ||🤨](#Short%20Circuting%20&&%20vs%20||🤨)
- [Nullish Value Operator ??](#Nullish%20Value%20Operator%20??)
- [For of loop](#For%20of%20loop)
- [Optinal chaining ?.](#Optinal%20chaining%20?.)
- [Coding Challenge 1](#Coding%20Challenge%201)
- [Coding Challenge 2](#Coding%20Challenge%202)
- [Set ⭐](#Set%20⭐)
- [maps🎉](#maps🎉)
- [Coding Challenge #3](#Coding%20Challenge%20#3)
- [String 🧠🧠](#String%20🧠🧠)
- [Coding Challenge #4](#Coding%20Challenge%20#4)
- [Latest string Challenge🎉🎉🎉](#Latest%20string%20Challenge🎉🎉🎉)

# 09 Data structure operators 🚀

## Array Destructing

```JS
    // ! Array destructing
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c);
//  to take first and third
const [x, , y] = arr;
console.log(x, y); //2, 4

// Nested Destructing 🥤

const arr1 = [1, 2, 3, [4, 5]];
const [i, , , [j, k]] = arr1;// need first and last
console.log(i, j, k);

// You can set Default values before destructing
const [h = 1, m = 1, n = 1, t = 10] = arr;
console.log(h, m, n, t);
```

## Object Destructing 🫣

#### object data

```js
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
```

```js
// ! Object Destructing
const { name, openingHours } = restaurant; // {prepertyName In the object}=object==>object.prpertyName
// console.log(name, openingHours);

let [a, b] = [10, 15];
const obj = { a: 20, b: 30 };
//  Now I want to change a, b variables to be equal to a, b object properties
// {a, b}=obj;Doesnt' work because you can't assign a value to block
({ a, b } = obj); // will work  be {a, b} aren't a block now
console.log(a, b);

// Nested Objects 🫨
const parentObject = {
  nestedObject: {
    property1: 'property1',
    property2: 'property2',
  },
};
const { nestedObject: oo } = parentObject;
// what about calling the inner properties?
const {
  nestedObject: { property1: p1, property2: p2 },
} = parentObject;
console.log(p1, p2);
```

## ... spread operator😶‍🌫️

#### It works on all **Iterables**

    1. Strings
    2. Arrays
    3. maps
    4. Sets
    5. doesn't work on objects

#### Muliptle values seperated by comma only for

    1. function arguments
    2. array assignments --> const a=...dflj;a

#### Used to avoid array shallow copy

```js
const arr = [1, 2, 3];
const arrCpy = arr;
arrCpy[0] = 10; // I only need to change arrCpy[0] not arr[0]
console.log(arr[0], arrCpy[0]); // arr[0] is changed

// Solution⭐⭐⭐⭐⭐
const deepCpy = [...arr];
deepCpy[2] = 15;
console.log(deepCpy[2], arr[2]); // only deepCpy is changing
```

#### Joining two arrays

```js
const mergedArrays = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(mergedArrays);
```

#### passing arguments to functions

```js
const arrIngredients = ['chicken', 'meat', 'cheese'];
restaurant.orderPasta(...arrIngredients);
```

#### Deep Clone for objects and avoid shallow copy 🏆

```js
const newObj = {
  p1: [1, 2, 3, 4, 5, [1, 2, 3]],
};
const newObjCpy = { ...newObj };
newObjCpy.p1 = [50, 60];
console.log(newObj.p1, newObjCpy.p1);
```

## Rest Pattern 💬

#### Destructring On Arrays

```js
// packets values into array
const [a, b, , ...arrWithRestPattern] = [1, 2, 3, 4, 5]; // arrWithRestPattern=[allElements after last variable assigned];
console.log(a, b, ...arrWithRestPattern);

const [pizza, , Risotto, ...allOtherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
//allOtherFood will take all values after third element of the array
// doesn't contain **skipped** Element
console.log(pizza, Risotto, allOtherFood);
```

#### Destructuring On Objects

```js
// I want to take sat and all others be stored in weekDays
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);
```

### Rest Pattern with Functions

```js
// [Problem] create a function that accept any number of parameters and sum all of them
const add = function (...numbers) {
  // arguments will packed into array called number
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};
console.log(add(1, 2));
console.log(add(1, 2, 3, 4));
const arr10 = [2, 3, 4, 5, 3, 2];
console.log(add(1, 2, 3, 4, 5, 5, 5, 242, 23, 4, ...arr10)); // arr10 will be expeanded
```

## Short Circuting && vs ||🤨

#### It will return **OR ||** 🚀

    1. first truthy value for
    2. last **falsy Value** if no truthy💥

```js
console.log(3 || 'Kashkoush'); // 3
console.log(0 || NaN || null || undefined); // undefined because it is the last
```

#### It will return **AND &&**🚀

    1. first falsy Value if exists
    2. last truty Value if no falsy

```js
console.log(0 && 'kashkoush'); //0
console.log('ahmed' && 'mohamed' && 1 && 'last truty Value'); // last Truthy Value
```

## Nullish Value Operator ??

- It is the same as ||
- || falsy values are (0, '',Undefined, null,false)
- ?? falsy values or **nullish values** are (null, undefined)

```js
const value = 0;
// ! I want to get the value if it is defined
let guess = value || 10; // 10 which is wrong
guess = value ?? 10; // 0 which is true
```

## Coding Challenge 1

```js
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1.[✅] Create one player array for each team (variables 'players1' and 'players2')
2.[✅] The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3.[✅] Create an array 'allPlayers' containing all players of both teams (22 players)
4.[✅]During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5.[✅] Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6.[✅]Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// Solution⭐⭐⭐⭐
const [players1, players2] = game.players;
// console.log(players1, players2);
const [gk, ...fieldPlayer] = players1;
// console.log(gk, fieldPlayer);
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
  // Rest Pattern
  console.log(...playerNames, playerNames.length); // spread Pattern
};
const team1Winning = team1 < team2 && game.team1;
const team2Winning = team2 < team1 && game.team2;
console.log(team1Winning || team2Winning);
// printGoals('ahmed', 'ismail', 'khalid');
```

## For of loop

```js
const arr = ['ahmed', 'mohamed', 'ali', 'ismail', 'khalid', 'faten'];
for (let item of arr) console.log(item);
// to get item with index [arr.entries];
for (let item of arr.entries()) console.log(item);
// You can destruct entry also
for (let [index, value] of arr.entries())
  console.log(`${index + 1} : ${value}`);
```

## Optinal chaining ?

#### If you have multiple nested objects

1. and you want to avoid error of [undefined.object];
2. Optional chaning Works by checking the **LHS** expression undefined or not
3. a.b.c?.-->checking if a.b.c is undefined

```js
const a = {
  b: { c: { d: { f: 'hello' } } },
  meThod(yourName) {
    console.log(`Hello, ${yourName}`);
  },
};
console.log(a.b.c.d.e.f); // error because of e is not there
console.log(a.b.c.d.e?.f); // undefined
a.meThod('ahemd');
console.log(a.notDefinedMethod?.('ahmed')); // will stop evaulating at ?.
```

## object value, key and entries

```js
console.log(Object.values(restaurant.openingHours));

console.log(Object.keys(restaurant.openingHours));

for (let [day, { open, close }] of Object.entries(restaurant.openingHours))
  console.log(day, open, close);
```

## Coding Challenge 2

```js
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
Let's continue with our football betting app!

1. ✅Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. ✅Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. ✅Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
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
// 1.
for (let [goalNumber, playerName] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${playerName}`);
}
// 2.
let sum = 0;
console.log(sum / Object.keys(game.odds).length);

// 3.
for (const [oddKey, oddValue] of Object.entries(game.odds)) {
  // console.log(oddKey, oddValue);
  let printedKey = game[oddKey] ?? 'Draw';
  if (printedKey != 'Draw') printedKey = 'Victory ' + printedKey;
  // console.log(printedKey);
  console.log(`Odds of ${printedKey}: ${oddValue}`);
}
```

## Set ⭐

```js
// you must add an iterable
const mySet = new Set([5, 1, 2, 3, 4, 2, 1]);
console.log(mySet);

//  Methods + properties 😎😎😎

mySet.add(20);
mySet.delete(5);
console.log(mySet.has(20)); // true
console.log(mySet.size);
console.log(...mySet);

// Get An array of unique values

const arr = [1, 2, 1, 2, 3, 5, 1, 2, 5];
const arrUnique = [...new Set(arr)];
console.log(arrUnique);
```

## maps🎉

```js
// map is like set
const rest = new Map();
rest.set('ali', 'sameer');
// console.log(rest.get('ali'));//

rest
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');

const check = function (time) {
  console.log(rest.get(rest.get('open') <= time && rest.get('close') >= time));
};
// If you add an object as map key, make sure to use the same reference
// because objects return the address of value stored in the heap
rest.set([1, 2], 'ahmed');
console.log(rest.has([1, 2])); // false
// if same objects with same values doesn't mean same address
// solution ⭐⭐
const obj = [1, 2];
rest.set(obj, 'ahmed');
// console.log(rest.has(obj));
// You can also Enter values in map as entries🤯🤯
const Emojie = new Map([
  ['done', '✅'],
  ['laugh', '😂'],
  ['ball', '🎱'],
]);

// console.log(Emojie);
// you can convert object to entre and put it inside map
// const restaurantMap = new Map([Object.entries(restaurant)])
```

#### Question Game using map 🥵

```js
const question = new Map([
  ['question', 'what is the best Programming Language?'],
  [1, 'Java'],
  [2, 'cpp'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct 🏆'],
  [false, 'Wrong ❌'],
]);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value} `);
  }
}
const answer = Number(prompt('your Answer'));

console.log(question.get(answer === question.get('correct')));
// Convert Map to array🍏
console.log([...question]);
```

## Coding Challenge #3

```js
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. ✅Create an array 'events' of the different game events that happened (no duplicates)
2. ✅After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. ✅Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. ✅Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
  [true, 'First Half'],
  [false, 'Second Half'],
]);

// Solution ⭐⭐⭐⭐⭐
// 1.
const eventsUnique = new Set([...gameEvents.values()]);
console.log(eventsUnique);
// 2
gameEvents.delete(64);
// console.log(gameEvents.entries());
// 3.
const events = [...gameEvents.keys()];
let mx = 0;
for (const item of events) {
  mx = Math.max(mx, item);
}
console.log(`on Average an event happend every ${mx / gameEvents.size}`);

// 4.
for (const [key, value] of gameEvents) {
  if (typeof key === 'number') {
    console.log(`[${gameEvents.get(key < 45)}] ${key}: ${value} `);
  }
}
```

## String 🧠🧠

```
 Boxing🍮🍮🍮🍮🍮🍮
    * convert primitive string to object string with same content
    * it is used to make us use string with methods
    * after executing the method it returns primitve string back
 */
```

- [See MDN for methods Please🥺](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Coding Challenge #4

```js
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase         ✅
firstName              ✅✅
someVariable           ✅✅✅
calculateAge           ✅✅✅✅
delayedDeparture       ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea');
const btn = document.querySelector('button');
let names = [];
btn.addEventListener('click', function () {
  names = text.value.split('\n');
  for (let [line, name] of names.entries()) {
    name = name.trim().toLowerCase().split('_');
    // console.log(name);

    let camelCaseName = [];
    for (let [index, word] of name.entries()) {
      if (index !== 0) word = word.replace(word[0], word[0].toUpperCase());

      camelCaseName.push(word);
    }
    console.log(camelCaseName.join('').padEnd(20, ' ') + '✅'.repeat(line + 1));
  }
});
```

## Latest string Challenge🎉🎉🎉

```js
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
let flightsArr = flights.split('+');
for (let flight of flightsArr) {
  flight = flight.replaceAll('_', ' ').trim();

  if (flight.startsWith('Delayed')) flight = ['🔴 ', flight].join('');
  flight = flight.split(';');
  flight[1] = flight[1].slice(0, 3).toUpperCase();
  flight[2] = flight[2].slice(0, 3).toUpperCase();
  flight[3] = ['(', flight[3].replace(':', 'h'), ')'].join('');
  flight = [flight[0], 'from', flight[1], 'to', flight[2], flight[3]]
    .join(' ')
    .padStart(45);

  console.log(flight);
}
```
