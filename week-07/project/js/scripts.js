const galleryImages = [
    { 'title': 'Img 1',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      'url':'../images/01.jpg'
    },
    { 'title': 'Img 2',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'url':'../images/02.jpg'
    },
    { 'title': 'Img 3',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'url':'../images/03.jpg'
    },
    { 'title': 'Img 4',
    'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'url':'../images/04.jpg'
  }];

let smallImages = document.querySelector('#small-line');
let i = 1;

galleryImages.forEach(function(element) {
    let smallImage = document.createElement('button');
        smallImage.setAttribute('class', 'small_pic');
        smallImage.setAttribute('style', 'background-image: url(images/' + i + '.jpg)');
        smallImage.setAttribute('id', i);
        smallImages.appendChild(smallImage);
        i++;
});



let bigImage = document.getElementById('big_pic');
let buttons = document.querySelectorAll('button');


for (let j = 0; j < buttons.length; j++){
    buttons[j].addEventListener('click', function(){
        let button = document.getElementById(j);
        bigImage.setAttribute('style', 'background-image: url(images/' + (j+1) + '.jpg)');
    }); 
}

// function changeImage(j) {
//     let button = document.getElementById(j);
//     bigImage.setAttribute('style', 'background-image: url(images/' + j + '.jpg)');
// }