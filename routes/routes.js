const fs = require('fs');
const path = require('path'); 

module.exports = app => {

fs.readFile(`${__dirname}/db/db.json`, (err, data) => {
    if (err) throw err;
    
});
// Set up api routes 
app.get('/api/notes', function (req, res){
    res.json(notes);
});

// Create new notes - takes in JSON input
app.post ('/api/notes', function (req, res){
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
    console.log('Added a new note: ' + newNote);
});



}