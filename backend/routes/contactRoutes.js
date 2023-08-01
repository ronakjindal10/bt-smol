const express = require('express');
const router = express.Router();
const { getContacts, storeContacts } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getContacts);
router.route('/store').post(protect, storeContacts);

module.exports = router;