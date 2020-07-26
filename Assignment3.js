'use strict';

const readlineSync = require('readline-sync');
const figlet = require('figlet');

//logo
console.log(figlet.textSync('HANG MAN', {
    font: 'Acrobatic',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 'default',
    whitespaceBreak: false
}));

//define word array
let wordsArray = ['game', 'alert', 'white', 'wow'];

//randomize words array function
function randomWordsArry (arry) {
    for (let i = arry.length -1, j, k; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = arry[i]
        arry[i] = arry[j]
        arry[j] = k
    }
    return arry;
}

//randomize words array
wordsArray = randomWordsArry(wordsArray);

//choose a word and make a masked string
let theWord = wordsArray.pop();
let wordLength = theWord.length;
let theWordMasked = '*'.repeat(wordLength);

//init guesses
let guessesLeft = 10;
let newGuess = [];

/////////////////////////////////////////////////////////

//ask the user for a guess function
function askToGuess (guessesLeft, theWordMasked) {
     {
        console.log('\n-------------------------\nYou have ' + guessesLeft + ' guesses.');
        console.log('The word is:');
        console.log(theWordMasked);
        newGuess = readlineSync.question('what is your guess?\n');
        
    }   
    return newGuess.toLowerCase();
}

//check if input valid function
function isValidInput(newGuess) {
    let guessLength = newGuess.length;
    let guessABC = /^[a-z]+$/i.test(newGuess);
    if ( ( (guessABC === true) && (guessLength === 1) ) || newGuess === theWord )  {
        return true;
    }
    
    return false;
}

//replaceAt method for a string
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

//replace the * with a letter function
function replaceWithLetter (newGuess, theWord, theWordMasked, wordLength) {
    for( let i=0; i<wordLength; i++ ) {
        if (theWord.charAt(i) === newGuess && theWordMasked.charAt(i) === '*') {
            theWordMasked = theWordMasked.replaceAt(i, newGuess);
        }
    }  
    return theWordMasked; 
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//start the game:


while ( theWordMasked.indexOf('*') !== -1  &&  guessesLeft > 0 ) {
    
    //ask for a guess     
    newGuess = askToGuess(guessesLeft, theWordMasked);
    
    //keep asking for input antil it's valid
    while (isValidInput(newGuess) === false) {
        console.log('-!!!- please enter only one character.');
        newGuess = askToGuess(guessesLeft, theWordMasked);
    }   
    
    //check the guess. 
    //if good: replace * with input.
    //if bad: reduce number of guesses left.
    if (theWord.includes(newGuess) === true) {
        if (newGuess === theWord) {
            theWordMasked = theWord;
        }   else {
                console.log('---> you are right!');
                theWordMasked = replaceWithLetter(newGuess, theWord, theWordMasked, wordLength);
            }
    }   else {
        console.log('---> Nope');
        guessesLeft--;
        }
}

//if the user has no more guessing chances:
if (guessesLeft === 0) {
    console.log('\n\
    ------------------------------------\n\
    you are out of guesses.\n\
    The word is \"' + theWord + '\".\n\
    Bye Bye!\n\
    ------------------------------------\n' );
}   else {
        //if the user guessed:
        console.log('\n\
        ------------------------------------\n\
        you guessed the word!\n\
        The word is \"' + theWord + '\".\n\
        Bye Bye!\n\
        ------------------------------------\n' );
    }