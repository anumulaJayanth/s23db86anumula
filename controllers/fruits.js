var Fruit = require('../models/fruit');
// List of all Costumes
exports.fruit_list = async function(req, res) {
    try{
        thefruits = await Fruit.find();
        res.send(thefruits);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
};
// for a specific Costume.
exports.fruit_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.fruit_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete form on DELETE.
exports.fruit_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.fruit_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
