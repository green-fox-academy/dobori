'use strict';
// Add "a" to every string in far

var far = ["kuty", "macsk", "kacs", "rók", "halacsk"];

far = far.map(function(element) {
    return element + 'a'
});

console.log(far);