'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)


// function printer(...element){
//     console.log(...element);
// }



function printer2(myArray){
    let newString = [];
    myArray = myArray.split(", ");
    myArray.forEach(function(element) {
        newString.push(element)
        });
    console.log(newString);
    }

printer2('one', 12, 'three', 'four');
