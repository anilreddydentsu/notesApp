const yargs = require("yargs");
const { addNote, removeNote, getAllNotes} = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add note!!',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'This is Title of Note!!'
        },
        body: {
            type: 'string',
            demandOption: true,
            describe: 'This is body!!'
        }
    },
    handler: function(argv) {
        addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Rempoves the note!!',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'This is Title of Note!!'
        }
    },
    handler: function(argv) {
        removeNote(argv.title);
    }
});

yargs.command({
    command: 'notelist',
    describe: 'Prints all notes!!',
    handler: function(argv) {
        getAllNotes();
    }
});

yargs.command({
    command: 'readnote',
    describe: 'Read notes!!',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'This is Title of Note!!'
        }
    },
    handler: function(argv) {
        readNote(argv.title);
    }
});

yargs.parse();