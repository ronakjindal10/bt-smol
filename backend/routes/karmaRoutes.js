const express = require('express');
const router = express.Router();
const { increaseKarma } = require('../controllers/karmaController');
const { protect } = require('../middleware/authMiddleware');

router.route('/:contactId').put(protect, increaseKarma);

module.exports = router;