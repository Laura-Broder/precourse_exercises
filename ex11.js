'use strict';

const input = require('readline-sync');

let userstr = input.question('please write a something:  \n');

let strLength = userstr.length;

let i=0,
    isPalindrome=true;

while (i < parseInt(strLength/2)) {
    
    if (userstr.charAt(i) !== userstr.charAt(strLength-i-1) ) {
        console.log('the phrase is not a palindrome.'); 
        isPalindrome = false;
        break; 
    }
    
    i++;    
}

if (isPalindrome === true)
    console.log(userstr + ' is a palindrome!');