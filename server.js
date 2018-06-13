var express = require('express');
var http = require('http').Server(app);
var app = express();
var bodyparser = require('body-parser');
var notesDB = require('./js/database.js');

//app.use(bodyparser.json());
//app.use(bodyparser.urlencoded({extended: true})); 
app.use(express.static('js'));
app.use(express.static('notes-pwa'));
app.use('/static', express.static('public'));


// Dateisystem
app.get('/', express.static(__dirname));
app.get('/js/', express.static(__dirname));
app.route('/:filename').get((req, res) => { res.sendFile(__dirname + '/' + req.params.filename); });
//app.route('/handlebars/:filename').get((req, res) => { res.sendFile(__dirname + '/handlebars/' + req.params.filename); });

// REST API
/* app.route('/api/notes')
.get((req, res) => {notesDB.getAllNotes(req, res);})
.post(notesDB.addNewNote); */  

/* app.route('/api/notes/:noteID')
.get(notesDB.getOneNote)
.delete(notesDB.removeOneNote)
.put(notesDB.updateOneNote); */

app.listen(2000, 'localhost', () => {
    console.log('server läuft'); 
});



/* var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); */