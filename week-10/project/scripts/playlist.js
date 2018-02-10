'use strict'

const playList = (function(playListData) {

    var playListId = 0;
    const renderPlayList = function(playListData) {  
        var playListShow = document.querySelector('#playlist');
        playListData.forEach( (oneElement) => {
            let li = document.createElement('li');
                li.innerHTML =  oneElement.playlist_title;
                li.addEventListener('click', function(playListId){
                    playListId = oneElement.playlist_id;
                    getTracks(this.playListId, renderTrackList());
                });
            playListShow.appendChild(li);
        });
    }


    const AddPlaylistDialog = function(dialogTitle) {
        const dialogRootElement = document.querySelector('.dialog')
        const title = dialogRootElement.querySelector('h3');
        const button = dialogRootElement.querySelector('#send_playlist');
        const input = dialogRootElement.querySelector('input');
        const closeBtn = dialogRootElement.querySelector('div');
        title.textContent = dialogTitle;


        button.addEventListener('click', (e) => {
            create(input.value);
            console.log(input.value);
            input.value='';
            dialogRootElement.style.display = 'none';
        });


        closeBtn.addEventListener('click', (e) => {
            close();
        });


        function close() {
            dialogRootElement.style.display = 'none';
        }


        function show() {
            dialogRootElement.style.display = 'block';
        }
    }

    let create = function(playlistName){
        let playlistBlock = document.querySelector('#playlist')
           playlistBlock.innerHTML = '';
        let postData = {"playlist_title": playlistName};
            sendNewPlayList(postData);
            getPlayList();
        }

     return {
        playlist:playList,
        renderPlayList: renderPlayList,
        AddPlaylistDialog: AddPlaylistDialog
    }
});