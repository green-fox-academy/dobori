'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyPlayListItem from './playlistitem';
import MyTrackListItem from './tracklistitem';
import AudioPlayer from 'react-responsive-audio-player';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import swal from 'sweetalert';
import { onPlayListClick } from './functions';

require('./css/style.css');
require('./css/player.css');

var jsmediatags = require('jsmediatags');


const playListUrl = "http://localhost:8080/playlists";
const trackListUrl = "http://localhost:8080/playlist-tracks/";

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact={true} path={'/'} component={MusicPlayer} />
                </Switch>
            </Router>
        );
    }
};

class MusicPlayer extends React.Component{
    constructor(props){
        super(props);    
        this.state = { 
            myPlayList: [],
            myTrackList: [],
            currentTrack: [],
        };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onPlayListClick = this.onPlayListClick.bind(this);
        this.onTrackListClick = this.onTrackListClick.bind(this);
        this.makeDataForUse = this.makeDataForUse.bind(this);
    }
        
    componentDidMount(){
        fetch(playListUrl).then( data => data.json())        
        .then( data => {
            this.setState({
                myPlayList: data
            })
        })
        fetch(trackListUrl).then( trackdata => trackdata.json())        
        .then(trackdata => {
            this.makeDataForUse(trackdata) 
        })
    }

    makeDataForUse(trackdata){
        var makeTrackData = [];
        for (var i = 0; i < trackdata.length; i++) {
            makeTrackData.push({url: trackdata[i].path, displayText: trackdata[i].artist + " - " + trackdata[i].title, playlist_id: trackdata[i].playlist_id})
        }
        this.setState({
            myTrackList: makeTrackData
        })
    }

    onPlayListClick(item){   
        var selectedPlaylist = this.state.myPlayList.filter(function(val){
            return item === val.playlist_title;
        });
        if (selectedPlaylist[0].playlist_id === 0){
            this.componentDidMount()
        } else {
            fetch(trackListUrl + selectedPlaylist[0].playlist_id)
            .then( data => data.json())        
            .then( data => {
                this.makeDataForUse(data) 
            });  
        } 
    }

    onTrackListClick(item){
        var selectedTrack = this.state.myTrackList.filter(function(val, index){
            return item === val.displayText;
        });

        this.setState({
            currentTrack: selectedTrack,
        })

        let currentUrl = "http://localhost:8080/" + selectedTrack[0].url;

        jsmediatags.read(currentUrl, {
            onSuccess: function(tag) {
                var currentImage = tag.tags.picture;
                console.log(currentImage)
                if (currentImage) {
                    var base64String = "";
                    for (var i = 0; i < currentImage.data.length; i++) {
                        base64String += String.fromCharCode(currentImage.data[i]);
                    }
                    var base64 = "data:" + currentImage.format + "; base64," + window.btoa(base64String);
                    document.getElementById('picture').setAttribute('style','background-image: url(' + base64 + ');')
                } else {
                    document.getElementById('picture').setAttribute('style','background-image: url(./assets/music-placeholder.png)')
                }
            },
            onError: function(error) {
              console.log(':(', error.type, error.info);
            }
        });
     
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
                    return item !== val.playlist_title;
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
            updatedPlayList.push({"id": 8, "playlist_title": inputValue, "system": 0});
            this.setState({
                myPlayList: updatedPlayList
            });
        });
          
    }
      
    render(){
        var myPlayList = this.state.myPlayList;
        myPlayList = myPlayList.map(function(item, index){
            return(<MyPlayListItem key={index} item={item.playlist_title} onDelete={this.onDelete} onPlayListClick={this.onPlayListClick}/>
            );
        }.bind(this));
        var myTrackList = this.state.myTrackList;
        myTrackList = myTrackList.map(function(item, index){
            return(<MyTrackListItem key={index} item={item.displayText} onDelete={this.onDelete} onTrackListClick={this.onTrackListClick}/>
            );
        }.bind(this));
        let myTrack = []; 
        if (this.state.currentTrack.length === 0){
            myTrack = this.state.myTrackList;
        } else {
            myTrack = this.state.currentTrack;
        }
        return(
            <div id="full-wrapper">
                <div className="half">
                    <div className="header">
                        <h4>My playlists</h4>
                        <button onClick={this.onAdd} className="plus"></button>
                    </div>
                    <ul id="playlist">{myPlayList}</ul>
                    
                </div>
                <div className="half">
                    <div className="header">
                        <h4>My tracks</h4>
                    </div>
                    <ul id="tracklist">{myTrackList}</ul> 
                </div>
                <div id="picture"></div>
                <AudioPlayer playlist={myTrack} autoplay={true} autoplayDelayInSeconds={1} controls={['backskip', 'playpause', 'forwardskip', 'progress']}/>
            </div>
        );
    }

};

ReactDOM.render( <App />, document.getElementById('full-player'));