const DataStorage = require('nedb');
const db = new DataStorage({ filename: './data/notes.db', autoload: true });



// GET ohne ID
exports.getAllNotes = (req, res) => {
    console.log("hi, i was used");
    db.find({}, (error, data) => {
        res.json(data);
    });
};


// POST ohne ID
exports.addNewNote = (req, res) => {
    console.log("I was used");
    db.insert(req.body, (error, data) => {
        res.json(req.body);
    });
}
 
//PATCH mit ID
exports.updateNote = (req, res) => {
    db.update(req.body, (error, data) => {
        res.json(req.body);
    });
}

//DELETE mit ID

exports.deleteNote =  (req, res) => {
    db.remove({_id: req.params.noteID}, (error, numRemoved) => {
        res.json(numRemoved);
    });
};




/* exports.updateOneNote = (req, res) => {
    db.update({_id: req.params.noteID}, req.body, (error, numReplaced) => {
        res.json(numReplaced);
    });
};
 */