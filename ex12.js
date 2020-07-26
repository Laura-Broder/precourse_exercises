'use strict';

const input = require('readline-sync');

let userStr = input.question('please write a sentence:  \n');

let newUserStr = userStr.replace(/[a|e|i|o|u|y]/ig, 
                                function(matched){
                                return matched.toUpperCase();
                                });
            

console.log(newUserStr);


