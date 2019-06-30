# PiCalc
Pi Calculation 
Created as test application in de CloudTechnology Minor of  the The Hague University of Applied Sciences

Application depends on the js packages express and decimal.js.
These are provided and tested with node.js v6.16 on a Centos7 Machine. 

that have to be installed by npm. 
Execute these commands in the working directory.
 npm install decimal.js
 npm install express

node.js application to calculate pi
Usage: <URL>?n=<number of decimals>  (default =20 if no n specified)
       returns pi and the calculation time as json data

The default port is 80, which requires root-privileges. Change it to 8080 to run it with user-privileges

Calculation algorithm derived from https://github.com/MikeMcl/decimal.js/issues/9 (Bailey-Borwein-Plouffe)

 
