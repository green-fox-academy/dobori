'use strict';

var url = 'http://localhost:8080/books';

const methods = function ( methodType, filtering, callback ) {
    const xhr = new XMLHttpRequest();
    xhr.open( methodType, url + filtering );
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            console.log(JSON.parse(xhr.responseText));
            callback(JSON.parse(xhr.responseText));
        };
    };
    xhr.send();
    console.log("request sent")
};


const getData = callback => {
    methods('GET', '', callback);
}


const renderBooks = function(books) {
    
    var table = document.querySelector('table');

    books.forEach( book => {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
        tdName.innerText = book.book_name;
    let tdAuthor = document.createElement('td');
        tdAuthor.innerText = book.aut_name; 
    let tdCategory = document.createElement('td');
    let buttonCategory = document.createElement('button');
        buttonCategory.setAttribute('value', book.cate_descrip);
        buttonCategory.setAttribute('class', book.cate_descrip);
        buttonCategory.innerText = book.cate_descrip; 
    let tdPublisher = document.createElement('td');
        tdPublisher.innerText = book.pub_name; 
    let tdPrice = document.createElement('td');
        tdPrice.innerText = book.book_price + ' $';
        tdPrice.setAttribute('class', 'right')
        table.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdCategory);
        tdCategory.appendChild(buttonCategory);
        tr.appendChild(tdPublisher);
        tr.appendChild(tdPrice);
    });

    var htmlButtons = document.getElementsByTagName('button');

    var buttons = Array.from(htmlButtons);

    buttons.forEach(function(element){
        element.addEventListener("click", click);
    });
    
}


function click(button) {
    // console.log(value.srcElement.value);
    var filterButton =  button.srcElement.value;
    console.log(filterButton)
  /*  if (filterButton !== "") {
        getData(filterButton, renderBooks);
    }*/
}


var data = getData(renderBooks);
