'use strict'

// const math = require('./math.js')
import {PI, add} from './math.mjs';

let op = '+';
let x = 10, y = 20;

if (op == '+') {
    console.log("sum is: " + add(x, y))
}

console.log("pi: " + PI)