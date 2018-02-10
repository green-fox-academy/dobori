'use strict'
console.log(tracks)
const renderTrackList = function(tracks) {  
    var trackListShow = document.querySelector('#tracklist');
    
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
}

