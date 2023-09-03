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
