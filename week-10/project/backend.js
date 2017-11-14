'use strict';

var express = require('express');

var app = express ();
express.json.type = "application/json"
app.use(express.json());

app.use('/assets', express.static('./assets'));
app.use('/css', express.static('./css'));
app.use('/music', express.static('./music'));
app.use('/scripts', express.static('./scripts'));



app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/foxplayer', function(req, res){

    var datas = {
        "album": [
          { "track": "John", "src":"Ars_Sonor_-_02_-_Never_Give_Up.mp3"},
          { "track": "Paul", "src":"Organoid_-_09_-_Purple_Drift.mp3"},
          { "track": "George", "src":"Organoid_-_09_-_Purple_Drift.mp3"},
          { "track": "Ringo","src":"Ars_Sonor_-_02_-_Never_Give_Up.mp3"}
        ]
       }

        res.json(datas); 
    });

app.listen(8080);