# PiCalc
Pi Calculation 
Created as test application in de CloudTechnology Minor of  the The Hague University of Applied Sciences
(Calculation algorithm derived from https://github.com/MikeMcl/decimal.js/issues/9  - Bailey-Borwein-Plouffe)

This application depends on the js packages express and decimal.js. 
These dependencies are automatically installed with the command: npm install

Application is started with the command: node server.js

Usage: <URL>?n=<number of decimals>  (default =20 if no n specified)
       returns pi and the calculation time as json data
e.g. http://10.1.2.3/?n=100

The default port is 80, which requires root-privileges. Change it to 8080 to run te service on port 8080 with user-privileges.


