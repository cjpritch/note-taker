const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const { createNote, deleteNote} = require('./lib/createDelete');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
  });

app.get('/api/notes', (req, res) => {
  res.json(notes)
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.post('/api/notes', (req, res) => {
req.body.id = notes.length.toString();
let note = createNote(req.body, notes);
res.json(notes);
  });    

app.delete('/api/notes/:id', (req, res) => {
  deleteNote(notes, req.params.id);
  res.json(notes);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });