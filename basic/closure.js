'use strict';

function student(studentName, ...studentMarks) {

    function attendance() {
        console.log(`Hi there - I'm ${studentName}`);
    }

    function averageScore() {
        let sum = 0;
        for (let mark of studentMarks) {
            sum += mark;
        }

        const avgScore = sum / studentMarks.length;

        console.log(`I scored an avg score of ${avgScore}`);
    }

    return {
        attendance,
        averageScore
    }
}

const tarun = student('tarun', 80, 70, 90);
const pradeep = student('pradeep', 70, 100, 90)

tarun.attendance();
tarun.averageScore();