'use strict';

String.prototype.count=function(s1) {   
    return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length;  
}  

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

var howManyE = fruits.map(function(fruit) {
    return fruit.count('e');
  });

  console.log(howManyE);

