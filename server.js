// Dependencies
const express = require('express');
const fs = require ('fs');
const path = require('path');

// Sets up express app
const app = express();
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

const notes = [];

// Routes - link routes
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, '/db/db.json')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));


// Set up api routes 
app.get('/api/notes', (req, res) => res.json(notes));


// Create new notes - takes in JSON input
app.post ('/api/notes',(req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
    console.log('Added a new note: ' + newNote);
});

// Site is live..
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

// Whats the next step??