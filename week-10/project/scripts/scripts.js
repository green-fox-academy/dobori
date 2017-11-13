
var audioPlayer = document.querySelector("#audioPlayer");

function audioListPlay(){
    var currentSong = 0;

        track = document.querySelectorAll("a");
        audioPlayer.src = track[0].href;

        for (let i=0; i<track.length; i++){
            track[i].addEventListener("click", function(e){
                e.preventDefault(); 
                audioPlayer.src = this;
                audioPlayer.play();
         });
        }
    
}


var playsButton = document.querySelector('#plays_btn');

playsButton.addEventListener("click", function() {

    var playButton = document.querySelector('#play_btn');   
    var pauseButton = document.querySelector('#pause_btn');

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
var nextBtn = document.querySelector('#next_btn');

nextBtn.addEventListener("click", function(){


});

//Prev Button

      
//function for timeline

audioPlayer.addEventListener("timeupdate", function() {

    let progressBar = document.querySelector('.progressbar_range');
    let currentTime = audioPlayer.currentTime;
        duration = audioPlayer.duration;    
        progressBar.setAttribute('style', 'width:' + (currentTime + 0.25) / duration * 100 + '%' );

});

//show the times

audioPlayer.addEventListener("timeupdate", function() {
    let currentTimeDisplay = document.querySelector('#current_time');
    let durationDisplay = document.querySelector('#timelenght');

        duration = parseInt( audioPlayer.duration );
        currentTime = parseInt( audioPlayer.currentTime );
    
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

audioListPlay();