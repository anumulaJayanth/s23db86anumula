var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fruit_controller = require('../controllers/fruits');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/fruits', fruit_controller.fruit_create_post);
// DELETE request to delete Costume.
router.delete('/fruits/:id', fruit_controller.fruit_delete);
// PUT request to update Costume.
router.put('/fruits/:id', fruit_controller.fruit_update_put);
// GET request for one Costume.
router.get('/fruits/:id', fruit_controller.fruit_detail);
// GET request for list of all Costume items.
router.get('/fruits', fruit_controller.fruit_list);

module.exports = router