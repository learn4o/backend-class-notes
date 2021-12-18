'use strict'

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

Student.prototype.higherRank = function (other) {
    if (this.avgMarks() > other.avgMarks()) {
        console.log(`${this.name} got higher marks`)
    } else {
        console.log(`${other.name} got higher marks`)
    }
}

class Student2 {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }

    avgMarks() {
        let sum = 0
        for (let mark of this.marks) {
            sum += mark
        }

        return sum / this.marks.length
    }

    higherRank() {
        if (this.avgMarks() > other.avgMarks()) {
            console.log(`${this.name} got higher marks`)
        } else {
            console.log(`${other.name} got higher marks`)
        }
    }
}

let constStudent = new Student('student2', [100, 80, 90])
let classStudent = new Student2('classStudent', [100, 80, 90])

console.log(constStudent)
console.log(classStudent)

console.log("constructor marks: " + constStudent.avgMarks())
console.log("class marks: " + classStudent.avgMarks())