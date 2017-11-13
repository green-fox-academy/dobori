
var audioPlayer = document.querySelector("#audioPlayer");

function audioListPlay(){
    var currentSong = 0;

        track = document.querySelectorAll("a");
        audioPlayer.src = track[0].href;
        audioPlayer.play();

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
        




audioListPlay();


// var for audio content

// var audio = document.querySelector("#audioPlayer");

// html5 function - toggle play/pause btn and audio



// function for timeline

// audio.addEventListener("timeupdate", function() {
//     var currentTime = audio.currentTime,
//         duration = audio.duration,
//         currentTimeMs = audio.currentTime * 1000;
//     $('.progressbar_range').stop(true, true).animate({'width': (currentTime + .25) / duration * 100 + '%'}, 250, 'linear');
// });


// count function for timeleft

// audio.addEventListener("timeupdate", function() {
//     var timeleft = document.getElementById('timeleft'),
//         duration = parseInt( audio.duration ),
//         currentTime = parseInt( audio.currentTime ),
//         timeLeft = duration - currentTime,
//         s, m;
    
//     s = timeLeft % 60;
//     m = Math.floor( timeLeft / 60 ) % 60;
    
//     s = s < 10 ? "0"+s : s;
//     m = m < 10 ? "0"+m : m;
    
//     $('#timeleft').text("-"+m+":"+s);
    
// });