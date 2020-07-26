'use strict';

const input = require('readline-sync');

//new cards stack arry
const Spade = String.fromCharCode(9824);
const Heart = String.fromCharCode(9829);
const Club = String.fromCharCode(9827);
const Diamond = String.fromCharCode(9830);
const cardSuit = [Club, Spade, Diamond, Heart];

//console.log(cardSuit);  //check
const cardValues = [1,2,3,4,5,6,7,8,9,'J','Q','K'];
let x;
let stackOfCards = [];
for (x=0; x < 12 ; x++) {
    stackOfCards[x] = [cardValues[x] + cardSuit[0]];
    stackOfCards[(12+x)] = [cardValues[x] + cardSuit[1]];
    stackOfCards[(24+x)] = [cardValues[x] + cardSuit[2]];
    stackOfCards[(36+x)] = [cardValues[x] + cardSuit[3]];
}
//console.log(stackOfCards);  //check

//make a rendom stack of cards
let rendomStack = stackOfCards;
let i , j, k;

for (i = rendomStack.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = rendomStack[i];
    rendomStack[i] = rendomStack[j];
    rendomStack[j] = k;
  }

//initialize users bank and name
let player1Bank = 50;
let player2Bank = 50;
let player1Name = false;
let player2Name = false;

//logo
console.log('\n\n\
             XXXXXXX~~~~~~~~~~~~~~XXXXXXX\n\
       XXXXXXX~~~~~~~~~~~~~~~~~~~~~~~~~~XXXXXXX\n\
XXXXXXX~~~~~~~~~~   WELCOME TO WAR   ~~~~~~~~~~XXXXXXX\n\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');

//ask how many players
let numOfPlayers = input.questionInt('How many players are you?  (1 or 2)\n');
if (numOfPlayers === 1) {
    console.log('\n\nYou chose to play against me.\n');
    
    player2Name = 'computer';
}   else { 
    if (numOfPlayers === 2) {
        console.log('\n\nYou chose to play with a friend.\n');
        
    }   else {
        console.log('\n\nYou don\'t want to play? Bye Bye!\n');
        process.exit();
    }
}
    
//ask for players name
while (player1Name == false) {
    player1Name = input.question('Hi player 1! Please enter your name:\n');
}
console.log('\nHi ' + player1Name + '! You currently have 50 dollars.\n');

if (numOfPlayers === 2) {
    while (player2Name == false) {
        player2Name = input.question('Hi player 2! Please enter your name:\n');
    }
    console.log('\nHi ' + player2Name + '! You currently have 50 dollars.\n'); 
}

console.log('\nVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV\n')

//play a round function
function NewRoundFunction() {
    let player1BetSum = false;
    let player2BetSum = false;
    
    //ask for a bet
    while (player1BetSum == false) {
        player1BetSum = input.question(player1Name + ' place your bet for the next round:  (1 to ' + player1Bank + ')\n');
    }

    //check if bet valid. if not, exit the program
    if (player1BetSum < 1 || player1BetSum > player1Bank) {
        
        console.log('\n' + player1Name + ' you want to bet ' + player1BetSum + ' but you have only ' + player1Bank + '! \n\n\
        ---> GAME OVER for you scamer!\n\n');
        
        process.exit();
    }

    if (numOfPlayers === 2) {
        while (player2BetSum == false) {
        player2BetSum = input.question(player2Name + ' place your bet for the next round:  (1 to ' + player2Bank + ')\n');
        
        //check if bet valid. if not, exit the program
        if (player2BetSum < 1 || player2BetSum > player2Bank) {
            
            console.log('\nyou want to bet ' + player2BetSum + ' but you have only ' + player2Bank + '! \n\n\
            ---> GAME OVER for you scamer!\n\n');
            
            process.exit();
            }
        }
    }
    

    //deal the cards
    let player1Card = rendomStack.pop();
    let player2Card = rendomStack.pop();
    console.log('\n\
    --------------------------------------------\n\
    ' + player1Name + '\'s card is  ' + player1Card + '  And ' + player2Name + '\'s card is  ' + player2Card + '.\n\
    --------------------------------------------\n');

    let player1CardValue = parseInt(player1Card);
    let player2CardValue = parseInt(player2Card);


    switch (true) {
        case  player1Card[0].indexOf("J") != -1 : 
            player1CardValue = 10;
            break;
        case  player1Card[0].indexOf("Q") != -1 : 
            player1CardValue = 11;
            break;
        case  player1Card[0].indexOf("K") != -1 : 
            player1CardValue = 12;
            break;
    }

    switch (true) {
        case  player2Card[0].indexOf("J") != -1 : 
            player2CardValue = 10;
            break;
        case  player2Card[0].indexOf("Q") != -1 : 
            player2CardValue = 11;
            break;
        case  player2Card[0].indexOf("K") != -1 : 
            player2CardValue = 12;
            break;
    }

    //check who won
    if (player2CardValue > player1CardValue) {
        player1Bank = parseInt(player1Bank) - parseInt(player1BetSum);
        console.log('\n---> ' + player1Name + ' LOST ' + player1BetSum + ' and now has ' + player1Bank + '.');
        if (numOfPlayers === 2) {
            player2Bank = parseInt(player2Bank) + parseInt(player2BetSum);
            console.log('\n---> ' + player2Name + ' WON ' + player2BetSum + ' and now has ' + player2Bank + '.');
        }
        if (player1Bank  === 0) {
            console.log('\n---> ' + player1Name + ' You are BROKE. Bye Bye!');
            process.exit();
        }
    }   else {
        if (player2CardValue < player1CardValue) {
            player1Bank = parseInt(player1Bank) + parseInt(player1BetSum);;
            console.log('\n---> ' + player1Name + ' WON ' + player1BetSum + ' and now has ' + player1Bank + '.');
            if (numOfPlayers === 2) {
                player2Bank = parseInt(player2Bank) - parseInt(player2BetSum);
                console.log('\n---> ' + player2Name + ' LOST ' + player2BetSum + ' and now has ' + player2Bank + '.');
                if (player2Bank  === 0) {
                    console.log('\n---> ' + player2Name + ' You are BROKE. Bye Bye!\n\
                    VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
                    process.exit();
                }
            }
        }   else {
            console.log('\n---> It\'s a draw. \n\
            ' + player1Name + ' still has ' + player1Bank + '\n');
            if (numOfPlayers === 2) {
                console.log(player2Name + ' still has ' + player2Bank + '\n');
            }
        }
    }
    return;
}

//offer another round function
function anotherRoundFunction() {
    console.log('\nVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV\n')
    let actionChoice = ['Play another round.' , 'Leave with my money.'];
    let y = input.keyInSelect(actionChoice, 'what would you like to do?\n');
    return y;
}

//start first round
NewRoundFunction();

//ask if another round and keep playing
while (anotherRoundFunction() === 0) {
    console.log('\nVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV\n\nYEY! ANOTHER ROUND!\n\n----------------------\n\n');
    NewRoundFunction();
}   

//if player wants to stop playing say bye and finnish
console.log('\nVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
console.log('\n\n$$$ ' + player1Name + ' got ' + player1Bank + ' dollars.');
if (numOfPlayers === 2) {
    console.log('\n$$$ ' + player2Name + ' got ' + player2Bank + ' dollars.');
}
console.log('\nNice playing with you! See you next time!\n\n\
VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV\n\
VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV\n');






