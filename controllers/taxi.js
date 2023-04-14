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
// exports.taxi_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: taxi detail: ' + req.params.id);
// };
// for a specific taxi.
exports.taxi_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await taxi.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
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
//  Handle taxi update form on PUT.
exports.taxi_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await taxi.findById( req.params.id)
    // Do updates of properties
    if(req.body.taxi_type)
    toUpdate.taxi_type = req.body.taxi_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
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


    