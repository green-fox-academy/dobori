'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

var nameOfStudents = [];

function whoIsThat() {
    students.forEach(function(element){
        if (element.candies > 4) {
            nameOfStudents.push(element.name);
        }   
    });
    console.log(nameOfStudents);
}

whoIsThat();

function averageCandy() {
    let sumOfCandies = 0;
    let i=0;
    for (i=0; i < students.length; i++) {
        sumOfCandies += students[i].candies;
    }
    console.log(sumOfCandies / i)
}

averageCandy();