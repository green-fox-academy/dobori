'use strict';

var lineCount = 9;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let sign = "%";
let empty = " ";

console.log(sign.repeat(lineCount - 1));
for (let i = 0; i < lineCount - 2; i++) { 
    console.log(sign + empty.repeat(lineCount - 3) + sign);
}
console.log(sign.repeat(lineCount - 1));