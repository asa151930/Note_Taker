// Dependencies
const express = require('express');
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

// Sets up express app
const app = express();
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);


    // Routes - link routes
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));


    // Set up api routes 
    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });


    // Create new notes - takes in JSON input
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        notes.push(newNote);
        res.json(200)
        return console.log('Added a new note: ' + newNote);
    });

    // Takes out the Test note
   app.get('api/notes/:id', (req, res) => {
        res.json(notes[req.params.id]);
    });

    // delete note with a specific id
    app.delete('/api/notes/:id', (req, res) => {
        notes.splice(req.params.id, 1);
        
    });
});

// Site is live..
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});



