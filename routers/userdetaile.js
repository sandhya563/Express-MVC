const express = require('express');
const router = express.Router();
const {userGet, userPost, userUpdate, userDelete} = require('../controller/users_registration');

// The following routers are for the  user registration table.
router.get('/user-registration-data', userGet);
router.post('/user-registration', userPost);
router.put('/user-registration-edit/:id', userUpdate);
router.delete('/user-registration-delete/:id', userDelete);

module.exports = router