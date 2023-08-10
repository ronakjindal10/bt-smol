```javascript
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for Google Sign In/Up
router.post('/google', authController.googleAuth);

module.exports = router;
```