// You can work in the html or in a separate js file. Like:

//   1. store the element that says 'The King' in the 'king' variable.
//   console.log it.
//   2. store the element that contains the text 'The Conceited Man'
//   in the 'conceited' variable.
//   show the result in an 'alert' window.
//   3. store 'The Businessman' and 'The Lamplighter'
//   in the 'businessLamp' variable.
//   console.log each of them.
//   4. store 'The King' and 'The Conceited Man'
//   in the 'conceitedKing' variable.
//   alert them one by one.
//   5. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//   in the 'noBusiness' variable.
//   console.log each of them.
//   6. store 'The Businessman' in the 'allBizniss' variable.
//   show the result in an 'alert' window.


var king = document.querySelector('.asteroid');
console.log(king.innerHTML);

var conceited = document.querySelector('.b326');
alert(conceited.innerHTML);

var businesslamp = document.querySelectorAll('.big');
console.log(businesslamp[0].innerHTML);
console.log(businesslamp[1].innerHTML);

var conceitedKing = document.querySelectorAll('.asteroid');
alert(conceitedKing[0].innerHTML);
alert(conceitedKing[1].innerHTML);

var noBusiness = document.querySelectorAll('.asteroid');
console.log(noBusiness[0].innerHTML);
console.log(noBusiness[1].innerHTML);
console.log(noBusiness[3].innerHTML);

var allBizniss = document.querySelector('p');
alert(allBizniss.innerHTML);