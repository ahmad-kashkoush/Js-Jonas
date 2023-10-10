---
aliases:
  - WEB When we access a web server
Lec: 
tags: 
Subject: Javascript
related:
  - "[README](../README.md)"
---
# What happens when acess a web server

1. We first type a link 
	![Link Pieces](../img/Link%20Pieces.png)
2. Domain name is mapped to ==DNS== which is actual domain name server
3. then we have a real IP address to the server
	![Real IP Address](../img/Real%20IP%20Address.png)
4. TCP/IP socket connection is opened  for entire time to transfer all data
5. Now It's time to make a [HTTP Request](HTTP%20Request.md)
6. Then a server sends to us back HTTP Response
	![HTTP Response](../img/HTTP%20Response.png)