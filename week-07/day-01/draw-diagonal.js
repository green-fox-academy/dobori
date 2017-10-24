'use strict';

var lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let sign = "%";
let empty = " ";

for (let i = 1; i <= lineCount; i++) {
    if (i === 1 || i === lineCount || i === 2) {
        console.log(sign.repeat(i));
    } else {
        console.log(sign + empty.repeat(i-2) + sign);
    }
}
