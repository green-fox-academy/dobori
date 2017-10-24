'use strict';

var lineCount = 9;
let star = "*";
let space = " ";

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

if (lineCount % 2 === 1) {
    var firstHalf = Math.floor(lineCount / 2 + 1)
} else {
    var firstHalf = Math.floor(lineCount / 2)
}

for (let i = 0; i < firstHalf; i++){ 
    let y = i + 1;
    console.log(space.repeat(firstHalf - y) + star.repeat(i * 2 + 1) + space.repeat(firstHalf - y));
}
for (let i = 0; i < firstHalf - 1; i++){ 
    let y = i + 1;
    console.log(space.repeat(i + 1) + star.repeat(lineCount - 2 * y) + space.repeat(i + 1));
}