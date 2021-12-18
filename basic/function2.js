'use strict';

function intObject(a, o) {
    a = a + 1;
    o.called = true;
}

let x = 1;
let obj = {
    a: 1,
    b: 2
}

console.log(x);
console.log(obj);

intObject(x, obj)

console.log(x);
console.log(obj);