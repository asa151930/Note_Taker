const fs = require('fs');
const path = require('path');  


// routes 

// Basic routes that would send the user to AJAX page
app.get('/assets/js/index.js', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

