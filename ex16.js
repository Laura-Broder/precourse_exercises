'use strict';

const input = require('readline-sync');

function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
}

function myArrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
}

let arryLength = input.questionInt('\nwhat is the length of the array?\n');
let newNum = input.questionInt('\nwhat is the first number in the array?\n');

let elementsArry = [];
elementsArry.push(newNum);

while ( elementsArry.length < arryLength ) {
    newNum = input.questionInt('\nwhat is the next number in the array?\n');
    elementsArry.push(newNum);
}


console.log('\nThe array is [' + elementsArry + '].\n\
Min index is ' + elementsArry.indexOf(myArrayMin(elementsArry)) + '.\n\
Max index is ' + elementsArry.indexOf(myArrayMax(elementsArry)) + '\n');