var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var taxi_controller = require('../controllers/taxi');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// taxi ROUTES ///
// POST request for creating a taxi.
router.post('/taxi', taxi_controller.taxi_create_post);
// DELETE request to delete taxi.
router.delete('/taxi/:id', taxi_controller.taxi_delete);
// PUT request to update taxi.
router.put('/taxi/:id', taxi_controller.taxi_update_put);
// GET request for one taxi.
router.get('/taxi/:id', taxi_controller.taxi_detail);
// GET request for list of all taxi items.
router.get('/taxi', taxi_controller.taxi_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"taxi", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};

