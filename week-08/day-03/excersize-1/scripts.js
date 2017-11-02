'use strict';


function getGifs ( callback ) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://api.giphy.com/v1/gifs/search?q=monkey&api_key=rv9M1eOrmxBZY6dHj0rs6y5fXJDWtHll&limit=16');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            let gifs = JSON.parse(xhr.responseText)
            callback( gifs );
        }
    }
    xhr.send()
}


function showGifs( gifData) {
    let main = document.querySelector('main');
    for (let i = 0; i < gifData.data.length; i++) {
        let button = document.createElement('button');
        button.setAttribute('style', 'background-image: url(' + gifData.data[i].images.original_still.url + ')');
        button.addEventListener('click', function(){
            button.setAttribute('style', 'background-image: url(' + gifData.data[i].images.downsized_large.url + ')');
        });
    main.appendChild(button);
    }
}

getGifs( showGifs);





