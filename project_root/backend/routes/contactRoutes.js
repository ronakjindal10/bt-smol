const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/contacts', contactController.getContacts);
router.post('/contacts/:id/karma', contactController.increaseKarma);

module.exports = router;