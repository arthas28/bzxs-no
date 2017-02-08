var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send(ROOT_PATH);
  res.render('index');
});

module.exports = router;
