const express = require('express');
const { getBooks } = require('../controllers/bookController');
const router = express.Router();

// Route to get a list of books
router.get('/', getBooks);

module.exports = router;
