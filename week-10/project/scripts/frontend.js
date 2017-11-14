var url = 'http://localhost:8080/foxplayer';

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