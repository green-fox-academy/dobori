'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];

let i = 0;
let girl="";
let boy="";

while (girls.length != 0 && boys.length != 0) {

    girl = girls.shift(i);
    order.push(girl);
    boy = boys.shift(i);
    order.push(boy);

}

console.log(order);