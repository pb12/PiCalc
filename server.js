'use strict';

const Decimal = require('decimal.js');
const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

Decimal.config({precision: 10});
  function pi(n) {
    var p16 = new Decimal(1);
    var pi = new Decimal(0);
    var precision=n;
    Decimal.precision=precision;
    var one = new Decimal(1);
    var two = new Decimal(2);
    var four = new Decimal(4);
    var k8 = new Decimal(0);
    for (var k = new Decimal(0); k.lte(precision); k = k.plus(one)) {
      var f = four.div(k8.plus(1))
          .minus(two.div(k8.plus(4)))
          .minus(one.div(k8.plus(5)))
          .minus(one.div(k8.plus(6)));
      pi = pi.plus(p16.times(f));
      p16 = p16.div(16);
      k8 = k8.plus(8);
    }
    return pi;
  }


// App
const app = express();
app.get('/', (req, res) => {
  if (req.query.n || (req.body && req.body.n)) { 
    var n=(req.query.n || req.body.n)
  }
  else {
    var n=20
  };
  var StartTime = new Date()
  var calculatePi = pi(n);
  var EndTime = new Date() - StartTime

  res.set('Content-Type', 'text/json')
//  res.send('Calculated Pi= ' + calculatePi.toString() + ' in \n ' + JSON.stringify(EndTime) + ' ms. \n ' );
  res.send('{\"PI\":\n {\n  \"decimals\": ' + (n) + ', \n  \"ms\": ' + JSON.stringify(EndTime) + ',\n  \"value\": ' + (calculatePi.toString()) + '\n }\n} ');

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


