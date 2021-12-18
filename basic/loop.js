'use strict';

const readline = require('readline-sync');

// 2
// 2 X 1 = 2
// 2 X 2 = 4
//...
// 2 X 10 = 20

let num = readline.questionInt("Enter a number: ")

for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i}  = ${num*i}`);
}