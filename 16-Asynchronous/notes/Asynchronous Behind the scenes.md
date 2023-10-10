---
aliases:
  - WEB Asynchronous Behind the scenes
Lec: 
tags: 
Subject: Javascript
related: "[README](../README.md)"
---
# Asynchronous Behind the scenes

### if the language is  is single threaded, Then How it executes async code in the background?
We have callstack, web API Environments, event loop 

synchronous code is performed in the callstack
asynchronous code is performed in the web API
![JS code organizers](../img/JS%20code%20organizers.png)
In every async code like loading image. There will be a callback function that is waiting for it to load or finish. Then after finishing this will callback will be executed in the ==event loop== which is a ==callback queue==


### What about promises
Their code is executed in the web api, But their events doesn't go to callback queue, instead it goes to ==microtask queue==, which have priority over callback queue. 
![Asynchronous Behind the scenes](../img/Asynchronous%20Behind%20the%20scenes.png)


## Meswad
I'll type my understanding from the lesson, No need to keep it it is just for my understanding

First, We have 3 pieces that organize and execute our code, actually 4. But let's keep 3 for now. 
1. callback queue=> event loop
2. web api
3. callstack

When we run [synchronous](Synchronous%20vs%20Asynchronous.md) code it goes to ==callstack== with no problem at all.

When we run asynchronous code It is executed in the ==web API== Environment. so that if takes time , It won't block the callstack.

when asynchronous code is finished It fires up event. either manual event (i.e.  me typing load event) or other event (i.e. after fetching event).
this event will be added to callback queue. which is queue of callbacks that takes them one by one and adds them to the callstack.

but another info. I've said wrong above. That after fetching event will be in the callback queue. which is wrong.

It will be in the the ==microtasks queue==. 

which is the fourth environment that organizes our code.


microtasks code is going to be executed before callback queue code. so fetching promises have higher prioirty than other events.



