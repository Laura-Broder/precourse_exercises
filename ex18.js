'use strict';

const input = require('readline-sync');

let arryLength = input.questionInt('\nwhat is the length of the array?\n');
let newNum = input.questionInt('\nwhat is the first number in the array?\n');

let elementsArry = [];
elementsArry.push(newNum);

while ( elementsArry.length < arryLength ) {
    newNum = input.questionInt('\nwhat is the next number in the array?\n');
    elementsArry.push(newNum);
}

console.log('\n\nThe array you entered is: [' + elementsArry + '].\n');
elementsArry.reverse();
console.log('the reverse array is: [' + elementsArry + '].\n\n');