
const express = require('express');

const router = express.Router();

const noteController = require('../controller/note');

router.get('/get-notes',noteController.getNotes);
router.post('/add-note',noteController.addNote);
router.delete('/delete-note/:id',noteController.deleteNote);

module.exports = router;