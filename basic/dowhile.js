'use strict';

const readline = require('readline-sync')

let num;
do {
    num = readline.questionInt("Enter a number. -1 to exit: ")

    if (num <= 0) {
        continue;
    }

    if (num % 2 == 1) {
        console.log(`${num} is odd`);
    } else {
        console.log(`${num} is even`)
    }
} while (num != -1)