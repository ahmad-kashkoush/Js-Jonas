---
aliases:
  - WEB promise combinators
Lec: 
tags: 
Subject: Javascript
related: "[README](../README.md)"
---
# promise combinators
## promise.all
To make all await calls run at the same time

return an array of calls that are resolved , If there is a rejected then it will return an error
## promise .race
returns the first settled call either rejected, or fullfilled

I can use it also to set timeout if requests are taking too long 


## Promise .allSettled
return all calls either rejected or resolved

## Promise .any
returns an array of only resolved