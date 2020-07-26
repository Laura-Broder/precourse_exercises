'use strict';

const input = require('readline-sync');

let x,y;

x = input.question('please choose a number larger than 10:    ');
y = Number(x);

while (!(Number.isInteger(y)  &&  y > 10)) {
    x = input.question('please choose a number LARGER than 10:    ');    
    y = Number(x);
}
    
console.log('Thank you');