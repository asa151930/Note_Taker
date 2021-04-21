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

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

