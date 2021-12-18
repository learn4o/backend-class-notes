'use strict';

//4x5
let tiles = [
    ['#', '.', '#', '.', '.'],
    ['.', '.', '.', '#', '.'],
    ['#', '.', '#', '.', '.'],
    ['#', '.', '.', '#', '.'],
];


let rows = tiles.length;//4
let cols = tiles[0].length;//5

let count = 0;
for (let i = 0; i < rows; i++) {//i=4
    for (let j = 0; j < cols; j++) {//j=5
        if (tiles[i][j] == '#') {//i=3,j=4
            count++;//count=7
        }
    }
}

console.log(`Dirty tiles count: ${count}`);