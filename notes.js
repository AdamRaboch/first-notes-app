const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) =>  {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(notes => notes.title === title)
    const duplicateNote = notes.find(notes => notes.title === title)
if (!duplicateNote) {
    notes.push({
        title: title,
        body: body
    })
    saveNote(notes)
    console.log(chalk.green.bold('New note added...', title))
} else {
    console.log(chalk.red.bold('Note title taken!'))
}
}

const saveNote = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes  = () =>  {
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
}  catch (e) {
    return []
}
}
const removeNote = title => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(notes => notes.title != title);
    if (duplicateNotes.length === notes.length) {
        console.log(chalk.red.bold('No note found!'))
    } else {console.log(chalk.green.bold('Note removed!'))
    saveNote(duplicateNotes);
}
}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellowBright('Your notes:'))
    notes.forEach(note => {
        console.log(chalk.blue.bold(note.title, note.body))
    });
}

const readNote = title => {
    const notes = loadNotes();
    const foundNote = notes.find(note => note.title === title)
    if (foundNote) {console.log(chalk.magentaBright(foundNote.title)); console.log(foundNote.body)
    } else {
        console.log(chalk.red('Note Not found!'))
    }
}

module.exports = {
    herokuaddNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
