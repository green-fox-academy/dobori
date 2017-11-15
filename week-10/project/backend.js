'use strict';

var express = require('express');
var mysql = require('mysql');

var app = express ();
express.json.type = "application/json"
app.use(express.json());

app.use('/assets', express.static('./assets'));
app.use('/css', express.static('./css'));
app.use('/music', express.static('./music'));
app.use('/scripts', express.static('./scripts'));

var connection = mysql.createConnection({
    host: "localhost",
    user: "'root'",
    password: "root",
    database: "foxplayer"
});

connection.connect(function(err){
    if(err){
      console.log("Error connecting to Db");
      return;
    }
    console.log("DB connection is established :)");
});

// var playLists = [
// 	{ "id": 1, "title": "Favorites", "system": 1},
// 	{ "id": 2, "title": "Music for programming", "system": 0},
// 	{ "id": 3, "title": "Driving", "system": 0},
// 	{ "id": 5, "title": "Fox house", "system": 0},
// ]

// var tracks =[
//     { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "music/Ars_Sonor_-_02_-_Never_Give_Up.mp3" },
//     { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "music/Organoid_-_09_-_Purple_Drift.mp3" }
// ]


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/playlists/', function(req, res){

    const playList = connection.query(`SELECT playlist_title, system FROM Playlists`, 

    function(err, playList){
        if(err){
            console.log("Something went wrong");
        }
        res.send(playList); 
    });   
});



app.get('/playlist-tracks/', function(req, res){

    var tracks = connection.query(`SELECT tracks.path, tracks.title, tracks.artist, playlist_id FROM tracks`, 
    
    function(err, tracks){
        if(err){
            console.log("Something went wrong");
        }
            res.send(tracks); 
        });
});

app.get('/playlist-tracks/:id', function(req, res){
    var id = req.params.id;
    console.log(id)
    var tracks = connection.query(`SELECT path, title, artist, playlist_id FROM tracks WHERE tracks.playlist_id = ${id}`, 
    
    function(err, tracks){
        if(err){
            console.log("Something went wrong");
        }
            res.send(tracks); 
        });
});

app.listen(8080);