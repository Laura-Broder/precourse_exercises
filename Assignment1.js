'use strict';

const input = require('readline-sync');

let QAndAns = function (qNum, q, qAns, qAnsValue) {
    this.qNum = qNum,
    this.q = q,
    this.qAns = qAns,
    this.qAnsValue = qAnsValue;
};

let q1 = new QAndAns(
    'Question #1:',
    'What time am I at my best?',
    [
        'Morning coffee is unnecessary.', 
        'The sun in the middle of the sky.',
        'Twilight.',
        'I usually see owls and bats during these hours.'
    ],
    [4,2,3,1]
);

let q2 = new QAndAns(
    'Question #2:',
    'Choose a preferred color:',
    [
        'Blue.', 
        'Yellow.',
        'Green.',
        'Black.'
    ],
    [3,2,4,1]
);

let q3 = new QAndAns(
    'Question #3:',
    'What is your fitness level?',
    [
        'Workout strictly 3-5 times a week.',
        'I work out when I can.',
        'What is fitness?',
        'Protein powder is running through my blood.'
    ],
    [3,2,1,4]
);

let q4 = new QAndAns(
    'Question #4:',
    'Do you like to leave the house?',
    [
        'Is a house considered an exit?',
        'If it\'s a few minutes from home it\'s OK.',
        'What is a house?',
        'I am barely at home.'
        
    ],
    [1,2,4,3]
);

let q5 = new QAndAns(
    'Question #5:',
    'What weather do I like most?',
    [    
        'Flowers and butterflies for me.',
        'I come out when I sees that the leaves are yellowing and a sweatshirt is needed in the evening.',
        'I\'m basically an Eskimo.',
        'Where is the camel?'
    ],
    [3,2,1,4]
);

let q6 = new QAndAns(
    'Question #6:',
    'How adventurous are you?',
    [
        'Small things that do not require preparation.',
        'Ropes and jumping from planes for me.',
        'Enjoying adventures from time to time..',        
        'Is being at home considered an adventure?'
    ],
    [2,4,3,1]
);

let q7 = new QAndAns(
    'Question #7:',
    'The clothes I like to wear the most are:',
    [
        'Cargo pants and fully equipped vest.', 
        'Fully dressed up with a mandatory perfume.',
        'Jeans and T-shirt.',
        'Pajamas.'
    ],
    [4,2,3,1]
);

let q8 = new QAndAns(
    'Question #8:',
    'Preferred food type?',
    [
        'Whatever is in the fridge.', 
        'Healthy food.',
        'Chef restaurants.',
        'Canned food is great.'
    ],
    [1,3,2,4]
);

let q9 = new QAndAns(
    'Question #9:',
    'What do you usually watch on TV?',
    [
        'Comedies.', 
        'Thriller / horror series.',
        'Docu / Drama.',
        'National Geographic and History Channel.'
    ],
    [1,3,2,4]
);

let q10 = new QAndAns(
    'Question #10:',
    'And last but not least ... a favorite animal?',
    [
        'Cat.', 
        'Dog.',
        'Horse.',
        'Shark.'
    ],
    [1,2,3,4]
);

const qArry = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

var ansArry = [
    '   --->  You didn\'t answer all the questions!!!\n\n\n',
    '   --->  Why go out if you can stay home?\n\n\n',
    '   --->  Eilat is a great location to work on your ten.\n\n\n',
    '   --->  Rosh Ha Nikra has great kayaks!\n\n\n',
    '   --->  The Yehudia river is boring ha? try \"Scorpions\' Pass\".\n\n\n'
];

let userAns = [];


let i=0;
console.log(
'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
Hi there! Welcome to the \"Where will your next trip be?\" quiz!\n\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
);

let ansSum = 0;

while (i<10) {
    
    console.log('\n\n   ' + qArry[i].qNum + '\n******************');
    
    userAns[i] = input.keyInSelect(qArry[i].qAns, qArry[i].q);
    
    ansSum = ansSum + qArry[i].qAnsValue[userAns[i]];
    i++;

}



console.log('\n*******************************\n\
GREAT JOB! \n\
here\'s you\'re result:\n\
*******************************\n');

switch (true) {
    
    case ( !(userAns.indexOf(-1) === -1) ): 
        console.log(ansArry[0]);
        break;
    
    case (ansSum >= 10 && ansSum <= 16) : 
        console.log(ansArry[1]);
        break;
    
    case (ansSum > 16 && ansSum <= 26) : 
        console.log(ansArry[2]);
        break;
                
    case (ansSum > 26 && ansSum <= 35) : 
        console.log(ansArry[3]);
        break;
    
    case (ansSum > 35) : 
        console.log(ansArry[4]);
        break;
}








