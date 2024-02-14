const express = require('express');
const router = express.Router();

// Import controllers
const { createUser } = require('../controllers/auth');



router.post('/api/users', createUser);
// router.post('/api/login', loginUser);

module.exports = router;