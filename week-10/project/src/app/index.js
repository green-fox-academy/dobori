'use strict';

import React from 'react';
var ReactDOM = require('react-dom');
var MyPlayListItem = require('./playlistitem');
var AddItem = require('./additem');
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import swal from 'sweetalert';
require('./css/style.css');

// { "id": 2, "title": "Music for programming", "system": 0},
// { "id": 3, "title": "Driving", "system": 0},
// { "id": 5, "title": "Fox house", "system": 0},
// var tracks =[
//     { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "music/Ars_Sonor_-_02_-_Never_Give_Up.mp3" },
//     { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "music/Organoid_-_09_-_Purple_Drift.mp3" }
// ]

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact={true} path={'/'} component={MusicPlayer} />
                    <Route path={'/about'} component={AddItem} />
                </Switch>
            </Router>
        );
    }
};

class MusicPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            myPlayList: [{ "id": 2, "title": "Music for programming", "system": 0},
                { "id": 3, "title": "Driving", "system": 0},
                { "id": 5, "title": "Fox house", "system": 0}
            ],
            myTrackList: [{ "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "music/Ars_Sonor_-_02_-_Never_Give_Up.mp3" },
                { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "music/Organoid_-_09_-_Purple_Drift.mp3" }
            ]
        };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onDelete(item){
        swal({
            title: 'Are you sure you want to delete this playlist?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((isDeleted) => {
            if (isDeleted) {
                var updatedPlayList = this.state.myPlayList.filter(function(val, index){
                    return item !== val.title;
                });
                this.setState({
                    myPlayList: updatedPlayList
                });
                swal('Your playlist has been deleted!', {
                    icon: 'success',
                    timer: 1600,
                    buttons: false,
                });
            } else {
                swal({
                    text: 'Your playlist is in safe!',
                    timer: 1600,
                    buttons: false,
                });
            }
        });
    }

    onAdd(){
        swal({
            text: "Add new playlist:",
            content: "input",
            closeModal: false,
            placeholder: "Write here a playlist name",
        })
        .then((inputValue) => {
            if (inputValue === false) return false;
            
            if (inputValue === "") {
                swal({
                    text:"You did not write anything, I will close this window",
                    buttons: false,
                    timer: 2000,
                });
                return false
            }
            
            var updatedPlayList = this.state.myPlayList;
            updatedPlayList.push({"id": 8, "title": inputValue, "system": 0});
            this.setState({
                myPlayList: updatedPlayList
            });
        });
          
    }
  
    render(){
        var myPlayList = this.state.myPlayList;
        myPlayList = myPlayList.map(function(item, index){
            return(<MyPlayListItem key={index} item={item.title} onDelete={this.onDelete}/>
            );
        }.bind(this));
        var myTrackList = this.state.myTrackList;
        myTrackList = myTrackList.map(function(item, index){
            return(<MyPlayListItem key={index} item={item.title} onDelete={this.onDelete}/>
            );
        }.bind(this));

        return(
            <div id="full-wrapper">
                <div className="half">
                    <div className="header">
                        <h4>Playlists</h4>
                        <button onClick={this.onAdd}>Add playlist</button>
                    </div>
                    <ul id="playlist">{myPlayList}</ul>
                    
                </div>
                <div className="half">
                    <ul id="tracklist">{myTrackList}</ul> 
                </div>
            </div>
        );
    }

};

ReactDOM.render( <App />, document.getElementById('full-player'));