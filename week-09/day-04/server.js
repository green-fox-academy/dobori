'use strict';

var express = require('express');
var mysql = require('mysql');

var app = express ();
express.json.type = "application/json"
app.use(express.json());

app.use('/assets', express.static('./assets'));


var connection = mysql.createConnection({
    host: "localhost",
    user: "'root'",
    password: "root",
    database: "bookstore"
});


connection.connect(function(err){
    if(err){
      console.log("Error connecting to Db");
      return;
    }
    console.log("DB connection is established :)");
});


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/books', function(req, res){

    if (!req.query.category){ 
        var addToSelect= "";
    } else {
        let categoryName = req.query.category;
        addToSelect= "WHERE category.cate_descrip = \'" + categoryName + "\'";
    };

    connection.query(`SELECT book_name, book_price, aut_name, cate_descrip, pub_name FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id ${addToSelect}`, 

    
    function(err, result){
        if(err){
            console.log("Something went wrong");
        }
        res.json(result); 
    });
});




//         connection.query(`
//         SELECT b.book_name, b.book_price, a.aut_name, c.cate_descrip, p.pub_name 
//         FROM book_mast b, author a, category c, publisher p 
//         WHERE b.aut_id = a.aut_id AND b.cate_id = c.cate_id AND b.pub_id = p.pub_id AND c.cate_descrip = ${categoryName};
//         `,


app.listen(8080);
