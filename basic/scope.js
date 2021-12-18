'use strict';

var x = 3;

function displayMe() {
    
    var y = 'this is declared inside fun';

    console.log("y: " + y + ", x: " + x);

    var x = true;
    var z = 123;
    
}

displayMe();
// console.log(globalThis);
// console.log(y);