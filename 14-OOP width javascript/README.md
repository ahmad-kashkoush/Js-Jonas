**Content**

- [OOP In javascript](#oop-in-javascript)
- [Constructor Functions and the new Operator](#constructor-functions-and-the-new-operator)
  - [When calling **new** keyword](#when-calling-new-keyword)
  - [Object Instances](#object-instances)
  - [creating methods inside constructor functions is a bad practice?](#creating-methods-inside-constructor-functions-is-a-bad-practice)
- [Prototypes](#prototypes)
  - [What are they?](#what-are-they)
- [Prototypal Inheritance && The Prototype chain](#prototypal-inheritance--the-prototype-chain)
  - [Prototype chain](#prototype-chain)
- [Coding Challenge 1](#coding-challenge-1)
- [ES6 classes](#es6-classes)
- [Setters and getters](#setters-and-getters)
  - [How to set a property identified in constructure withoutht Fucking the call Stack?](#how-to-set-a-property-identified-in-constructure-withoutht-fucking-the-call-stack)
- [Object.create()](#objectcreate)
- [Coding Challenge 2](#coding-challenge-2)
- [inheritance Between Classes](#inheritance-between-classes)
  - [why?](#why)
  - [How ?](#how-)
    - [using constructor function](#using-constructor-function)
- [Coding Challenge 3](#coding-challenge-3)
- [Data hiding and Encapsulation?](#data-hiding-and-encapsulation)
  - [Why ?](#why-)
  - [How ?](#how-)
- [Public and private](#public-and-private)
- [Chaining Method](#chaining-method)
- [Coding Challenge 4](#coding-challenge-4)

# OOP in Javascript

## OOP In javascript

- **Prototypal Inheritence means** :: the prototype contains methods can be accessed by object linked to it
- Behavior is **delegated** to prototype if the behavior is from that object

## Constructor Functions and the new Operator

### When calling **new** keyword

- we are calling a constructor function this way
- a new empty object is created
- _this_ belongs to the empty object so you can fill it as you want
- constructor function returns the empty object you've updated **Linked to prototype inside constructor function**

### Object Instances

- Objects in Javascript are not incstances of a class explicitly
- Because we don't have calsses in javascript
- instead it is an object of a constructor function

### creating methods inside constructor functions is a bad practice?

- Yes
- Because If you have millions of objects they will have millions of copies of method does the same thing
- This is not efficient and violates _Dry Principle_
- I think this has relation with static word in cpp
  - No It Doesn't 🤣

## Prototypes

### What are they?

- It is an object that all functions have
- It is linked to object instansiated from current constructor function
- but is not linked to constructor function itself
- It has it's own properties which you look at it as you've looked at static types in c++, _meaning it belongs only to class itself_
- When calling prototype attributes on object they delegate behavior to prototype

## Prototypal Inheritance && The Prototype chain

### Prototype chain

- Simple every object is linked to prototype of constructor Function by `__Proto__`
- constructor functions also linked to prototype of which she was instansiated
- this happens till we reach **Object** which is the parent of all
- `__Proto__` of Object is null to break the chain
- object Prototype has built-in methods we use by _Prototypal inheritance_

## Coding Challenge 1

```js
/*

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

  

DATA CAR 1: 'BMW' going at 120 km/h

DATA CAR 2: 'Mercedes' going at 95 km/h

  

GOOD LUCK 😀

*/

const Car = function (make, speed) {
  this.make = make;

  this.speed = speed;
};

Car.prototype.accelerate = function () {
  consol;
  e.log(this);

  this.speed += 10;

  console.log(this.speed);
};

Car.prototype.brake = function () {
  console.log(this);

  this.speed -= 5;

  this.speed = Math.max(this.speed, 0);

  console.log(this.speed);
};

const car1 = new Car('BMW', 120);

const car2 = new Car('Mercedes', 95);

// console.log(car1);

car1.accelerate();

car1.accelerate();

car2.brake();
```

## ES6 classes

- same as other languages
- hide protypal inheritence from you
- class are special type of functions
- classes are not hoisted

## Setters and getters

- Important If you want to do some kind of operation before setting the property

### How to set a property identified in constructure withoutht Fucking the call Stack?

- Rename property same name as it's getter
- see [[#Coding Challenge 2]]

## Object.create()

- Links to prototype without constructor

## Coding Challenge 2

```js
// Coding Challenge 2

/*

1. ✅Re-create challenge 1, but this time using an ES6 class;

2. ✅Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);

3. ✅Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);

4. ✅Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

  

DATA CAR 1: 'Ford' going at 120 km/h

  

GOOD LUCK 😀

*/

class Car {
  constructor(make, speed) {
    this.make = make;

    this.speed = speed;
  }

  set speed(val) {
    this._speed = val;
  }

  get speed() {
    return this._speed;
  }

  set speedUS(val) {
    this._speed = val * 1.6;
  }

  get speedUS() {
    return this._speed / 1.6;
  }

  accelerate() {
    console.log(this);

    this.speed += 10;

    console.log(this.speed);
  }

  brake() {
    console.log(this);

    this.speed -= 5;

    this.speed = Math.max(this.speed, 0);

    console.log(this.speed);
  }
}

const car1 = new Car('BMW', 50);

car1.speed = 80;

console.log(car1.speed);

car1.accelerate();

car1.accelerate();

car1.brake();

car1.brake();
```

## inheritance Between Classes

### why?

- To Avoid Repeating code _Dry Principle_
- To keep all classes if I update the parent

### How ?

#### using constructor function

- Create Your Parent, and constructor
- Link child Proto to Parent proto
- Be Carefull ⚠⚠
  - don't assign but link
    - If Assign then you are assigning addres
    - If Link , Then You are making methods and Properties of parent in the Prototype chain of child, which allow him to use them and access them
  - linking will change the constructor to the parent constructor then, You need to set manually

## Coding Challenge 3

```js
// Coding Challenge 3

/*

1. ✅Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);

2. ✅Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';

3. ✅Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

  

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

  

GOOD LUCK 😀

*/

const Car = function (make, speed) {
  this.make = make;

  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(this);

  this.speed += 10;

  console.log(this.speed);
};

Car.prototype.brake = function () {
  console.log(this);

  this.speed -= 5;

  this.speed = Math.max(this.speed, 0);

  console.log(this.speed);
};

const car1 = new Car('BMW', 120);

// console.log(car1);

// car1.accelerate();

// car1.brake();

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);

  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.constructor = EV;

// 2.

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3.

EV.prototype.accelerate = function () {
  this.speed += 20;

  this.charge -= 0.01 * this.charge;

  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 50);

// tesla.accelerate();

// tesla.brake();

tesla.chargeBattery(100);

tesla.accelerate();

console.log(tesla);
```

## Data hiding and Encapsulation?

### Why ?

- To avoid accedently manipulate data properties
- To abstract the code => meaning to show the what not the how

### How ?

- JS Doesn't have Data hiding way
- Solution is to put `_Propery` which is the standard convertion that this property is protected
- Then Use getter From Outside

## Public and private

```js
// public field
Constructor(){
this.name=name;
}
```

```js
// private field
class{
#item;
// this way only the class will access this data memeber
}
```

## Chaining Method

- make the function return object of same class so that I can Use other methods on it

```js
obj.method1().method2().method3().method4;
//this will happen if method1=>return obj
```

## Coding Challenge 4

```js
/*

1. ✅Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class

2. ✅Make the 'charge' property private;

3. ✅Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

  

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

  

GOOD LUCK 😀

*/

class CarCL {
  constructor(make, speed) {
    this.make = make;

    this.speed = speed;

    return this;
  }

  accelerate() {
    console.log(this);

    this.speed += 10;

    console.log(this.speed);

    return this;
  }

  brake() {
    console.log(this);

    this.speed -= 5;

    this.speed = Math.max(this.speed, 0);

    console.log(this.speed);

    return this;
  }
}

const car1 = new CarCL('BMW', 120);

// console.log(car1);

// car1.accelerate();

// car1.brake();

class EVCL extends CarCL {
  // Private Fields

  #charge;

  Constructor(make, speed, charge) {
    Super(make, speed);

    this.#charge = charge;

    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;

    return this;
  }

  accelerate() {
    this.speed += 20;

    this.#charge -= 0.01 * this.#charge;

    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }% `
    );

    return this;
  }
}

const tesla = new EVCL('Tesla', 120, 50);

// tesla.accelerate();

// tesla.brake();

tesla.chargeBattery(100).accelerate().brake();

console.log(tesla);
```
