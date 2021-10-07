const express = require('express');
const router = express.Router();
const {users, userinfo} = require('../controller/users');

router.get('/users',users)
router.post('/user_registration', userinfo)
module.exports = router