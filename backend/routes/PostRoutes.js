var express = require('express');
var router = express.Router();
const {register,login} = require('../controllers/AuthController');
const { sendEmail } = require('../controllers/SendEmailController');
const { addingTicker,removingTicker } = require('../controllers/TickerController');

router.post('/signup', register);
router.post('/login', login);
router.post('/stockAdd', addingTicker)
router.post('/removeTicker', removingTicker)
router.post('/sendEmail',sendEmail)
module.exports = router;
