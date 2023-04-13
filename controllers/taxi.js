var taxi = require('../models/taxi');
// List of all taxis
exports.taxi_list = function(req, res) {
res.send('NOT IMPLEMENTED: taxi list');
};
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
