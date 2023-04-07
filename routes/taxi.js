var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('taxi', { title: 'Search Results of taxi' });
});

module.exports = router;