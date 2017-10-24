'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
// ---*---
// --***--
// -*****-
// *******
//
// The pyramid should have as many lines as lineCount is

let star = "*";
let space = " ";

for (let i = 0; i < lineCount; i++){ 
    let y = i + 1;
    console.log(space.repeat(lineCount - y) + star.repeat(i * 2 + 1) + space.repeat(lineCount - y));
}

