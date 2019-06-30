# PiCalc
Pi Calculation 
Created as test application in de CloudTechnology Minor of  the The Hague University of Applied Sciences
(Calculation algorithm derived from https://github.com/MikeMcl/decimal.js/issues/9  - Bailey-Borwein-Plouffe)

This application depends on the js packages express and decimal.js. 
These are included and tested with node.js v6.16 on a Centos7 Machine. 
If any problems: delete directory "node_modules" and recreate by npm:
Execute these commands in the working directory.
 npm install decimal.js
 npm install express

Usage: <URL>?n=<number of decimals>  (default =20 if no n specified)
       returns pi and the calculation time as json data
e.g. http://10.1.2.3/?n=100

The default port is 80, which requires root-privileges. Change it to 8080 to run te service on port 8080 with user-privileges.


