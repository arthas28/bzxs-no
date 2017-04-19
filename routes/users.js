var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('pages/users');
});

router.get('/hello', function(req, res, next) {
  res.send('respond with a hello1!');
});

module.exports = router;
