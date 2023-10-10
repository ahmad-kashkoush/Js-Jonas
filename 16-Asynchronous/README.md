- [Asynchronous](#asynchronous)
	- [What is Asynchronous code?](#what-is-asynchronous-code)
	- [How it differs from synchronous?](#how-it-differs-from-synchronous)
	- [What is AJAX?](#what-is-ajax)
	- [How Asynchronous works behind the scenes?](#how-asynchronous-works-behind-the-scenes)
		- [Synchronous code](#synchronous-code)
		- [asynchronous code](#asynchronous-code)
		- [Events](#events)
	- [How the web Work?](#how-the-web-work)
		- [What Is client-server architecture?](#what-is-client-server-architecture)
		- [What Happens when we access a web Server?](#what-happens-when-we-access-a-web-server)
		- [What is HTTP Request?](#what-is-http-request)
	- [What is it?](#what-is-it)
	- [Request Message](#request-message)
	- [Promises](#promises)
		- [What is a Promise?](#what-is-a-promise)
		- [why Use?](#why-use)
		- [Promise lifecycle](#promise-lifecycle)
		- [How Promises Avoid callback Hell?](#how-promises-avoid-callback-hell)
		- [What Is async/await](#what-is-asyncawait)
			- [async](#async)
			- [await](#await)
		- [Promise Combinators](#promise-combinators)
			- [promise.all](#promiseall)
			- [promise .race](#promise-race)
			- [Promise .allSettled](#promise-allsettled)
			- [Promise .any](#promise-any)

# WEB Asynchronous JavaScript

## Asynchronous
### What is Asynchronous code?
1. It is a code that doesn't block other code in the background from being executed  
2. like **setTimeOut** the code after it keeps executing while it still waiting for the timer to finish. Even though the code is after it.
### How it differs from synchronous?
- It is code that is executed line by line
- Each line waits till the before is finished
- It is blocking the code after it from execution untill it is finished
### What is AJAX?
1. It is simply allows us to communicate with web servers in ==asynchronous way==
2. Means requesting and getting data from the web server happens in the background without block other code from being executed
### How Asynchronous works behind the scenes?
First, We have 3 pieces that organize and execute our code, actually 4. But let's keep 3 for now.
1. callback queue=> event loop
2. web api
3. callstack
  
![JS code organizers](img/JS%20code%20organizers.png)
#### Synchronous code
When we run synchronous code it goes to ==callstack== with no problem at all.
#### asynchronous code
When we run asynchronous code It is executed in the ==web API== Environment. so that if takes time , It won't block the callstack.
#### Events
when asynchronous code is finished It fires up event. either manual event (i.e. me typing load event) or other event (i.e. after fetching event).  
this event will be added to callback queue. which is queue of callbacks that takes them one by one and adds them to the callstack.

but another info. I've said wrong above. That after fetching event will be in the callback queue. which is wrong.

It will be in the the ==microtasks queue==.

which is the fourth environment that organizes our code.

microtasks code is going to be executed before callback queue code. so fetching promises have higher prioirty than other events.
![Asynchronous Behind the scenes](img/Asynchronous%20Behind%20the%20scenes.png)
### How the web Work?
#### What Is client-server architecture?
it is the following workflow:

1. client or Browser sends a ==request== for data to a web server
2. web servers sends a data as ==response==  
![HTTP Response](img/HTTP%20Response.png)
    It is called a request response model
#### What Happens when we access a web Server?
- [When we access a web server](notes/When%20we%20access%20a%20web%20server.md)
1. We first type a link  
    ![Link Pieces](img/Link%20Pieces.png)
2. Domain name is mapped to ==DNS== which is actual domain name server
3. then we have a real IP address to the server  
    ![Real IP Address](img/Real%20IP%20Address.png)
4. TCP/IP socket connection is opened for entire time to transfer all data
5. Now It's time to make a [HTTP Request](notes/HTTP%20Request.md)
6. Then a server sends to us back HTTP Response  
    ![HTTP Response](img/HTTP%20Response.png)
#### What is HTTP Request?
### What is it?
It is a communication Protocol : meaning a set of rules that allows two or more parties to communicate
### Request Message

![HTTP Request Message](img/HTTP%20Request%20Message.png)
### Promises
#### What is a Promise?

1. It is container for future value
2. all the code will continue working regardless of of promise gets its value or not
####  why Use?

1. We don't have to reply on events listeners like using XMLHTTP
2. no more callback hell we have now ==promise chain==
#### Promise lifecycle

![Promise LifeCycle](img/Promise%20LifeCycle.png)

1. using ==fetch api== builds the promise
2. Then I can [consume promises](notes/consume%20promises.md) as much as I want

#### How Promises Avoid callback Hell?
by returning a promise that you can use outside of the execcution context . this way no more callback hell

#### What Is async/await 
this is simply syntax sugar over ==then== method
##### async

make a function run in the background, and when done return a promise.

```js
const fun=async function(){
	lablabla;
}
// the above look like the following 
const fun=function(){
	return new Promise(function(resolve, reject){
		lablabla
	})
}
```

#####  await
makes the async code wait untill the promise is fullifilled either resolved or rejected

```js
const fun=async function(){
	const prmse=await fetch("lablabl")
	console.log(prmse)
}
// the above look like the following 
const fun=function(){
	return new Promise(function(resolve, reject){
		const prmse=fetch("lablbla").then(prmse=>console.log(prmse));
	})
}
```


#### Promise Combinators
##### promise.all
To make all await calls run at the same time

return an array of calls that are resolved , If there is a rejected then it will return an error

##### promise .race
returns the first settled call either rejected, or fullfilled
I can use it also to set timeout if requests are taking too long
##### Promise .allSettled
return all calls either rejected or resolved
##### Promise .any
returns an array of only resolved
