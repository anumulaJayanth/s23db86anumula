var express = require('express');
const fruit_controlers = require('../controllers/fruits')
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET home page. */
router.get('/', fruit_controlers.fruit_view_all_Page);
/* GET detail costume page */
router.get('/detail', fruit_controlers.fruit_view_one_Page)
router.get('/create', secured, fruit_controlers.fruit_create_Page)
router.get('/update', secured, fruit_controlers.fruit_update_Page)
router.get('/delete', secured, fruit_controlers.fruit_delete_Page)

module.exports = router;
