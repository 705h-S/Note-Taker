// Dependencies
const path = require('path');
const eRoute = require('express').Router();

// This has to be on the top than the other routers
eRoute.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

eRoute.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// If no matching route is found default to home page
eRoute.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = eRoute;
