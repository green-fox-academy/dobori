'use strict'

var url = 'http://localhost:8080/';

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


const getTracks = callback => {
    methods('GET', 'playlist-tracks', callback);
}
const getPlaylist = callback => {
    methods('GET', 'playlists', callback);
}


const renderTrackList = function(tracks) {  
    var trackListShow= document.querySelector('#tracklist')
    tracks.forEach( (track, i) => {
        var li = document.createElement('li');
            li.innerHTML =  track.title;
            li.setAttribute('data-url', track.path);
            li.setAttribute('type', 'audio/mp3');
            li.setAttribute('id', i);
            li.addEventListener('click', function(e){
                e.preventDefault(); 
                track.path = this;
                audioListPlay(i); 
            });
        trackListShow.appendChild(li);
    });
    audioListPlay(0);
    console.log("datas ready")
}


const renderPlayList = function(playList) {  
    console.log(playList)
    var playListShow = document.querySelector('#playlist')
    playList.forEach( oneList => {
        let li = document.createElement('li');
            li.innerHTML =  oneList.playlist_title;
        playListShow.appendChild(li);
    });
}


var dataPlayList = getPlaylist(renderPlayList);
var data = getTracks(renderTrackList);


