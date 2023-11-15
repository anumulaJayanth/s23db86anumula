var express = require('express');
const fruit_controlers= require('../controllers/fruits')
var router = express.Router();

/* GET home page. */
router.get('/', fruit_controlers.fruit_view_all_Page);
/* GET detail costume page */
router.get('/detail', fruit_controlers.fruit_view_one_Page)
router.get('/create', fruit_controlers.fruit_create_Page)
router.get('/update', fruit_controlers.fruit_update_Page)
router.get('/delete', fruit_controlers.fruit_delete_Page)

module.exports = router;
