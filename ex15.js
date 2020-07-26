'use strict';

const input = require('readline-sync');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

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

let elementsArry = [], newNum;

while ( elementsArry.length < arryLength + 1 ) {
    newNum = getRndInteger(0,50);
    if ( elementsArry.indexOf(newNum) < 0) 
        elementsArry.push(newNum);
}


console.log('\nMin is ' + myArrayMin(elementsArry) + '.\n\
Max is ' + myArrayMax(elementsArry) + '\n');