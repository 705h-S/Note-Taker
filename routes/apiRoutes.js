const eRoute = require('express').Router();
const fs = require('fs');
const save = require('../db/save');
const db = require('../db/db.json');


eRoute.get('public/notes.html',function (reg, res) {
    save 
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
});
eRoute.post('/notes', (req, res) => {
    save
    .saveNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});


module.exports = eRoute;