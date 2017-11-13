'use strict';

var express = require('express');
var app = express ();

express.json.type = "application/json"

app.use(express.json());
app.use('/assets', express.static('./assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + 'assets/index.html');
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

app.get('/appenda/:appa', function(req, res){
    res.json({
            "appended": req.params.appa + "a"
    });

});


app.post('/dountil/:what', function(req, res){
    let whatToDo = req.params.what;
    let number = req.body.until;

    if (whatToDo === "sum"){
        let summa = 0;
        for (let i = 0; i <= number; i++){
            summa += i; 
        }
        res.json({
            "result": summa
        });
    } else if (whatToDo === "factor"){
        let factor = 1;
        for (let j = 1; j <= number; j++){
            factor *= j; 
        }
        res.json({
            "result": factor
        });
    }
});


app.listen(8080);