'use strict';

const input = require('readline-sync');

function makes10(){
       
    let firstNumber = input.questionInt("what is the first number?");
    let secondNumber = input.questionInt("what is the second number?");
    
    if ((Number(firstNumber) + Number(secondNumber)) === 10) {
        console.log("makes 10");
    } else {
        console.log("nope");
    }
}

makes10();