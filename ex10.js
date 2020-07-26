'use strict';

const input = require('readline-sync');


let userstr = input.question('please write a sentence:  \n');

if (userstr.indexOf(' ') === -1) 
    console.log('no spaces to work with!');

console.log(userstr.replace(/ /g, "*"));


