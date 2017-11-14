'use strict'

var audioPlayer = document.querySelector("#audioPlayer");
var track = document.querySelectorAll("a");
var playsButton = document.querySelector('#plays_btn');
var playButton = document.querySelector('#play_btn');   
var pauseButton = document.querySelector('#pause_btn');
var nextBtn = document.querySelector('#next_btn');
var volumeBar = document.querySelector('.progressbar_volume');
var progressBar = document.querySelector('.progressbar_range');
var currentTimeDisplay = document.querySelector('#current_time');
var durationDisplay = document.querySelector('#timelenght');


function audioListPlay(){
    let currentSong = 0;

        audioPlayer.src = track[0].href;
        track[0].setAttribute('class', 'current_li');

        track.forEach(function(element){
            
            element.addEventListener('click', function(e){
                element.setAttribute('class', 'current_li');
                e.preventDefault(); 
                audioPlayer.src = this;
                audioPlayer.play();
                
            });
        });
}


playsButton.addEventListener("click", function() {

        if (audioPlayer.paused == false) {
            audioPlayer.pause();
            playButton.setAttribute('style', 'display: block;');
            pauseButton.setAttribute('style', 'display: none;');
        } else {
            audioPlayer.play();
            playButton.setAttribute('style', 'display: none;');
            pauseButton.setAttribute('style', 'display: block;');
        }
});

//Next Button


nextBtn.addEventListener("click", function(){


});

//Prev Button

      
//function for timeline

audioPlayer.addEventListener("timeupdate", function() {

    let currentTime = audioPlayer.currentTime;
    let duration = audioPlayer.duration;    
        progressBar.setAttribute('style', 'width:' + (currentTime + 0.25) / duration * 100 + '%' );

});



//show the times

audioPlayer.addEventListener("timeupdate", function() {

    let duration = parseInt( audioPlayer.duration );
    let currentTime = parseInt( audioPlayer.currentTime );
    
    function timeFormatting(time){
        let s = time % 60;
        let m = Math.floor( time / 60 ) % 60;
            
            s = s < 10 ? "0" + s : s;
            m = m < 10 ? "0"+ m : m;

        let timestring = m + ":" + s;
        return timestring;
    }

        currentTimeDisplay.innerText = timeFormatting(currentTime);
        durationDisplay.innerText = timeFormatting(duration);
    
});

//volume bar

// var audioVolume = audioPlayer.volume;
//     audioVolume = 0.5;

// function updateVolume () {
// 	volumeBar.style.width = audioVolume * 100 + '%';
// }

//updateVolume();


audioListPlay();