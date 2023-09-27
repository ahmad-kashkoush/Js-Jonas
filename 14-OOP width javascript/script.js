'use strict';
// Coding Challenge #4

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
        this.#charge -= .01 * (this.#charge);
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}% `);
        return this;
    }      
        
}    


    
    const tesla=new EVCL('Tesla', 120, 50);
    
    // tesla.accelerate();
    
    // tesla.brake();
    
    tesla.chargeBattery(100).accelerate().brake();
    
      
    
    console.log(tesla);















































// class Account {
//     constructor(owner, currency, pin){
//         this.owner=owner;
//         this.currency=currency;
//         this.pin=pin;
//         this.movements=[];
//         this.locale=navigator.lenguage;
//     }
//     // public interface 
//     deposite(val){
//         this.movements.push(val);
//     }
//     withdraw(val){
//         this.deposite(-val);
//     }
// }

// const act1= new Account('Ahmed', 'EUR', 1111);
// console.log(act1);




















































// // // Coding Challenge 3
// // /* 
// // 1. ✅Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// // 2. ✅Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// // 3. ✅Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// // 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// // DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// // GOOD LUCK 😀
// // */

// // const Car=function(make, speed){
// //     this.make = make;
// //     this.speed = speed;
// //     }

// //     Car.prototype.accelerate=function () {
// //     console.log(this);
// //        this.speed += 10;
// //     console.log(this.speed);
// //     }
    
// //   Car.prototype.brake=function(){
// //     console.log(this);
// //     this.speed -= 5;
// //     this.speed = Math.max(this.speed, 0);
// //     console.log(this.speed);
// //     }

// // const car1=new Car('BMW', 120);
// // // console.log(car1);
// // // car1.accelerate();
// // // car1.brake();


// // const EV=function(make, speed, charge){
// //     Car.call(this, make, speed);
// //     this.charge=charge;
// // }
// // // EV.prototype=Object.create(Car.prototype);
// // // EV.prototype.constructor=EV;
// // // // 2. 
// // // EV.prototype.chargeBattery=function(chargeTo){
// // //     this.charge=chargeTo;
// // // }
// // // // 3. 
// // // EV.prototype.accelerate=function(){
// // //     this.speed+=20;
// // //     this.charge-=.01*(this.charge);
// // //     console.log(`${ this.make } going at ${ this.speed } km / h, with a charge of ${ this.charge }% `);
// // // }
// // // const tesla=new EV('Tesla', 120, 50);
// // // // tesla.accelerate();
// // // // tesla.brake();
// // // tesla.chargeBattery(100);
// // // tesla.accelerate();

// // // console.log(tesla);

// // const carProto={};
// // carProto.init=function(make, speed){
// //     this.make=make;
// //     this.speed=speed;
// // }

// // carProto.accelerate=function () {
// //     console.log(this);
// //        this.speed += 10;
// //     console.log(this.speed);
// //  }
    
// // carProto.brake=function(){
// //     console.log(this);
// //     this.speed -= 5;
// //     this.speed = Math.max(this.speed, 0);
// //     console.log(this.speed);
// // }


// // const bmw=Object.create(carProto);
// // bmw.init('BMw', 120);
// // console.log(bmw);


// // // Inheritance
// // const evProto=Object.create(carProto)
// // evProto.init=function(make, speed, charge){
// //     carProto.init.call(this, make, speed);
// //     this.charge=charge;
// // }
// // evProto.accelerate=function(){
// //         this.speed+=20;
// //         this.charge-=.01*(this.charge);
// //         console.log(`${ this.make } going at ${ this.speed } km / h, with a charge of ${ this.charge }% `);
// //     }

// // const tessla=Object.create(evProto);
// // tessla.init('tttt', 120, 50);
// // console.log(tessla);
// // tessla.accelerate();























// // // // 
// // // Inheritance
// // // // const Person=function(firstName, birthYear){
// // //     // this.firstName=firstName;
// // //     // this.birthYear=birthYear;
// // // // }
// // // // Person.prototype.calcAge=function(){
// // //     // return (2023-this.birthYear);
// // // // }
// // // // Person.prototype.desc=function(){
// // //     // return `${ this.firstName } is ${ this.calcAge() } years old`
// // // // }
// // // console.log(new Person('Khalid', 2001).calcAge());
// // // // 
// // // Student is child of person
// // // // const Student=function(firstName, birthYear, course){
// // //     this.firstName=firstName;
// // //     this.birthYear=birthYear;
// // //     ! inherit first and birth from Person⭐⭐⭐⭐⭐
// // //     // Person.call(this, firstName, birthYear);
// // //     // this.course=course;
// // // // }
// // // // Student.prototype=Object.create(Person.prototype);
// // // // Student.prototype.printStudent=function(){
// // //     // return `${ this.desc() } and is studying ${ this.course } `;
// // // // }
// // // // const student1=new Student('ahmed', 2003, 'Computer Science');
// // // // Student.prototype.constructor=Student;
// // // // console.log(Student.prototype);
// // // console.log(student1.desc());
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 
// // // // 













// // // // // Coding Challenge 2

// // // // /* 
// // // // 1. ✅Re-create challenge 1, but this time using an ES6 class;
// // // // 2. ✅Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// // // // 3. ✅Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// // // // 4. ✅Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// // // // DATA CAR 1: 'Ford' going at 120 km/h

// // // // GOOD LUCK 😀
// // // // */
// // // // class Car  {
// // // //     constructor(make, speed){
// // // //     this.make = make;
// // // //     this.speed = speed;
// // // //     }

// // // //     set speedUS(val){
// // // //         this.speed=val*1.6;
// // // //     }
// // // //     get speedUS(){
// // // //         return this.speed/1.6;
// // // //     }

    
// // // //     accelerate () {
// // // //     console.log(this);
// // // //        this.speed += 10;
// // // //     console.log(this.speed);
// // // //     }
    
// // // //   brake(){
// // // //     console.log(this);
// // // //     this.speed -= 5;
// // // //     this.speed = Math.max(this.speed, 0);
// // // //     console.log(this.speed);
// // // //     }
// // // // }
// // // // const car1=new Car('BMW', 50);
// // // // car1.speed=80;
// // // // console.log(car1.speed);

// // // // car1.accelerate();
// // // // car1.accelerate();
// // // // car1.brake();
// // // // car1.brake();






















// // // // // class Person{
// // // // //     Constructor(fullName, age){
// // // // //         this.fullName=fullName;
// // // // //         this.age=age;
// // // // //     }
// // // // //     // set and constructor try to set the same property which will fuck call stack
// // // // //     // ⭐⭐⭐⭐ 
// // // // //     //1. define different variable
// // // // //     // 2. return it throught getter
// // // // //     set fullName(inputName){
// // // // //         console.log(inputName);
// // // // //         if(inputName.includes(' '))
// // // // //             this._fullName=inputName;
// // // // //         else
// // // // //             alert('Invalid Name');
// // // // //     }
// // // // //     get fullName(){
// // // // //         return this._fullName;
// // // // //     }
// // // // // }
// // // // // const ahmed= new Person('Ahmed', 23);
// // // // // ahmed.fullName='Ahmed Kashkoush';
// // // // // console.log(ahmed.fullName);
// // // // // // console.log(ahmed);
// // // // // ## Coding challenge 1
 

// // // // // console.log(car2);
// // // // // //  constructor Functions
// // // // // const ConFunc = function (age, firstName) {
// // // // //     // this is empty if defined with new
// // // // //     // Now I'm gonna fill it
// // // // //     this.firstName = firstName,
// // // // //         this.age = age
// // // // //     // Don't create methods inside constructor functions
// // // // // }
// // // // // const instanceOfCon1 = new ConFunc(28, 'Ahmed')
// // // // // const instanceOfCon2 = new ConFunc(23, 'Khalid')
// // // // // const instanceOfCon3 = new ConFunc(25, 'Saeed')
// // // // // // console.log(instanceOfCon1);
// // // // // // console.log(instanceOfCon2);
// // // // // // console.log(instanceOfCon3);
// // // // // // check if instance
// // // // // // console.log(instanceOfCon1 instanceof ConFunc);

// // // // // // Prototypes 
// // // // // // console.log(ConFunc.prototype);
// // // // // // Prototype : is the object constructor has
// // // // // // __proto__ : is the object instainsiated object belongs to
// // // // // // console.log(instanceOfCon1.__proto__ == ConFunc.prototype);

// // // // // // ConFunc.prototype.lastName = 'Ismail';
// // // // // // console.log(`${ instanceOfCon1.firstName } ${ instanceOfCon1.lastName } `);
// // // // // let pr = instanceOfCon1.__proto__;
// // // // // console.log(pr);
// // // // // console.log(pr.__proto__);
// // // // // console.log(pr.__proto__.__proto__);