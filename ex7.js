'use strict';

const input = require('readline-sync');

let x, N, sum;

x = input.question('For which number do you want to calculate factorial?    ');
N = Number(x);

while  ( !( Number.isInteger(N) ) ) {
    x = input.question('please enter an integer:    ');
    N = Number(x);
}
    

sum = N;

while (N>1) {
    sum = sum*(N-1);
    N--;
}

console.log('the factorial of ' + x + ' is:  ' + sum);