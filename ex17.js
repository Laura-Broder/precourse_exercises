'use strict';

const input = require('readline-sync');

let arry1Length = input.questionInt('\nwhat is the length of the 1st array?\n');
let newString = input.question('\nwhat is the first string in the array?\n');

let string1Arry = [];
string1Arry.push(newString);

while ( string1Arry.length < arry1Length ) {
    newString = input.question('\nwhat is the next string in the array?\n');
    string1Arry.push(newString);
}

let arry2Length = input.questionInt('\nwhat is the length of the 2st array?\n');
newString = input.question('\nwhat is the first string in the array?\n');

let string2Arry = [];
string2Arry.push(newString);

while ( string2Arry.length < arry2Length ) {
    newString = input.question('\nwhat is the next string in the array?\n');
    string2Arry.push(newString);
}

let joindArray = string1Arry.concat(string2Arry);
console.log('\nThe joined array is [' + joindArray + '].\n');