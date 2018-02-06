'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var MyPlayListItem = require('./playlistitem');
require('./css/style.css');

// { "id": 2, "title": "Music for programming", "system": 0},
// { "id": 3, "title": "Driving", "system": 0},
// { "id": 5, "title": "Fox house", "system": 0},
// var tracks =[
//     { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "music/Ars_Sonor_-_02_-_Never_Give_Up.mp3" },
//     { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "music/Organoid_-_09_-_Purple_Drift.mp3" }
// ]

class MusicPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            myPlayList: ['wash up', 'eat some cheese', 'take a nap']
        };
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(item){
        var updatedPlayList = this.state.myPlayList.filter(function(val, index){
            return item !== val;
        });
        this.setState({
            myPlayList: updatedPlayList
        });
    }
  
    render(){
        var myPlayList = this.state.myPlayList;
        myPlayList = myPlayList.map(function(item, index){
            return(<MyPlayListItem key={index} item={item} onDelete={this.onDelete}/>
            );
        }.bind(this));

        return(
            <div id="full_wrapper">
                <div class="half">
                    <div class="header">
                        <h4>Playlists</h4>
                    </div>
                    <ul id="playlist">{myPlayList}</ul>
                </div>
                <div class="half"></div>
            </div>
        );
    }

};

ReactDOM.render( <MusicPlayer />, document.getElementById('full_player'));