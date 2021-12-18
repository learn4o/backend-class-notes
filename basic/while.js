'use strict';

const readline = require('readline-sync');

let evenNums = 0;
let oddNums = 0;

//enter -1 to break
for (;;) {
    let n = readline.questionInt("Enter a number: ")

    if (n == -1) {
        break;
    }

    if (n % 2 == 1) {
        oddNums++;
    } else {
        evenNums++;
    }

    console.log(`Odd nums: ${oddNums}, even ones: ${evenNums}`)
}


console.log("i'm finished")