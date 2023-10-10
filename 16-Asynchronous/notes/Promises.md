---
aliases:
  - WEB Promises
Lec: 
tags: 
Subject: Javascript
related: "[README](../README.md)"
---
# Promises
## What is a Promise?
1. It is container for future value
2. all the code will continue working regardless of of promise gets its value or not

## why Use?
1. We don't have to reply on events listeners like using XMLHTTP
2. no more callback hell we have now ==promise chain==
## Promise lifecycle
![Promise LifeCycle](../img/Promise%20LifeCycle.png)

1. using ==fetch api== builds the promise
2. Then I can [consume promises](consume%20promises.md) as much as I want