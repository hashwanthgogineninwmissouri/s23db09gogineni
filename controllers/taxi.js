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
exports.taxi_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: taxi create POST');
};
// Handle taxi delete form on DELETE.
exports.taxi_delete = function(req, res) {
res.send('NOT IMPLEMENTED: taxi delete DELETE ' + req.params.id);
};
// Handle taxi update form on PUT.
exports.taxi_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: taxi update PUT' + req.params.id);
};
