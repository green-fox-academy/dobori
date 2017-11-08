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


app.listen(8080);