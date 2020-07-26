'use strict';

const input = require('readline-sync');

let theNum = input.questionInt("Enter a number between 0-9: ");
let numNameArry = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
console.log("the number is " + numNameArry[theNum]);