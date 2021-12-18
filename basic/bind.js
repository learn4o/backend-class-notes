'use strict'

function avgMarks(grades) {
    let sum = this.marks.reduce((a, b) => a + b, 0)
    let avg = sum / this.marks.length

    if (grades) {
        if (avg > 90) {
            return "A+"
        } else {
            return "A"
        }
    }

    return avg    
}

const st = {
    marks: [100, 80, 70]
}

console.log(avgMarks.apply(st, [true]))