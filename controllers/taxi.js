var taxi = require('../models/taxi');
// List of all taxi

// List of all taxi
exports.taxi_list = async function(req, res) {
    try{
    thetaxi = await taxi.find();
    res.send(thetaxi);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    //List of all taxi
    exports.taxi_list = async function(req, res) {
    try{
    thetaxi = await taxi.find();
    res.send(thetaxi);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
  
    
    
// for a specific taxi.
exports.taxi_detail = function(req, res) {
res.send('NOT IMPLEMENTED: taxi detail: ' + req.params.id);
};
// Handle taxi create on POST.
// Handle taxi create on POST.
exports.taxi_create_post = async function(req, res) {
    console.log(req.body)
    let document = new taxi();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"taxi_type":"goat", "cost":12, "size":"large"}
    document.taxi = req.body.taxi;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle taxi delete form on DELETE.
exports.taxi_delete = function(req, res) {
res.send('NOT IMPLEMENTED: taxi delete DELETE ' + req.params.id);
};
// Handle taxi update form on PUT.
exports.taxi_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: taxi update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.taxi_view_all_Page = async function(req, res) {
    try{
    thetaxi = await taxi.find();
    res.render('taxi', { title: 'taxi Search Results', results: thetaxi });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    