'use strict';

var express = require('express');
var app = express ();

express.json.type = "application/json"
app.use('/assets', express.static('./assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function(req, res){
    var doubleStuff = req.query.input;
    var toDouble = parseInt(doubleStuff);
    if (!toDouble){
        res.json({
            "error": "Please provide an input!"
        });
    } else {
        res.json({
            "received": toDouble,
            "result": toDouble * 2
        } );
    };
});

app.get('/greeter', function(req, res){
    let nameToGreet = req.query.name;
    let titleToGreet = req.query.title;
    if (!nameToGreet){
        res.json({
            "error": "Please provide a name!"
        });
    } else if (!titleToGreet){
        res.json({
            "error": "Please provide a title!"
        });
    } 
    
    else {
        res.json({
            "welcome_message": "Oh, hi there " + nameToGreet + ", my dear "+ titleToGreet + "!"
        });
    }
});


app.listen(8080);