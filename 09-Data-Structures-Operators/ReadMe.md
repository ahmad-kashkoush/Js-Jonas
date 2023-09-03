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

#### It works on all **Iterables**:

    1. Strings
    2. Arrays
    3. maps
    4. Sets
    5. doesn't work on objects

#### Muliptle values seperated by comma only for :

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

#### It will return **OR ||** 🚀:

    1. first truthy value for
    2. last **falsy Value** if no truthy💥

```js
console.log(3 || 'Kashkoush'); // 3
console.log(0 || NaN || null || undefined); // undefined because it is the last
```

#### It will return **AND &&**🚀:

    1. first falsy Value if exists
    2. last truty Value if no falsy

```js
console.log(0 && 'kashkoush'); //0
console.log('ahmed' && 'mohamed' && 1 && 'last truty Value'); // last Truthy Value
```
