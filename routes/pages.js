var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('pages/users');
});

router.get('/hello', function(req, res, next) {
  res.send('respond with a hello!');
});

module.exports = router;