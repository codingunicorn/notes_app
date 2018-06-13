var express = require('express');
var http = require('http').Server(app);
var bodyparser = require('body-parser');
var path = require('path');
//var notesDB = require('./js/database.js');


var app = express();


//Bodyparser Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


//set static paths
app.use(express.static(path.join(__dirname, 'public'))); //this makes my server work yay :)

// Dateisystem für Handlebars (falls es das noch braucht)
//app.route('/handlebars/:filename').get((req, res) => { res.sendFile(__dirname + '/handlebars/' + req.params.filename); });


// start Server(?)
app.get('/', function (req, res) {
  res.render('index');
  res.send('Server started');
});



// TODO: REST API



app.listen(2000, 'localhost', () => {
    console.log('server läuft'); 
});



