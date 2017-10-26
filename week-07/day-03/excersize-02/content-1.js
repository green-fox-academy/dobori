
//   1. Alert the content of the heading.
//   2. Write the content of the first paragraph to the console.
//   3. Alert the content of the second paragraph.
//   4. Replace the heading's content with 'New content'.
//   5. Replace the last paragraph's content with the first paragraph's content.


let header = document.getElementsByTagName('h1');
alert(header[0].innerHTML);

let first_paragraph = document.querySelector('p');
console.log(first_paragraph.innerHTML);

let all_paragraph = document.querySelectorAll('p');
alert(all_paragraph[1].innerHTML);

header[0].innerHTML = 'New content';

let last_paragraph = document.querySelector('.result');
change = last_paragraph.innerHTML;
last_paragraph.innerHTML = first_paragraph.innerHTML;
first_paragraph.innerHTML = change;

