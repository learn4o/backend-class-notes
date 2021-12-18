'use strict'

function student(name, marks) {
    return {
        name,
        marks,
        avgMarks: function() {
            let sum = 0;
            for (let mark of this.marks) {
                sum += mark
            }

            return sum / this.marks.length
        },
        higherRank: function(other) {
            if (this.avgMarks() > other.avgMarks()) {
                console.log(`${this.name} got higher marks`)
            } else {
                console.log(`${other.name} got higher marks`)
            }
        }
    }
}

function Student(name, marks) {
    this.name = name
    this.marks = marks
}

Student.prototype.avgMarks = function () {
    let sum = 0
    for (let mark of this.marks) {
        sum += mark
    }

    return sum / this.marks.length
}

Student.prototype.higherRank = function(other) {
    if (this.avgMarks() > other.avgMarks()) {
        console.log(`${this.name} got higher marks`)
    } else {
        console.log(`${other.name} got higher marks`)
    }
}

console.log(student('student1', [10, 100, 90]))

console.log(new Student('student2', [100, 80, 90]))