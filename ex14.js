'use strict';

const input = require('readline-sync');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

for (let i=0, elementsArry=[]; i<5; i++) {
    elementsArry[i] = getRndInteger(0,100);
    console.log(elementsArry[i] + '\n');
}