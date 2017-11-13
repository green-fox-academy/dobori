
function audioPlayer(){
    var currentSong = 0;
    var audioPlayer = document.querySelector("#audioPlayer");
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

audioPlayer();