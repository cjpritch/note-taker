const fs = require("fs");
const path = require("path");

// creates a new note 
function createsNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
// writes it to db.json file 
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notesArray
        }, null, 2)
    )

    return note;
};
// deletes a note
function deletesNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
};

module.exports = { createsNote, deletesNote };