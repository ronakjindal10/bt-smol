const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.route('/user').get(protect, authController.getUser);

module.exports = router;