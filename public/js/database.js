const DataStorage = require('nedb');
const db = new DataStorage({ filename: './data/notes.db', autoload: true });



// GET ohne ID
exports.getAllNotes = (req, res) => {
    db.find({}, (error, data) => {
        res.json(data);
    });
};


// POST ohne ID
exports.addNewNote = (req, res) => {
    db.insert(req.body, (error, data) => {
        res.json(req.body);
    });
}
  