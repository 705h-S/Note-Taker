const fs = require("fs");
const path = require("path");
const util = require("util");
const express = require("express");
const app = express();


const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class save {
    constructor(){
        this.note = 0;
    };
    write(note) {
        return writeFileAsync(path.join(__dirname, "db.json"), JSON.stringify(note));
    };
    read() {
        return readFileAsync(path.join(__dirname, "db.json"), "utf8");
    };
    getNotes() {
        return this.read().then(notes => { 
            
            let parsedNotes = JSON.parse(notes);
            console.log(parsedNotes);
            return parsedNotes;
        });
    };
    
    addNote(newNote) {
        
        console.log(newNote);
        return this.getNotes().then(notes => {
            const newNoteList = [...notes, newNote]; 
            console.log(newNoteList);
            // Step 1: convert to a string
            return this.write(newNoteList);
        })
    
    };
};

const save = new save();

module.exports = save;
