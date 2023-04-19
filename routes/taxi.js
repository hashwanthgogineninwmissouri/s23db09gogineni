var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('taxi', { title: 'Search Results of taxi' });
});

module.exports = router;

var express = require('express');
const taxi_controlers= require('../controllers/taxi');
var router = express.Router();
/* GET taxi */
router.get('/', taxi_controlers.taxi_view_all_Page );
module.exports = router;

// GET request for one taxi.
router.get('/taxi/:id', taxi_controlers.taxi_detail);

/* GET detail taxi page */
router.get('/detail', taxi_controlers.taxi_view_one_Page);

/* GET create taxi page */
router.get('/create', taxi_controlers.taxi_create_Page);

/* GET create update page */
router.get('/update', taxi_controlers.taxi_update_Page);
