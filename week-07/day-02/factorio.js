'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(num){
    let factorial = 1;
    for (let i = 1; i <= num; i++){
        factorial *= i; 
    }
    console.log(factorial);
}

factorio(6);