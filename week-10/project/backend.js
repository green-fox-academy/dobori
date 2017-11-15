'use strict';

var express = require('express');

var app = express ();
express.json.type = "application/json"
app.use(express.json());

app.use('/assets', express.static('./assets'));
app.use('/css', express.static('./css'));
app.use('/music', express.static('./music'));
app.use('/scripts', express.static('./scripts'));

var playLists = [
	{ "id": 1, "title": "Favorites", "system": 1},
	{ "id": 2, "title": "Music for programming", "system": 0},
	{ "id": 3, "title": "Driving", "system": 0},
	{ "id": 5, "title": "Fox house", "system": 0},
]

var tracks =[
    { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "music/Ars_Sonor_-_02_-_Never_Give_Up.mp3" },
    { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "music/Organoid_-_09_-_Purple_Drift.mp3" }
]


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/playlists', function(req, res){
    res.json(playLists);   
});

app.get('/playlist-tracks', function(req, res){
    res.json(tracks); 
});

app.listen(8080);