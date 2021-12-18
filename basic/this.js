'use strict'

function avgMarks() {
    let sum = this.marks.reduce((a, b) => a + b, 0)
    return sum / this.marks.length
}

const tarun = student('Tarun', [100, 100, 100])

const siddharth = student('Siddharth', [100, 100, 95])

function student(name, marks) {
    return {
        name,
        marks,
        avgMarks,
        higherRank: function(other) {
            if (this.avgMarks() > other.avgMarks()) {
                console.log(`${this.name} got higher marks`)
            } else {
                console.log(`${other.name} got higher marks`)
            }
        }
    }
}


siddharth.higherRank(tarun)