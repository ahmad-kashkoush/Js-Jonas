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

## Optinal chaining ?.

#### If you have multiple nested objects

1.  and you want to avoid error of [undefined.object];
2.  Optional chaning Works by checking the **LHS** expression undefined or not
3.  a.b.c?.-->checking if a.b.c is undefined

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
