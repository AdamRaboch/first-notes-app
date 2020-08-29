const yargs = require('yargs');
const chalk = require('chalk');
const noteFunctions= require('./notes.js');
//const { demandOption } = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'strings'
        },
    },
    handler(argv) {
        noteFunctions.addNote(argv.title, argv.body)
    }
});
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'strings'
        },
    },
    handler(argv) {
        noteFunctions.removeNote(argv.title)
    }
})
yargs.command({
        command: 'list',
        describe: 'list the notes',
        handler() {
            console.log('Here is the list of...')
            noteFunctions.listNotes()
        }
    });
yargs.command({
            command: 'read',
            describe: 'Read a note',
            builder: {
                title: {
                    describe: 'Note Title',
                    demandOption: true,
                    type: 'strings'
                },
            },
            handler(argv) {
                noteFunctions.readNote(argv.title);
            }            

})    

yargs.parse();
