## Converting and checking Numbers
1. Numbers in js are represented in binary
2. Javascript can't calculate fractions accurately
	```js
	console.log(.1+.2===.3);// return false
	```

	```js
	// Number Conversion

console.log(+'23');

console.log(Number('23'));

// Parsing

// Number conversion even if there is units

console.log(Number.parseInt('23px'));// will get number before chars

  
  

// check if valid Number

console.log(Number.isFinite('23'));

console.log(Number.isFinite(23));

console.log(Number.isFinite(23 / 0));
```


## Math And Rounding
```js
// For Square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
// for Cubic Root
console.log(8 ** (1 / 3));
```
 - Math.min and max does **type coersion**, Not type Parsing
	 ```js
	 console.log(Math.max('23', 1, 2, 3));//23

	console.log(Math.max('23px', 1, 2, 3));//NaN
	```
 - Rounding Integers
	 ```js
		 
			console.log(Math.trunc(10.3));;// keep Integer Part
	
	  
	
	// round to nearest
	
	console.log(Math.round(10.3));
	
	console.log(Math.round(10.9));
	
	  
	
	// round up
	
	console.log(Math.ceil(10.3));
	
	console.log(Math.ceil(10.9));
	
	  
	
	// round down
	
	console.log(Math.floor(10.3));
	
	console.log(Math.floor(10.9));
	
	  
	
	```
-  Rounding Decimals
	```js
		// toFixed(n): round to nearest n decimal
		// returns string
		
		
		console.log(+2.25666.toFixed(4));
	```
-  Java Script will do Boxing  to use methods on primitive ![[Boxing]]
- Number Separator
	```js
	// Use it to make it easier for you to read
	// doesn't effect answer
	// can't be converted from string to number
	console.log(242_333_000_000);//Valid
	// console.log(242._333_000_000);//Invalid
	console.log(Number('242_333_000_000'));//Invalid **NaN**
	```



## Creating Dates
- Month in Javascript is 0-based
```js
// Dates

// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// - 

  
  
  

console.log(new Date(0));// counts from 1970

const now = new Date();

// some getters

console.log(now.getFullYear());

console.log(now.getMonth());

console.log(now.getDate());// days to reach it from sunday

console.log(now.getDay());

console.log(now.getHours());

console.log(now.getMinutes());

console.log(now.getMilliseconds());

console.log(now.getTime());// time stamp

console.log(now.toLocaleString());// type `to` and wait for the snippets there is a lot of formats
```

## Date + Number Internationlization
```js
	// Dates

// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// - Month in Javascript is 0-based

  
  
  

// console.log(new Date(0));// counts from 1970

const now = new Date();

// // some getters

// console.log(now.getFullYear());

// console.log(now.getMonth());

// console.log(now.getDate());// days to reach it from sunday

// console.log(now.getDay());

// console.log(now.getHours());

// console.log(now.getMinutes());

// console.log(now.getMilliseconds());

// console.log(now.getTime());// time stamp

// console.log(now.toLocaleString());// type `to` and wait for the snippets there is a lot of formats

// console.log(now.toISOString());// type `to` and wait for the snippets there is a lot of formats

  

// number format internationlizating

  

const num = 14313412432.3;

const options = {

style: 'currency',

unit: 'mile-per-hour',

currency: 'USA'

  

}

console.log(new Intl.NumberFormat('en-US', options).format(num));

console.log(new Intl.NumberFormat('de-DE', options).format(num));

```
