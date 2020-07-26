'use strict';

const input = require('readline-sync');

const userStr = input.question('please write some words:  \n');

const wordsArry = userStr.split(" ");
//console.log(wordsArry);

const wordsArryLength = wordsArry.length;
//console.log(wordsArryLength);

//check if word
function isWord(str) {
    //console.log(str);

    let strLength = str.length,
        j = 0;

    while (j < strLength) {
        let iCharCode = str.charCodeAt(j);
        if (iCharCode<65 || (iCharCode>90 && iCharCode<97) || iCharCode>122) 
            return false;
        j++;

    }

return true;
}


let maxWord = '',
    i=0,
    wordiLength = 0,
    maxLength = 0;

while (i < wordsArryLength) {
    //console.log(i);
    if ( isWord(wordsArry[i]) ) {
        
        wordiLength = wordsArry[i].length;
    
        if (wordiLength > maxLength) {
            maxLength = wordiLength;
            maxWord = wordsArry[i];

        }
    }
    

    i++;

}
if (maxLength === 0) 
    console.log('no words were given!');
else 
    console.log(maxWord);