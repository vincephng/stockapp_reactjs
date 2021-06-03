const express = require('express');
const router = express.Router();
const {validateToken} = require('../controllers/validations')
const  {UserInfo} = require('../controllers/GetUserInfo')

router.get('/user/data', validateToken, UserInfo);

module.exports = router;