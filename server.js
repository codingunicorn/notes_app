var express = require('express');
var http = require('http').Server(app);
var bodyparser = require('body-parser');
var path = require('path');
var db = require('./public/js/database.js');
var app = express();
var handlebars = require('handlebars');


//Bodyparser Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


//set static paths
app.use(express.static(path.join(__dirname, 'public'))); //this makes my server work yay :)


//REST API
app.route('/api/notes')
.get((req, res) => {db.getAllNotes(req, res);})
.post(db.addNewNote)
.patch(db.updateNote);

app.route('/api/notes/:noteID')
.delete(db.deleteNote);
   

app.listen(2000, 'localhost', () => {
    console.log('server läuft'); 
});



