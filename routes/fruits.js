var express = require('express');
const fruit_controlers= require('../controllers/fruits')
var router = express.Router();

/* GET home page. */
router.get('/', fruit_controlers.fruit_view_all_Page);

module.exports = router;
