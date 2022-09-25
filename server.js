const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const { createsNote, deletesNote} = require('./lib/createDelete');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes go here

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });