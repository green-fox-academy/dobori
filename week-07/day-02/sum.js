'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result


function sum(parameter){
    let summa = 0;
    for (let i=1; i <= parameter; i++) {
        summa += i;
    }
    console.log(summa); 
}

sum(56);