const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

// Route to get all contacts of a user
router.get('/contacts', contactController.getContacts);

// Route to increase karma of a contact
router.post('/contacts/:id/karma', contactController.increaseContactKarma);

module.exports = router;