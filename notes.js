const fs = require("fs");

const loadNote = () => {
    try {
        var bufferData = fs.readFileSync('notes.json');
        var bufferJson = bufferData.toString();
        return JSON.parse(bufferJson);
    } catch(e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const readNote = (title) => {
    let notes = loadNote();
    var filterNote = notes.find((note) => note.title == title);
    if (filterNote.length) {
        console.log(filterNote.body);
    } else {
        console.log('Note not Found');
    }
}

const getAllNotes = () => {
    let notes = loadNote();
    var filterNote = notes.forEach((note) => console.log(note.title));
}

const addNote = (title, body) => {
    let notes = loadNote();
    var hasDuplicate = notes.some(function(note){
        return note.title == title;
    });

    if (hasDuplicate) {
        console.log('Note Title alredy taken');
    } else {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('Note added');
    }
}

const removeNote = (title) => {
    let notes = loadNote();

    var hasNote = notes.some(function(note){
        return note.title === title;
    });

    if (hasNote) {
        notes = notes.filter(function(note){
            return note.title !== title;
        });
        saveNotes(notes);
        console.log('Note remove');
    } else {
        console.log('Note not Found');
    }
}

module.exports = {
    addNote,
    removeNote,
    getAllNotes,
    readNote
}