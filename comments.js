// Create web server
const express = require('express');
const app = express();

// Importing the routes from the comments.js file
const comments = require('./comments.js');

// Use the imported routes
app.use('/comments', comments);

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
