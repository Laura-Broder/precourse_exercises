'use strict';

const input = require('readline-sync');

let num, i ;

num = input.questionInt("choose a number larger then 1:   ");
//n = Number(x);

while  ( !( Number.isInteger(num) ) || num<0 ) {
    num = input.questionInt('please enter a positive integer:    ');
//    n = Number(x);
}

for (i=num; i>2 ; i--) {
    if (isPrime(i) === true)
        console.log(i);
}

function isPrime(i) {
    let iIsPrime = true;
    for (let y = parseInt(i/2); (y>1) && (iIsPrime===true); y--) {
        if (i%y === 0 ) 
            iIsPrime = false;
    }
  return iIsPrime;
}