const express = require('express');
const fs = require('fs');
const path = require('path');
// Sets up express app
const app = express();
var PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "notes.html"))
); 
// Set up api routes
app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data); // Routes - link routes
    res.json(notes);
  });
}); 
// Create new notes - takes in JSON input
app.post("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
    let newNote = req.body;
    notes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (e, d) => {
      res.json(200);
    })
  });
}); 
// delete note with a specific id
app.delete("/api/notes/:id", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
    notes = notes.filter((note) => note.id !== req.params.id);
    console.log(notes);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (e, d) => {
      res.json(200);
    })
  });
});
// Site is live..
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});