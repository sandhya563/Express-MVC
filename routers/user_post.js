const express = require('express');
const router = express.Router();
const {userget, userpost, userupdate, userdelete} = require('../controller/user_post')

//  The following routers are for the user post  table.
router.get('/user-post-data', userget);
router.post('/user-post', userpost);
router.put('/user-post-edit/:id', userupdate);
router.delete('/user-post-delete/:id', userdelete);


module.exports = router