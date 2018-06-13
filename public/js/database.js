const DataStore = require('nedb');
const db = new DataStore({ filename: './data/notes.db', autoload: true });

console.log("I'm the database");