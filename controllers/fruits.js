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
exports.fruit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Fruit.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }
// Handle Costume create on POST.
exports.fruit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Fruit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.color = req.body.color;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } ;
};
// Handle Costume delete form on DELETE.
exports.fruit_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.fruit_update_put =  async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Fruit.findById( req.params.id)
    // Do updates of properties
    if(req.body.name) 
    toUpdate.name = req.body.name;
    if(req.body.color) toUpdate.color = req.body.color;
    if(req.body.price) toUpdate.size = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
   };
// VIEWS
// Handle a show all view
exports.fruit_view_all_Page = async function(req, res) {
    try{
    console.log("IN")
    thefruits = await Fruit.find();
    console.log(thefruits)
    res.render('fruits', { title: 'Search Results - Fruits', results: thefruits });
    }
    catch(err){
    //res.status(500);
    res.send(`{"error": ${err}}`);
    }
}