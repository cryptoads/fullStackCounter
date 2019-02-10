var express = require('express');
var router = express.Router();

var counter = 0;

router.get('/', function(req, res, next) {
  res.json({counter: counter})
});

router.post('/add', function(req, res, next){
    counter = counter + 1;
    res.json({counter: counter});
});

router.get('/subtract', function(req, res, next){
    counter = counter - 1;
    res.json({counter:counter});
});

module.exports = router;